import React from "react";
import { Dimensions, View, Text, Colors } from "react-native-ui-lib";
import * as haptics from "expo-haptics";
import { LineChart } from "react-native-wagmi-charts";

function invokeHaptic() {
  haptics.impactAsync(haptics.ImpactFeedbackStyle.Light);
}

const Chart = ({ data }) => {
  return (
    <View flex bg-background>
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

export default Chart;
