import { Feather, Fontisto, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Tabs, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Colors } from "react-native-ui-lib";
import { supabase } from "../../Helpers/supabase";

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
            fontFamily: "RubikReg",
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
                onPress={async () => await supabase.auth.signOut()}
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
                color={focused ? Colors.primary : Colors.mutedIcon}
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
                color={focused ? Colors.primary : Colors.mutedIcon}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
