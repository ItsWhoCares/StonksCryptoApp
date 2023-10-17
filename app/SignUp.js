import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import "../FoundationConfig";
import "../ComponentConfig";

import React, { useState } from "react";
import {
  View,
  Card,
  Button,
  LoaderScreen,
  SafeAreaSpacerView,
  Icon,
  TextField,
} from "react-native-ui-lib";
import Text from "../components/CText";

import { Colors } from "react-native-ui-lib";

import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Link, Stack, router } from "expo-router";
import { handleSignUp } from "../Helpers/authHelpers";
import Modal from "../components/Modal";
import { Toast } from "react-native-ui-lib/src/incubator";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isError, setIsError] = useState(null);
  const [toToast, setToToast] = useState(null);
  const [msg, setMsg] = useState("");
  return (
    <View flex padding-page marginT-20 bg-card>
      <StatusBar style="light" backgroundColor={Colors.card} />

      <Text text40 foreground>
        Create an account
      </Text>
      <Text mutedForeground>Enter your email below to create your account</Text>

      <View
        style={{
          flexDirection: "row",
          //alignContent: "center",
          justifyContent: "space-between",
          paddingVertical: 15,
        }}>
        <Button
          label={"Github"}
          labelStyle={
            {
              // fontFamily: "RubikLight",
              // textAlignVertical: "bottom",
            }
          }
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
        validate={(value) => value.length > 6}
        validationMessage="Password is too short"
        validationMessagePosition={"bottom"}
        validateOnChange
        // validationMessageStyle={{
        //   color: "red",
        // }}
        // onValidationFailed={() => console.log("f")}
      />
      <Button
        label={"Create account"}
        br20
        size={Button.sizes.large}
        backgroundColor={Colors.primary}
        marginT-10
        primaryForeground
        onPress={() => {
          const res = handleSignUp({
            email,
            pass,
            setIsError,
            setToToast,
            setMsg,
          });
        }}
      />
      <Text
        mutedForeground
        center
        margin-15
        highlightString={["Terms of Service", "Privacy Policy"]}
        highlightStyle={{
          textDecorationLine: "underline",
          color: Colors.primary,
        }}>
        By creating an account, I agree to StonksCrypto's Terms of Service and
        Privacy Policy.
      </Text>
      <Text
        onPress={() => router.replace("/LogIn")}
        marginT-30
        text70
        mutedForeground
        highlightString={["Log In"]}
        highlightStyle={{
          color: Colors.primary,
        }}>
        Already have an account? Log In
      </Text>

      <Modal
        isVisible={isError}
        message={isError?.message}
        setVisible={setIsError}
      />
      <Toast
        visible={toToast}
        position={"top"}
        autoDismiss={5000}
        onDismiss={() => {
          setToToast(false);
          router.replace("/LogIn");
        }}
        message={msg}
        swipeable
        style={{
          backgroundColor: Colors.card,
          color: Colors.textColor,
          borderColor: Colors.input,
        }}
        messageStyle={{
          color: Colors.textColor,
        }}
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
});
