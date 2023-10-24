import { View, Text, ColorName, Colors } from "react-native-ui-lib";
import React, { useEffect, useRef } from "react";
import { Stack, useGlobalSearchParams } from "expo-router";
import { ScrollView } from "react-native";
import {
  formatCurrency,
  formatNumber,
  getOneDayData,
} from "../Helpers/helpers";
import useCoin from "../Helpers/Hooks/useCoin";

import * as haptics from "expo-haptics";
import { LineChart } from "react-native-wagmi-charts";
import Chart from "../components/Chart";

function invokeHaptic() {
  haptics.impactAsync(haptics.ImpactFeedbackStyle.Light);
}
const data = [
  { value: 2812319.3029655386, timestamp: 1698169500000 },
  { value: 2816249.639762188, timestamp: 1698169200000 },
  { value: 2814299.876975376, timestamp: 1698168900000 },
  { value: 2823146.773718928, timestamp: 1698168600000 },
  { value: 2817021.3670248417, timestamp: 1698168300000 },
  { value: 2823531.891986371, timestamp: 1698168000000 },
  { value: 2816896.5276166867, timestamp: 1698167700000 },
  { value: 2824669.512563625, timestamp: 1698167400000 },
  { value: 2823337.4698271593, timestamp: 1698167100000 },
  { value: 2818700.6470459914, timestamp: 1698166800000 },
  { value: 2824890.352240346, timestamp: 1698166500000 },
  { value: 2821058.682604612, timestamp: 1698166200000 },
  { value: 2828538.6076861825, timestamp: 1698165900000 },
  { value: 2824653.70376702, timestamp: 1698165600000 },
  { value: 2833937.2889853492, timestamp: 1698165300000 },
  { value: 2808688.5650636735, timestamp: 1698165000000 },
  { value: 2812766.3798904484, timestamp: 1698164700000 },
  { value: 2811321.586207453, timestamp: 1698164400000 },
  { value: 2811256.056814812, timestamp: 1698164100000 },
  { value: 2808201.390325437, timestamp: 1698163800000 },
  { value: 2798045.380426849, timestamp: 1698163500000 },
];

const Coin = () => {
  const params = useGlobalSearchParams();
  const [coin, price, change, history] = useCoin(params);
  const [holdView, setHoldView] = useCoin(false);

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
              change <= 0
                ? change == 0
                  ? Colors.textMuted
                  : Colors.negative
                : Colors.positive,
            fontWeight: "bold",
          }}>
          {change <= 0 ? formatNumber(change) : "+" + formatNumber(change)}
          {"%"}
        </Text>
        <View flex>
          <LineChart.Provider data={data}>
            <LineChart>
              <LineChart.Path color={Colors.positive}>
                <LineChart.Gradient />
              </LineChart.Path>
              <LineChart.CursorLine />
              <LineChart.CursorCrosshair
                color={Colors.positive}
                crosshairWrapperProps={[]}
                onActivated={() => {
                  invokeHaptic();
                }}
                onEnded={() => {
                  invokeHaptic();
                }}
              />
              <LineChart.Tooltip />
            </LineChart>
          </LineChart.Provider>
        </View>
      </ScrollView>
    </View>
  );
};

export default Coin;
