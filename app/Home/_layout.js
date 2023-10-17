import { Feather, Fontisto, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Colors } from "react-native-ui-lib";

export default function Layout() {
  return (
    <>
      <StatusBar style="light" backgroundColor={Colors.card} />
      <Tabs
        screenOptions={{
          // tabBar
          tabBarActiveBackgroundColor: Colors.card,
          tabBarInactiveBackgroundColor: Colors.card,
          tabBarActiveTintColor: Colors.textColor,
          headerShown: false,

          tabBarStyle: {
            borderWidth: StyleSheet.hairlineWidth,
            //borderColor: Colors.card,
            borderTopColor: Colors.mutedForeground,
            borderBottomColor: Colors.card,
            //elevation: 10,
          },
        }}>
        <Tabs.Screen
          name="Markets"
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name="bar-chart-2"
                size={24}
                color={focused ? Colors.primary : Colors.mutedForeground}
              />
            ),
            headerRight: () => (
              <Ionicons
                name="search"
                size={24}
                style={{
                  marginRight: 15,
                }}
                color={Colors.mutedForeground}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Trade"
          options={{
            tabBarIcon: ({ focused }) => (
              <Fontisto
                name="arrow-swap"
                size={18}
                // style={{
                //   fontWeight: "bold",
                //   fontSize: 24,
                // }}
                color={focused ? Colors.primary : Colors.mutedForeground}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Portfolio"
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="wallet"
                size={18}
                // style={{
                //   fontWeight: "bold",
                //   fontSize: 24,
                // }}
                color={focused ? Colors.primary : Colors.mutedForeground}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
