import { Tabs } from "expo-router";
import React from "react";
import {
  Dimensions,
  View,
  Text,
  Colors,
  TabController,
} from "react-native-ui-lib";
import { useBalance, useUser } from "../../Helpers/supabase";
import { formatCurrency } from "../../Helpers/helpers";
import Assets from "../../components/Assets";
import usePortfolio from "../../Helpers/Hooks/usePortfolio";
import Stats from "../../components/Stats";

const Portfolio = () => {
  const balance = useBalance();
  const user = useUser();
  const [portfolio, refreshPortfolio] = usePortfolio(user);
  return (
    <View flex bg-background>
      <Tabs.Screen
        options={{
          title: "",
          headerShown: true,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerTintColor: Colors.textMuted,
          headerTitle: () => {
            return (
              <View
                bg-background
                style={{
                  display: "flex",
                  minWidth: "100%",
                  // backgroundColor: "red",
                  // marginLeft: "auto",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <Text primary fSB>
                  Total Balance
                </Text>
                <Text textColor fSB>
                  {formatCurrency(balance)}
                </Text>
              </View>
            );
          },
        }}
      />

      <TabController
        items={[{ label: "Stats" }, { label: "Assets" }]}
        asCarousel
        initialIndex={1}>
        <TabController.TabBar
          enableShadows
          containerStyle={{
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
            <Stats portfolio={portfolio} />
            {/* <Watchlist /> */}
            {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((a) => (
              <CoinItem key={a} />
            ))} */}
          </TabController.TabPage>
          <TabController.TabPage index={1}>
            <Assets portfolio={portfolio} refresh={refreshPortfolio} />
          </TabController.TabPage>
        </TabController.PageCarousel>
      </TabController>
    </View>
  );
};

export default Portfolio;
