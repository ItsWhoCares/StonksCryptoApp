import { router } from "expo-router";
import { supabase } from "./supabase";
export const handleLogin = async ({ email, pass }) => {
  console.log(email, pass);

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password: pass,
  });
  console.log(data, error);
  //   router.replace("/Home");
};
