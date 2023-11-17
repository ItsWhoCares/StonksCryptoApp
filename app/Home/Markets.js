import {
  View,
  Text,
  Colors,
  TabController,
  Image,
  Button,
  Assets,
  ButtonSize,
  SkeletonView,
  ListItem,
} from "react-native-ui-lib";
import React, { useEffect, useState } from "react";
import { Stack, Tabs, router } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { supabase, useBalance, useUser } from "../../Helpers/supabase";
import { FlatList, ScrollView, StatusBar, StyleSheet } from "react-native";
import CoinItem from "../../components/CoinItem";
import {
  getTopCoins,
  getBalance,
  formatNumber,
  formatCurrency,
} from "../../Helpers/helpers";
import { FlashList } from "@shopify/flash-list";
import CoinItemSkeletion from "../../components/CoinItemSkeletion";

const orderBy = ["marketCap", "price", "change"];

const Home = () => {
  const [coinList, setCoinList] = useState([]);
  const [filter, setFilter] = useState(0);
  const [loading, setLoading] = useState(false);
  const fetchCoins = async (quite = false) => {
    if (quite) {
      getTopCoins({ orderBy: orderBy[filter] }).then((r) => {
        setCoinList(r);
      });
      return;
    }
    setLoading(true);
    getTopCoins({ orderBy: orderBy[filter] }).then((r) => {
      setCoinList(r);
      setLoading(false);
    });
  };
  useEffect(() => {
    fetchCoins();
    const iter = setInterval(() => fetchCoins(true), 10000);
    return () => {
      clearInterval(iter);
    };
  }, [filter]);

  const user = useUser(null);
  // const supabase = useSupabaseClient();
  const balance = useBalance("----");

  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      <StatusBar backgroundColor={Colors.background} style="light" />
      <View padding-page bg-background useSafeArea={true}>
        <Tabs.Screen
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: Colors.background,
              shadowColor: null,
              // borderBottomColor: Colors.card,
              elevation: 0,
            },
            headerTitle: "Stonks Crypto",
            headerTitleStyle: {
              color: Colors.primary,
            },
          }}
        />
        <View style={styles.balContainer}>
          <View>
            <Text text75 textColor>
              Total Balance
            </Text>
            <Text text70 textColor>
              {balance === "----" ? "----" : formatCurrency(balance)}
            </Text>
          </View>
          <AntDesign
            name="eye"
            size={16}
            color={Colors.textColor}
            style={{ marginLeft: 10 }}
          />
          <AntDesign
            name="arrowright"
            size={24}
            color={Colors.textColor}
            style={{ marginLeft: "auto", alignSelf: "center" }}
          />
        </View>
      </View>
      <TabController
        items={[{ label: "Watchlist" }, { label: "Coin" }]}
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
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
              }}>
              <Button
                label={"Market Cap"}
                onPress={() => setFilter(0)}
                br100
                size={Button.sizes.small}
                backgroundColor={
                  filter === 0 ? Colors.mutedBackground : Colors.background
                }
                labelStyle={{
                  fontWeight: filter === 0 ? "bold" : "300",
                }}
                text90
                marginV-5
                textColor
              />
              <Button
                label={"Price"}
                onPress={() => setFilter(1)}
                br100
                size={Button.sizes.small}
                backgroundColor={
                  filter === 1 ? Colors.mutedBackground : Colors.background
                }
                labelStyle={{
                  fontWeight: filter === 1 ? "bold" : "300",
                }}
                text90
                marginV-5
                textColor
              />
              <Button
                label={"24H Change"}
                onPress={() => setFilter(2)}
                br100
                size={Button.sizes.small}
                backgroundColor={
                  filter === 2 ? Colors.mutedBackground : Colors.background
                }
                labelStyle={{
                  fontWeight: filter === 2 ? "bold" : "300",
                }}
                text90
                marginV-5
                textColor
              />
              {/* <Button lable={"Market Cap"} size={ButtonSize.small} />
              <Button lable={"Price"} size={ButtonSize.small} />
              <Button lable={"24H Change"} size={ButtonSize.small} /> */}
            </View>
            {!loading ? (
              <FlashList
                refreshing={loading}
                onRefresh={() => fetchCoins()}
                data={coinList}
                renderItem={({ item }) => (
                  <CoinItem key={item?.uuid} coin={item} />
                )}
                estimatedItemSize={100}
              />
            ) : (
              [1, 2, 3, 4, 5, 6, 7, 8, 9].map((a) => (
                <CoinItemSkeletion key={a} />
              ))
            )}
          </TabController.TabPage>
        </TabController.PageCarousel>
      </TabController>
    </View>
  );
};

const styles = StyleSheet.create({
  balContainer: {
    flexDirection: "row",
    // justifyContent: "space-between",
  },
});

export default Home;
