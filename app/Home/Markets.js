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
import { Skeleton } from "@rneui/themed";
import { Typography } from "react-native-ui-lib";
import Watchlist from "../../components/Watchlist";

const orderBy = ["marketCap", "price", "change"];

const renderFlashItem = ({ item }) => {
  return <CoinItem coin={item} />;
};

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
  const balance = useBalance(null);

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
              fontFamily: "CustomFontB",
            },
          }}
        />
        <View style={styles.balContainer}>
          <View>
            <Text text75 textColor>
              Total Balance
            </Text>

            {balance === null ? (
              <Skeleton
                animation="wave"
                style={{
                  backgroundColor: Colors.mutedBackground,
                  height: 23,
                  marginTop: 3,
                  borderRadius: 10,
                }}
                skeletonStyle={{
                  backgroundColor: Colors.mutedShadow,
                }}
              />
            ) : (
              <>
                <Text text70 textColor>
                  {formatCurrency(balance)}
                </Text>
              </>
            )}
          </View>
          <AntDesign
            name="eye"
            size={16}
            color={Colors.textColor}
            style={{ marginLeft: 10 }}
          />
          <AntDesign
            onPress={() => supabase.auth.signOut()}
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
            fontFamily: "CustomFontM",
            fontSize: 16,
          }}
          selectedLabelColor={Colors.textColor}
          selectedLabelStyle={{
            fontFamily: "CustomFontM",
            fontSize: 16,
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
            <Watchlist />
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
                  color: filter === 0 ? Colors.textColor : Colors.textMuted,
                }}
                text90
                marginV-5
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
                  color: filter === 1 ? Colors.textColor : Colors.textMuted,
                }}
                text90
                marginV-5
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
                  color: filter === 2 ? Colors.textColor : Colors.textMuted,
                }}
                text90
                marginV-5
              />
            </View>
            {!loading ? (
              <FlashList
                drawDistance={200}
                refreshing={loading}
                onRefresh={() => fetchCoins()}
                data={coinList}
                renderItem={renderFlashItem}
                estimatedItemSize={100}
                keyExtractor={(item) => item.uuid}
              />
            ) : (
              [1, 2, 3, 4, 5, 6, 7, 8, 9].map((a) => (
                <CoinItemSkeletion key={a} />
              ))
            )}
            {/* <CoinItemSkeletion key={1} /> */}
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
