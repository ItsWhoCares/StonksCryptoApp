import { View, Text, ColorName, Colors } from "react-native-ui-lib";
import React from "react";
import { Stack, useGlobalSearchParams } from "expo-router";
import { ScrollView } from "react-native";
import { formatCurrency, formatNumber } from "../Helpers/helpers";
import useCoin from "../Helpers/Hooks/useCoin";

const Coin = () => {
  const params = useGlobalSearchParams();
  //console.log(JSON.stringify(params));

  const [coin, price] = useCoin(params);

  return (
    <View flex paddingH-18 bg-background useSafeArea={true}>
      <Stack.Screen
        options={{
          title: "",
          headerShown: true,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerTintColor: Colors.textMuted,
        }}
      />
      <ScrollView>
        <Text textMuted marginB-15>
          {coin.symbol}
        </Text>
        <Text text50>{coin.name}</Text>
        <Text text50>{formatCurrency(price)}</Text>
        <Text
          text60
          marginV-15
          style={{
            color:
              coin.change <= 0
                ? coin.change == 0
                  ? Colors.textMuted
                  : Colors.negative
                : Colors.positive,
            fontWeight: "bold",
          }}>
          {coin.change <= 0
            ? formatNumber(coin.change)
            : "+" + formatNumber(coin.change)}
          {"%"}
        </Text>
      </ScrollView>
    </View>
  );
};

export default Coin;
