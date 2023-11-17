import {
  View,
  Text,
  ColorName,
  Colors,
  Button,
  TabController,
} from "react-native-ui-lib";
import React, { useEffect, useRef, useState } from "react";
import {
  Stack,
  useGlobalSearchParams,
  useLocalSearchParams,
} from "expo-router";
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  StyleSheet,
} from "react-native";
import {
  formatCurrency,
  formatNumber,
  getOneDayData,
} from "../Helpers/helpers";
import useCoin from "../Helpers/Hooks/useCoin";

import * as haptics from "expo-haptics";
import { LineChart } from "react-native-wagmi-charts";
import Chart from "../components/Chart";
import useHistory from "../Helpers/Hooks/useHistory";

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

function formatDate({ value }) {
  "worklet";
  // console.log(data);
  // const a = new Intl.DateTimeFormat("en-US").format(data.value);
  // console.log(a, data);
  // return `${data.value}`;
  // // console.log(value);
  // const a = new Date(value);
  // console.log(a);
  // return "hehe";
}

const Coin = () => {
  const params = useLocalSearchParams();
  const [coin, price] = useCoin(params);
  const [holdView, setHoldView] = useState(false);
  const [filter, setFilter] = useState(0);
  const history = useHistory({ coin, filter });

  return (
    <View flex bg-background useSafeArea={true}>
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
        <LineChart.Provider data={history.history}>
          <View paddingH-18>
            <Text textMuted marginB-15>
              {coin.symbol}
            </Text>
            <Text text50>{coin.name}</Text>
            {holdView ? (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <LineChart.PriceText
                  style={{
                    color: Colors.textColor,
                    lineHeight: 28,
                    fontSize: 24,
                    fontFamily: "RubikReg",
                    fontWeight: "bold",
                  }}
                  format={({ value }) => {
                    "worklet";
                    let val = parseFloat(value);
                    // console.log(val, value);
                    if (isNaN(val)) return "----";
                    const a = val.toLocaleString("en-IN", {
                      maximumFractionDigits: 2,
                      style: "currency",
                      currency: "INR",
                    });
                    return a;
                  }}
                />
              </View>
            ) : (
              <Text text50 marginT-4>
                {formatCurrency(price)}
              </Text>
            )}
            <Text
              text60
              marginV-15
              style={{
                color:
                  history.change <= 0
                    ? history.change == 0
                      ? Colors.textMuted
                      : Colors.negative
                    : Colors.positive,
                fontWeight: "bold",
              }}>
              {history.change <= 0
                ? formatNumber(history.change)
                : "+" + formatNumber(history.change)}
              {"%"}
            </Text>
          </View>
          <View paddingH-10>
            {history?.history?.length > 0 ? (
              <>
                <LineChart
                  width={Dimensions.get("window").width - 20}
                  height={300}>
                  <LineChart.Path
                    width={2}
                    color={
                      history.change > 0 ? Colors.positive : Colors.negative
                    }>
                    <LineChart.Gradient />
                    <LineChart.Tooltip
                      at={history.minIndex}
                      textStyle={{
                        color: Colors.textMuted,
                        top: 20,
                        // right: 50,
                        // textAlign: "justify",
                      }}
                      position="bottom"
                      // cursorGutter={15}
                      // xGutter={10}
                      // yGutter={10}
                    />
                    <LineChart.Tooltip
                      at={history.maxIndex}
                      textStyle={{
                        color: Colors.textMuted,
                        bottom: 20,
                      }}
                    />
                  </LineChart.Path>
                  <LineChart.CursorLine
                    lineProps={{
                      // fill: "#fff",
                      stroke: Colors.textColor,
                    }}
                  />
                  <LineChart.CursorCrosshair
                    color={
                      history.change > 0 ? Colors.positive : Colors.negative
                    }
                    crosshairWrapperProps={[]}
                    onActivated={() => {
                      setHoldView(true);
                      invokeHaptic();
                    }}
                    onEnded={() => {
                      setHoldView(false);
                      invokeHaptic();
                    }}
                  />
                  <LineChart.Tooltip
                    position="top"
                    textStyle={{
                      color: Colors.textColor,
                      bottom: 40,
                    }}
                    xGutter={15}>
                    <LineChart.DatetimeText
                      style={{
                        color: Colors.textColor,
                        bottom: 40,
                      }}
                      format={({ value }) => {
                        "worklet";
                        const date = new Date(value);

                        // Get the day, month, hour, and minutes from the Date object.
                        const day = date.getUTCDate();
                        const month = date.getUTCMonth() + 1;
                        const hour = date.getUTCHours();
                        const minutes = date.getUTCMinutes();

                        // Pad the day, month, hour, and minutes with zeros if necessary.
                        const paddedDay = day.toString().padStart(2, "0");
                        const paddedMonth = month.toString().padStart(2, "0");
                        const paddedHour = hour.toString().padStart(2, "0");
                        const paddedMinutes = minutes
                          .toString()
                          .padStart(2, "0");
                        const monthName = date.toLocaleDateString("en-US", {
                          month: "short",
                        });
                        // Return the formatted date and time string.
                        if (filter > 1)
                          return `${paddedDay}-${monthName} ${paddedHour}:${paddedMinutes}`;
                        return `${paddedHour}:${paddedMinutes}`;
                      }}
                    />
                  </LineChart.Tooltip>
                </LineChart>
              </>
            ) : (
              <View
                style={{
                  width: Dimensions.get("window").width - 20,
                  height: 300,
                  justifyContent: "center",
                  alignContent: "center",
                }}>
                <ActivityIndicator size={"large"} color={Colors.primary} />
              </View>
            )}
            <View
              paddingT-10
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
              }}>
              <Button
                label={"1H"}
                onPress={() => setFilter(0)}
                br100
                size={Button.sizes.xSmall}
                backgroundColor={
                  filter === 0 ? Colors.mutedBackground : Colors.background
                }
                labelStyle={{
                  fontWeight: filter === 0 ? "bold" : "300",
                  color: filter === 0 ? Colors.textColor : Colors.textMuted,
                }}
                text90
                marginV-5
                avoidMinWidth
              />
              <Button
                label={"1D"}
                onPress={() => setFilter(1)}
                br100
                size={Button.sizes.xSmall}
                backgroundColor={
                  filter === 1 ? Colors.mutedBackground : Colors.background
                }
                labelStyle={{
                  fontWeight: filter === 1 ? "bold" : "300",
                  color: filter === 1 ? Colors.textColor : Colors.textMuted,
                }}
                text90
                marginV-5
                avoidMinWidth
              />
              <Button
                label={"1W"}
                onPress={() => setFilter(2)}
                br100
                size={Button.sizes.xSmall}
                backgroundColor={
                  filter === 2 ? Colors.mutedBackground : Colors.background
                }
                labelStyle={{
                  fontWeight: filter === 2 ? "bold" : "300",
                  color: filter === 2 ? Colors.textColor : Colors.textMuted,
                }}
                text90
                marginV-5
                avoidMinWidth
              />
              <Button
                label={"1M"}
                onPress={() => setFilter(3)}
                br100
                size={Button.sizes.xSmall}
                backgroundColor={
                  filter === 3 ? Colors.mutedBackground : Colors.background
                }
                labelStyle={{
                  fontWeight: filter === 3 ? "bold" : "300",
                  color: filter === 3 ? Colors.textColor : Colors.textMuted,
                }}
                text90
                marginV-5
                avoidMinWidth
              />
              <Button
                label={"1Y"}
                onPress={() => setFilter(4)}
                br100
                size={Button.sizes.xSmall}
                backgroundColor={
                  filter === 4 ? Colors.mutedBackground : Colors.background
                }
                labelStyle={{
                  fontWeight: filter === 4 ? "bold" : "300",
                  color: filter === 4 ? Colors.textColor : Colors.textMuted,
                }}
                text90
                marginV-5
                avoidMinWidth
              />
            </View>
          </View>
        </LineChart.Provider>
        <TabController
          items={[{ label: "News" }, { label: "About Coin" }]}
          asCarousel
          initialIndex={1}>
          <TabController.TabBar
            enableShadows
            containerStyle={{
              marginLeft: "auto",
              backgroundColor: Colors.background,
            }}
            backgroundColor={Colors.background}
            labelColor={Colors.textMuted}
            labelStyle={{
              fontFamily: "RubikReg",
            }}
            selectedLabelColor={Colors.textColor}
            selectedLabelStyle={{
              fontFamily: "RubikReg",
            }}
            spreadItems={false}
            indicatorStyle={{
              backgroundColor: Colors.textColor,
              height: 3,
            }}
            indicatorWidth={30}
          />

          <TabController.PageCarousel>
            <TabController.TabPage index={0}>
              {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((a) => (
              <CoinItem key={a} />
            ))} */}
            </TabController.TabPage>
            <TabController.TabPage index={1}>
              <View style={styles.aboutRow} padding-15>
                <Text textMuted>Rank</Text>
                <Text>NO.{coin.rank}</Text>
              </View>
              <View style={styles.aboutRow} padding-15>
                <Text textMuted>Market Cap</Text>
                <Text>{formatCurrency(coin.marketCap, "compact")}</Text>
              </View>
              <View style={styles.line}></View>
              <View style={styles.aboutRow} padding-15>
                <Text textMuted>Tier</Text>
                <Text>{coin.tier}</Text>
              </View>
              <View style={styles.aboutRow} padding-15>
                <Text textMuted>Circulating Supply</Text>
                <Text>
                  {formatNumber(coin?.supply?.circulating, "compact") +
                    " " +
                    coin.symbol}
                </Text>
              </View>
              <View style={styles.aboutRow} padding-15>
                <Text textMuted>Max Supply</Text>
                <Text>
                  {formatNumber(coin?.supply?.max, "compact") +
                    " " +
                    coin.symbol}
                </Text>
              </View>
              <View style={styles.aboutRow} padding-15>
                <Text textMuted>Total Supply</Text>
                <Text>
                  {formatNumber(coin?.supply?.total, "compact") +
                    " " +
                    coin.symbol}
                </Text>
              </View>
              <View style={styles.aboutRow} padding-15>
                <Text textMuted>Listed At</Text>
                <Text>
                  {new Date(coin?.listedAt * 1000).toLocaleDateString(
                    "en-IN",
                    {}
                  )}
                </Text>
              </View>
              <View style={styles.aboutRow} padding-15>
                <Text textMuted>Exchanges</Text>
                <Text>{coin.numberOfExchanges}</Text>
              </View>
              <View style={styles.line}></View>
              <View style={styles.aboutRow} padding-15>
                <Text textMuted>All Time High</Text>
                <Text>{formatCurrency(coin.allTimeHigh?.price)}</Text>
              </View>
              <View style={styles.aboutRow} padding-15>
                <Text textMuted>All Time High At</Text>
                <Text>
                  {new Date(
                    coin.allTimeHigh?.timestamp * 1000
                  ).toLocaleDateString("en-IN") +
                    " " +
                    new Date(
                      coin.allTimeHigh?.timestamp * 1000
                    ).toLocaleTimeString("en-IN")}
                </Text>
              </View>
              <View style={styles.line}></View>
              <View style={styles.aboutRow} paddingT-10 paddingB-5 paddingH-15>
                <Text textMuted>Introduction</Text>
              </View>
              <View style={styles.aboutRow} paddingH-15 paddingB-15>
                <Text text80>{coin?.description}</Text>
              </View>
            </TabController.TabPage>
          </TabController.PageCarousel>
        </TabController>
      </ScrollView>
    </View>
  );
};

export default Coin;

const styles = StyleSheet.create({
  aboutRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  line: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#333B47",
    // width: "45%",
    marginHorizontal: 15,
  },
});
