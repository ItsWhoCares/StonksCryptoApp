import { Stack } from "expo-router/stack";
import { StatusBar } from "react-native";
import { useEffect } from "react";
import { Colors } from "react-native-ui-lib";

import "../FoundationConfig";
import "../ComponentConfig";

import "react-native-reanimated";
import "react-native-gesture-handler";

import { SplashScreen, router } from "expo-router";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import BookmarkIcon from "../components/BookmarkIcon";

export default function Layout() {
  useEffect(() => {
    StatusBar.setBackgroundColor(Colors.background);
    StatusBar.setBarStyle("light-content");
  }, []);
  return (
    <>
      <StatusBar style="light" backgroundColor={Colors.background} />
      <Stack
        screenOptions={{
          headerShown: false,
          // headerStyle: {
          //   backgroundColor: Colors.card,
          // },
          // headerTintColor: Colors.mutedText,
        }}>
        <Stack.Screen
          name="LogIn"
          options={{
            animation: "slide_from_left",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          options={{
            animation: "slide_from_right",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Coin"
          options={{
            animation: "fade_from_bottom",
            headerShown: false,
            headerRight: () => <BookmarkIcon />,
            headerTitle: "",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Search"
          options={{
            animation: "slide_from_right",
            headerShown: true,
            headerStyle: {
              backgroundColor: Colors.background,
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTintColor: Colors.textMuted,
            headerShadowVisible: false,
            headerTitle: "Search Crypto",
            headerTitleAlign: "center",

            headerTitleStyle: {
              color: Colors.textColor,
              fontSize: 18,
              fontFamily: "CustomFontB",
            },

            // headerLeft: () => (
            //   <Ionicons
            //     name="arrow-back"
            //     size={24}
            //     color={Colors.mutedIcon}
            //     onPress={() => router.back()}
            //   />
            // ),
          }}
        />

        <Stack.Screen
          name="BuySell"
          options={{
            animation: "slide_from_right",
            headerShown: true,
            headerStyle: {
              backgroundColor: Colors.background,
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTintColor: Colors.textMuted,
            headerShadowVisible: false,
            headerTitle: "",
            // headerTitleAlign: "center",

            // headerTitleStyle: {
            //   color: Colors.textColor,
            //   fontSize: 18,
            //   fontFamily: "CustomFontB",
            // },

            // headerLeft: () => (
            //   <Ionicons
            //     name="arrow-back"
            //     size={24}
            //     color={Colors.mutedIcon}
            //     onPress={() => router.back()}
            //   />
            // ),
          }}
        />
      </Stack>
    </>
  );
}
