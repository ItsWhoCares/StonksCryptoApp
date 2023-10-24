import React from "react";
import { Dimensions, View, Text, Colors } from "react-native-ui-lib";
import * as haptics from "expo-haptics";
import { LineChart } from "react-native-wagmi-charts";
import { ScrollView } from "react-native";

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

function invokeHaptic() {
  haptics.impactAsync(haptics.ImpactFeedbackStyle.Light);
}

const Portfolio = () => {
  return (
    <View flex bg-background padding-page>
      <LineChart.Provider data={data}>
        <LineChart>
          <LineChart.Path color={Colors.positive}>
            <LineChart.Gradient />
          </LineChart.Path>
          <LineChart.CursorLine />
        </LineChart>
        <LineChart.PriceText />
        <LineChart.DatetimeText />
      </LineChart.Provider>
    </View>
  );
};

export default Portfolio;
