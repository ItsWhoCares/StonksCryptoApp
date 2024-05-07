//import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet } from "react-native";

import "../FoundationConfig";
import "../ComponentConfig";

import React, { useEffect } from "react";
import {
  View,
  Text,
  Card,
  Button,
  LoaderScreen,
  SafeAreaSpacerView,
  Icon,
  TextField,
} from "react-native-ui-lib";

import { Colors } from "react-native-ui-lib";

import { AntDesign } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import SignUp from "./SignUp";
import { SafeAreaView, StatusBar } from "react-native";
import LogIn from "./LogIn";

import * as NavigationBar from "expo-navigation-bar";

import { SplashScreen } from "expo-router";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";

import { supabase } from "../Helpers/supabase";

import "react-native-gesture-handler";

import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  const [loaded, error] = useFonts({
    CustomFontL: require("../assets/fonts/IBMPlexSans-Light.ttf"),
    CustomFontR: require("../assets/fonts/IBMPlexSans-Regular.ttf"),
    CustomFontM: require("../assets/fonts/IBMPlexSans-Medium.ttf"),
    CustomFontB: require("../assets/fonts/IBMPlexSans-Bold.ttf"),
    CustomFontSB: require("../assets/fonts/IBMPlexSans-SemiBold.ttf"),
    RubikLight: require("../assets/fonts/Rubik-Light.ttf"),
  });

  const checkAuth = () => {
    try {
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (session) {
          router.replace("/Home");
        } else {
          console.log("no user");
        }
      });

      supabase.auth.onAuthStateChange((_event, session) => {
        if (session) {
          router.replace("/Home");
        } else {
          console.log("no user listner");
          router.replace("/LogIn");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    NavigationBar.setBackgroundColorAsync(Colors.background);
    if (loaded) {
      SplashScreen.hideAsync();
      checkAuth();
    }
  }, [loaded]);
  useEffect(() => {
    StatusBar.setBackgroundColor(Colors.background);
    StatusBar.setBarStyle("light-content");
  }, []);

  return (
    <SafeAreaView style={[styles.container, styles.horizontal]}>
      <StatusBar style="light" backgroundColor={Colors.background} />
      <ActivityIndicator size={"large"} color={Colors.primary} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Colors.background,
    marginTop: StatusBar.currentHeight,
  },
  horizontal: {
    flexDirection: "row",
    //justifyContent: "space-around",
    padding: 10,
  },
});
