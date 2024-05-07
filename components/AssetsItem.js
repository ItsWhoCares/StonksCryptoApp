import {
  View,
  Text,
  Colors,
  TouchableOpacity,
  Button,
  ButtonSize,
} from "react-native-ui-lib";
import React from "react";
import { SvgUri } from "react-native-svg";
import {
  createSellTransaction,
  formatCurrency,
  formatNumber,
} from "../Helpers/helpers";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";
import { router, useRouter } from "expo-router";

const AssetsItem = ({ item }) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: "/Coin",
          params: {
            uuid: item.uuid,
            symbol: item.symbol,
            name: item.name,
            price: item.price,
            change: item.change,
          },
        })
      }>
      <View
        row
        padding-card
        bg-background
        // height={70}
        style={{
          justifyContent: "space-between",
        }}>
        <View
          row
          style={{
            width: 80,
            // justifyContent: "center",
            alignItems: "center",
          }}>
          <Image
            source={{
              uri: item.iconUrl,
            }}
            transition={{
              duration: 1,
              effect: "flip-from-left",
              timing: "ease-in-out",
            }}
            cachePolicy={"memory-disk"}
            // defaultSource={require("../assets/logo.png")}
            onError={(e) => {
              console.log("IMAGE Error", e);
            }}
            contentFit="cover"
            // style={styles.image}
            style={{
              width: 32,
              height: 32,
            }}
          />

          <View paddingH-10 width={100}>
            <Text h5 textColor fB>
              {item.symbol}
            </Text>
            <Text h5 fR textMuted>
              {item.name}
            </Text>
          </View>
        </View>
        <View>
          <Text center textColor h5>
            {formatCurrency(item.holdings.currentValue)}
          </Text>
          <Text center h5 textMuted>
            {formatNumber(item.holdings.quantity)}
            {"  " + item.symbol}
          </Text>
        </View>
        <Button
          label="Sell"
          fB
          background
          size={ButtonSize.medium}
          backgroundColor={Colors.primary}
          onPress={() => {
            createSellTransaction({ buyID: item.buyID });
          }}
        />
      </View>
    </TouchableOpacity>
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

export default AssetsItem;
