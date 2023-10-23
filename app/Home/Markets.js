import {
  View,
  Text,
  Colors,
  TabController,
  Image,
  Button,
  Assets,
  ButtonSize,
} from "react-native-ui-lib";
import React, { useState } from "react";
import { Stack, Tabs, router } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { supabase } from "../../Helpers/supabase";
import { FlatList, ScrollView, StatusBar, StyleSheet } from "react-native";
import CoinItem from "../../components/CoinItem";
import { getTopCoins } from "../../Helpers/helpers";

const Home = () => {
  const [coinList, setCoinList] = useState([]);
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
              {"$ 69.69"}
            </Text>
          </View>
          <AntDesign
            name="eye"
            size={18}
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
            <View style={{ flexDirection: "row" }}>
              <Button
                label={"Market Cap"}
                onPress={async () => {
                  setCoinList(await getTopCoins({ orderBy: "marketCap" }));
                }}
                br20
                size={Button.sizes.small}
                backgroundColor={Colors.background}
                marginH-5
                textColor
              />
              <Button
                label={"Price"}
                br20
                size={Button.sizes.small}
                backgroundColor={Colors.background}
                marginH-5
                textColor
              />
              <Button
                label={"24H Change"}
                br20
                size={Button.sizes.small}
                backgroundColor={Colors.background}
                marginH-5
                textColor
              />
              {/* <Button lable={"Market Cap"} size={ButtonSize.small} />
              <Button lable={"Price"} size={ButtonSize.small} />
              <Button lable={"24H Change"} size={ButtonSize.small} /> */}
            </View>
            <FlatList
              data={coinList}
              renderItem={({ item }) => (
                <CoinItem key={item?.uuid} coin={item} />
              )}
            />
            {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((a) => (
              <CoinItem key={a} />
            ))} */}
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
