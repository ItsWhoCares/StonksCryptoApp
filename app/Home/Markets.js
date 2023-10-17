import {
  View,
  Text,
  Colors,
  TabController,
  Image,
  Button,
  Assets,
} from "react-native-ui-lib";
import React from "react";
import { Stack, Tabs, router } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { supabase } from "../../Helpers/supabase";
import { FlatList, ScrollView, StyleSheet } from "react-native";
import CoinItem from "../../components/CoinItem";

const Home = () => {
  return (
    <ScrollView
      nestedScrollEnabled={true}
      style={{ flex: 1, backgroundColor: Colors.background }}>
      <View flex padding-page bg-card useSafeArea={true}>
        <Tabs.Screen
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: Colors.card,
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
          labelColor={Colors.textColor}
          selectedLabelColor={Colors.textColor}
          spreadItems={false}
          indicatorStyle={{
            backgroundColor: Colors.textColor,
          }}
        />

        <TabController.PageCarousel>
          <TabController.TabPage index={0} lazy>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((a) => (
              <CoinItem key={a} />
            ))}
          </TabController.TabPage>
          <TabController.TabPage index={1}>
            <ScrollView nestedScrollEnabled>
              {/* <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]}
                renderItem={(item) => <CoinItem key={item} />}
              /> */}
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((a) => (
                <CoinItem key={a} />
              ))}
            </ScrollView>
          </TabController.TabPage>
        </TabController.PageCarousel>
      </TabController>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  balContainer: {
    flexDirection: "row",
    // justifyContent: "space-between",
  },
});

export default Home;
