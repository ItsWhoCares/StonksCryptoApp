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

export default function App() {
  useEffect(() => {
    NavigationBar.setBackgroundColorAsync(Colors.card);
    setTimeout(() => router.replace("/LogIn"));
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
