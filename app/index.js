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

import CText from "../components/CText";

import { supabase } from "../Helpers/supabase";

export default function App() {
  const [loaded, error] = useFonts({
    RubikReg: require("../assets/fonts/Rubik-Regular.ttf"),
    RubikLight: require("../assets/fonts/Rubik-Light.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    NavigationBar.setBackgroundColorAsync(Colors.card);
    if (loaded) {
      SplashScreen.hideAsync();
      setTimeout(() => router.replace("/LogIn"));
    }
  }, [loaded]);

  useEffect(() => {
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
        console.log("no user");
        router.replace("/LogIn");
      }
    });
  }, []);

  return (
    <SafeAreaView style={[styles.container, styles.horizontal]}>
      <StatusBar style="light" backgroundColor={Colors.card} />
      <ActivityIndicator size={"large"} color={Colors.primaryColor} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Colors.card,
    marginTop: StatusBar.currentHeight,
  },
  horizontal: {
    flexDirection: "row",
    //justifyContent: "space-around",
    padding: 10,
  },
});
