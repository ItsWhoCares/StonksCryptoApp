import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet } from "react-native";

import "../FoundationConfig";
import "../ComponentConfig";

import React, { useRef, useState } from "react";
import {
  View,
  Card,
  Button,
  LoaderScreen,
  Icon,
  Text,
  SafeAreaSpacerView,
} from "react-native-ui-lib";
import TextField from "../components/TextField";

//import { SafeAreaView } from "react-native-safe-area-context";

import { Colors } from "react-native-ui-lib";

import { AntDesign } from "@expo/vector-icons";
import { Link, Stack, router } from "expo-router";

import {
  handleLoginWithEmail,
  handleLoginWithOAuth,
} from "../Helpers/authHelpers";
import Modal from "../components/Modal";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isError, setIsError] = useState(null);
  const [loading, setLoading] = useState(false);
  return (
    <View flex padding-page marginT-20 bg-background useSafeArea={true}>
      <SafeAreaSpacerView />
      <StatusBar backgroundColor={Colors.background} style="light" />

      <Text text40 textColor>
        Log In
      </Text>
      <Text textMuted>Enter your email below to log In</Text>

      <View style={styles.OAuthBtnContainer}>
        <Button
          label={"Github"}
          br20
          outlineWidth={1}
          outlineColor={Colors.input}
          size={Button.sizes.large}
          backgroundColor={Colors.background}
          style={{
            width: "45%",
            justifyContent: "space-evenly",
          }}
          iconSource={() => (
            <AntDesign name="github" size={24} color={Colors.textColor} />
          )}
        />

        <Button
          label={"Google"}
          br20
          outlineWidth={1}
          outlineColor={Colors.input}
          size={Button.sizes.large}
          backgroundColor={Colors.background}
          style={{
            width: "45%",
            justifyContent: "space-evenly",
          }}
          iconSource={() => (
            <AntDesign name="google" size={24} color={Colors.textColor} />
          )}
          onPress={() => router.replace("/")}
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          flexDirection: "column",
          marginBottom: 10,
        }}>
        <View style={styles.line}></View>
        <Text center textMuted>
          OR
        </Text>
        <View style={[styles.line, { marginLeft: "55%" }]}></View>
      </View>
      <TextField
        label="Email"
        labelStyle={styles.labelStyle}
        containerStyle={{
          color: Colors.background,
          paddingVertical: 10,
        }}
        onChangeText={(value) => setEmail(value)}
        placeholder="m@example.com"
        placeholderTextColor={Colors.textMuted}
        fieldStyle={styles.withFrame}
        textColor
      />
      <TextField
        onChangeText={(value) => setPass(value)}
        label="Password"
        labelStyle={styles.labelStyle}
        containerStyle={{
          color: Colors.background,
          paddingVertical: 10,
        }}
        placeholder=""
        placeholderTextColor={Colors.textMuted}
        fieldStyle={styles.withFrame}
        secureTextEntry
        textColor
      />
      <Button
        label={loading ? "..." : "Log In"}
        onPress={async () => {
          setLoading(true);
          await handleLoginWithEmail({
            email,
            pass,
            setIsError,
          });
          setLoading(false);
        }}
        br20
        size={Button.sizes.large}
        backgroundColor={Colors.primary}
        marginT-10
        background
      />

      <Text
        onPress={() => router.replace("/SignUp")}
        marginT-80
        text70
        white
        highlightString={["Sign Up"]}
        highlightStyle={{
          color: Colors.primary,
        }}>
        Don't have an account? Sign Up
      </Text>
      <Modal
        isVisible={isError}
        message={isError?.message}
        setVisible={setIsError}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: Colors.background,
    alignItems: "",
    justifyContent: "",
  },
  line: {
    position: "absolute",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#fff",
    width: "45%",
  },
  logoContainer: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    width: "100%",
    padding: 10,
  },
  logo: {
    alignSelf: "center",
  },
  title: {
    alignSelf: "center",
  },
  withFrame: {
    borderWidth: 1,
    borderColor: Colors.input,
    padding: 4,
    borderRadius: 6,
    color: Colors.textColor,
    backgroundColor: Colors.background,
    height: 46,
    paddingHorizontal: 15,
  },
  labelStyle: {
    color: Colors.textColor,
    fontSize: 18,
    paddingBottom: 6,
    fontFamily: "CustomFontR",
  },
  OAuthBtnContainer: {
    flexDirection: "row",
    //alignContent: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
  },
  OAuthBtn: {
    width: "45%",
    justifyContent: "space-evenly",
  },
});
