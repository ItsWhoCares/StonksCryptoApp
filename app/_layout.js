import { Stack } from "expo-router/stack";
import { StatusBar } from "react-native";
import { useEffect } from "react";
import { Colors } from "react-native-ui-lib";

import { SplashScreen } from "expo-router";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";

import CText from "../components/CText";

export default function Layout() {
  const [loaded, error] = useFonts({
    RubikReg: require("../assets/fonts/Rubik-Regular.ttf"),
    RubikLight: require("../assets/fonts/Rubik-Light.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);
  useEffect(() => {
    StatusBar.setBackgroundColor(Colors.card);
    StatusBar.setBarStyle("light-content");
  }, []);
  return (
    <>
      <StatusBar style="light" backgroundColor={Colors.card} />
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
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
