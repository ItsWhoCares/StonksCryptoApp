import { Feather, Fontisto, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Tabs, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Colors, ActionSheet } from "react-native-ui-lib";
import { supabase } from "../../Helpers/supabase";

import { Stack } from "expo-router/stack";

import "react-native-gesture-handler";

export default function Layout() {
  return (
    <>
      <StatusBar style="light" backgroundColor={Colors.background} />
      <Tabs
        screenOptions={{
          // tabBar
          tabBarActiveBackgroundColor: Colors.background,
          tabBarInactiveBackgroundColor: Colors.background,
          tabBarActiveTintColor: Colors.textColor,
          tabBarInactiveTintColor: Colors.textMuted,
          headerShown: false,
          tabBarLabelStyle: {
            fontFamily: "CustomFontR",
          },

          tabBarStyle: {
            borderWidth: StyleSheet.hairlineWidth,
            //borderColor: Colors.card,
            borderTopColor: "#333B47",
            borderBottomColor: Colors.background,
            //elevation: 10,
          },
        }}>
        <Tabs.Screen
          name="Markets"
          options={{
            lazy: false,
            tabBarIcon: ({ focused }) => (
              <Feather
                name="bar-chart-2"
                size={24}
                color={focused ? Colors.primary : Colors.mutedIcon}
              />
            ),
            headerRight: () => (
              <Ionicons
                name="search"
                size={24}
                style={{
                  marginRight: 15,
                }}
                color={Colors.mutedIcon}
                onPress={() => router.push("/Search")}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Trade"
          options={{
            href: null,
            tabBarIcon: ({ focused }) => (
              <Fontisto
                name="arrow-swap"
                size={18}
                // style={{
                //   fontWeight: "bold",
                //   fontSize: 24,
                // }}
                color={focused ? Colors.primary : Colors.mutedIcon}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="Portfolio"
          options={{
            lazy: false,
            tabBarLabel: "Portfolio",
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="wallet"
                size={18}
                // style={{
                //   fontWeight: "bold",
                //   fontSize: 24,
                // }}
                color={focused ? Colors.primary : Colors.mutedIcon}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
