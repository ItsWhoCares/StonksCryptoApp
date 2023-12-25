import { View, Text, ListItem, Colors } from "react-native-ui-lib";
import React, { useState } from "react";
import { Alert, StyleSheet } from "react-native";
import { SvgUri } from "react-native-svg";
import { Image } from "expo-image";
import logo from "../assets/logo.png";
import { formatCurrency, formatNumber } from "../Helpers/helpers";
import { router } from "expo-router";
import { Typography } from "react-native-ui-lib";

const workers = [
  "https://svg-to-png.mrproper.dev/",
  ,
  "https://svg-to-png.citiesskylinegautam.workers.dev/",
];

const CoinItem = ({ coin }) => {
  const [u, setU] = useState(0);
  // console.log(Typography.textThin);
  return (
    <View paddingH-5>
      <ListItem
        activeBackgroundColor={Colors.grey60}
        activeOpacity={0.3}
        height={77.5}
        onPress={() =>
          router.push({
            pathname: "/Coin",
            params: {
              uuid: coin.uuid,
              symbol: coin.symbol,
              name: coin.name,
              price: coin.price,
              change: coin.change,
            },
          })
        }>
        <ListItem.Part left>
          <Image
            source={{
              uri: coin.iconUrl,
            }}
            cachePolicy={"memory-disk"}
            style={styles.image}
            onError={(e) => {
              console.log(e);
            }}
            contentFit="cover"
            transition={{
              duration: 1,
              effect: "flip-from-left",
              timing: "ease-in-out",
            }}
          />
        </ListItem.Part>
        <ListItem.Part
          middle
          column
          containerStyle={[styles.border, { paddingRight: 17 }]}>
          <ListItem.Part containerStyle={{ marginBottom: 3 }}>
            <Text
              textColor
              textThick
              style={{ flex: 1, marginRight: 10 }}
              numberOfLines={1}>
              {coin.name}
            </Text>
            <Text
              text70
              style={{
                marginTop: 2,
                color:
                  coin.change <= 0
                    ? coin.change == 0
                      ? Colors.textMuted
                      : Colors.negative
                    : Colors.positive,
                //fontWeight: "bold",
                fontFamily: "CustomFontB",
              }}>
              {coin.change <= 0
                ? formatNumber(coin.change)
                : "+" + formatNumber(coin.change)}
              {"%"}
            </Text>
          </ListItem.Part>
          <ListItem.Part>
            <Text
              textThin
              style={{
                flex: 1,
                marginRight: 10,
                color: Colors.textMuted,
                fontSize: 13,
              }}
              numberOfLines={1}>
              {coin.symbol}
            </Text>
            <Text textThin textColor numberOfLines={1}>
              {formatCurrency(coin.price)}
            </Text>
          </ListItem.Part>
        </ListItem.Part>
      </ListItem>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 32,
    height: 32,
    borderRadius: 20,
    marginHorizontal: 14,
  },
  border: {
    // borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.grey70,
  },
});

export default CoinItem;
