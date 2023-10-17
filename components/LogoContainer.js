import React from "react";
import { StyleSheet } from "react-native";
import logo from "../../assets/logo.png";
import {
  View,
  Text,
  Card,
  Button,
  LoaderScreen,
  SafeAreaSpacerView,
  Icon,
} from "react-native-ui-lib";

import { Colors, Typography, Spacings } from "react-native-ui-lib";

const LogoContainer = () => {
  return (
    <View style={styles.logoContainer}>
      <View style={styles.logo}>
        <Icon source={logo} size={110} tintColor={Colors.primary} />
      </View>

      <View style={styles.title}>
        <Text main text20>
          Stonks
        </Text>
        <Text main text20L>
          Crypto
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    // backgroundColor: "red",
    width: "100%",
    padding: 10,
  },
  logo: {
    // height: "100%",
    alignSelf: "center",
    // margin: "auto",
    // justifyContent: "center",
  },
  title: {
    alignSelf: "center",
  },
});

export default LogoContainer;
