import "react-native-url-polyfill/auto";
import { createClient } from "@supabase/supabase-js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";
import * as aesjs from "aes-js";
import "react-native-get-random-values";
import { useEffect, useState } from "react";

// As Expo's SecureStore does not support values larger than 2048
// bytes, an AES-256 key is generated and stored in SecureStore, while
// it is used to encrypt/decrypt values stored in AsyncStorage.
class LargeSecureStore {
  async _encrypt(key, value) {
    const encryptionKey = crypto.getRandomValues(new Uint8Array(256 / 8));

    const cipher = new aesjs.ModeOfOperation.ctr(
      encryptionKey,
      new aesjs.Counter(1)
    );
    const encryptedBytes = cipher.encrypt(aesjs.utils.utf8.toBytes(value));

    await SecureStore.setItemAsync(
      key,
      aesjs.utils.hex.fromBytes(encryptionKey)
    );

    return aesjs.utils.hex.fromBytes(encryptedBytes);
  }

  async _decrypt(key, value) {
    const encryptionKeyHex = await SecureStore.getItemAsync(key);
    if (!encryptionKeyHex) {
      return encryptionKeyHex;
    }

    const cipher = new aesjs.ModeOfOperation.ctr(
      aesjs.utils.hex.toBytes(encryptionKeyHex),
      new aesjs.Counter(1)
    );
    const decryptedBytes = cipher.decrypt(aesjs.utils.hex.toBytes(value));

    return aesjs.utils.utf8.fromBytes(decryptedBytes);
  }

  async getItem(key) {
    const encrypted = await AsyncStorage.getItem(key);
    if (!encrypted) {
      return encrypted;
    }

    return await this._decrypt(key, encrypted);
  }

  async removeItem(key) {
    await AsyncStorage.removeItem(key);
    await SecureStore.deleteItemAsync(key);
  }

  async setItem(key, value) {
    const encrypted = await this._encrypt(key, value);

    await AsyncStorage.setItem(key, encrypted);
  }
}

export const supabase = createClient(
  "https://lhizcmwymlozpypgpvia.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxoaXpjbXd5bWxvenB5cGdwdmlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk0Nzc3NTIsImV4cCI6MTk5NTA1Mzc1Mn0.QbndSHaPoJMUrpQ2QvEDIM9OqvGuW20nchemXnsm_g0",
  {
    auth: {
      storage: new LargeSecureStore(),
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  }
);

export const useUser = (initial) => {
  const [user, setUser] = useState(initial);
  useEffect(() => {
    supabase.auth.getUser().then((usr) => setUser(usr.data.user));
  }, []);
  return user;
};

async function getBalance(userID) {
  //console.log(userID);
  const { data, error } = await supabase
    .from("user_data")
    .select("*")
    .eq("user_id", userID);
  if (error) {
    console.log(error);
    return -1;
  }
  return data[0]?.balance ?? -1;
}

export const useBalance = (initial) => {
  const [balance, setBalance] = useState(initial);
  const user = useUser();
  useEffect(() => {
    if (!user) return;
    getBalance(user.id).then((balance) => {
      setBalance(balance);
    });
  }, [user]);
  useEffect(() => {
    if (!user) return;
    const userData = supabase
      .channel("custom-update-channel")
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "user_data" },
        (payload) => {
          console.log("Change received!", payload);
          setBalance(payload.new.balance);
        }
      )
      .subscribe();
    return () => {
      userData.unsubscribe();
    };
  }, [user]);
  return balance;
};
