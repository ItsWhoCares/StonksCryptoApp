import React, { useEffect, useState } from "react";
import { Text, View, Colors } from "react-native-ui-lib";
import { AntDesign } from "@expo/vector-icons";
import { supabase, useUser } from "../Helpers/supabase";
import { useLocalSearchParams } from "expo-router/src/hooks";
import useCoin from "../Helpers/Hooks/useCoin";
import { TouchableOpacity } from "react-native";

const BookmarkIcon = () => {
  const user = useUser(null);
  const params = useLocalSearchParams();
  const [coin, price] = useCoin(params);
  const [isBookmarked, setIsBookmarked] = useState(false);
  useEffect(() => {
    const checkBookmark = async () => {
      const { data, error } = await supabase
        .from("bookmarks")
        .select("*")
        .eq("userID", user.id)
        .eq("coinUUID", coin?.uuid);
      if (data.length > 0) {
        //console.log(data);
        setIsBookmarked(true);
      }
    };

    if (user) {
      checkBookmark();
    }
  }, [user, coin]);

  const bookmark = () => {
    if (!user) return;
    if (isBookmarked) {
      supabase
        .from("bookmarks")
        .delete()
        .eq("userID", user.id)
        .eq("coinUUID", coin?.uuid)
        .then((r) => console.log(r));
      setIsBookmarked(false);
    } else {
      supabase
        .from("bookmarks")
        .insert([
          {
            userID: user.id,
            coinUUID: coin?.uuid,
          },
        ])
        .then((r) => console.log(r));
      setIsBookmarked(true);
    }
  };
  return (
    <TouchableOpacity onPress={bookmark}>
      <AntDesign
        name={isBookmarked ? "star" : "staro"}
        size={24}
        color={Colors.textMuted}
      />
    </TouchableOpacity>
  );
};

export default BookmarkIcon;
