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
  TextField,
  SafeAreaSpacerView,
} from "react-native-ui-lib";

//import { SafeAreaView } from "react-native-safe-area-context";

import { Colors } from "react-native-ui-lib";

import { AntDesign } from "@expo/vector-icons";
import { Link, Stack, router } from "expo-router";

import Text from "../components/CText";
import { handleLogin } from "../Helpers/authHelpers";
import Modal from "../components/Modal";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isError, setIsError] = useState(null);
  return (
    <View flex padding-page marginT-20 bg-card useSafeArea={true}>
      <StatusBar style="light" backgroundColor={Colors.card} />
      <SafeAreaSpacerView />

      <Text text40 foreground>
        Sign In
      </Text>
      <Text mutedForeground>Enter your email below to sign In</Text>

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
            <AntDesign name="github" size={24} color={Colors.foreground} />
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
            <AntDesign name="google" size={24} color={Colors.foreground} />
          )}
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          flexDirection: "column",
          marginBottom: 10,
        }}>
        <View style={styles.line}></View>
        <Text center mutedForeground>
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
        placeholderTextColor={Colors.mutedForeground}
        fieldStyle={styles.withFrame}
        foreground
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
        placeholderTextColor={Colors.mutedForeground}
        fieldStyle={styles.withFrame}
        foreground
        secureTextEntry
      />
      <Button
        label={"Log In"}
        onPress={() =>
          handleLogin({
            email,
            pass,
            setIsError,
          })
        }
        br20
        size={Button.sizes.large}
        backgroundColor={Colors.primaryColor}
        marginT-10
        primaryForeground
      />

      <Text
        onPress={() => router.replace("/SignUp")}
        marginT-80
        text70
        mutedForeground
        highlightString={["Sign Up"]}
        highlightStyle={{
          color: Colors.primaryColor,
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
    backgroundColor: Colors.card,
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
    color: Colors.foreground,
    backgroundColor: Colors.background,
    height: 46,
    paddingLeft: 15,
  },
  labelStyle: {
    color: Colors.foreground,
    fontSize: 18,
    paddingBottom: 6,
    fontFamily: "RubikReg",
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
