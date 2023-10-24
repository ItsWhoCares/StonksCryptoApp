import { Stack } from "expo-router/stack";
import { StatusBar } from "react-native";
import { useEffect } from "react";
import { Colors } from "react-native-ui-lib";

import "react-native-reanimated";
import "react-native-gesture-handler";

import { SplashScreen } from "expo-router";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";

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
          headerStyle: {
            backgroundColor: Colors.card,
          },
          headerTintColor: Colors.foreground,
        }}>
        <Stack.Screen
          name="LogIn"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
