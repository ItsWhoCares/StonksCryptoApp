import { View, Text, Colors } from "react-native-ui-lib";
import React from "react";
import { Stack, Tabs, router } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { supabase } from "../../Helpers/supabase";

const Home = () => {
  return (
    <View flex padding-page marginT-20 bg-card useSafeArea={true}>
      <Tabs.Screen
        options={
          {
            // headerShown: false,
            //tabBarActiveBackgroundColor: Colors.primaryColor,
          }
        }
      />
      <Text onPress={async () => await supabase.auth.signOut()}>Home</Text>
    </View>
  );
};

export default Home;
