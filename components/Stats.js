import { View, Text, Colors } from "react-native-ui-lib";
import React from "react";
import { PieChart } from "react-native-gifted-charts";

const Stats = ({ portfolio }) => {
  return (
    <View padding-card>
      <View padding-card>
        <View>
          <Text textColor h2 center fSB>
            Portfolio
          </Text>
        </View>
        <View
          row
          padding-10
          style={{
            justifyContent: "space-between",
          }}>
          <View flex center centerV>
            <PieChart
              data={[
                {
                  value: 50,
                  color: "#ff9ea3",
                  text: "Red",
                },
                {
                  value: 20,
                  color: "#256ddd",
                  text: "Blue",
                },
                {
                  value: 30,
                  color: "#fed637",
                  text: "Yellow",
                },
              ]}
              backgroundColor={Colors.background}
              radius={65}
              innerRadius={45}
              donut
            />
          </View>

          <View flex>
            <Text textColor h5 center fSB>
              Total
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Stats;
