import { AntDesign, Feather, Fontisto, FontAwesome5 } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
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
        }}>
        <Tabs.Screen
          name="Markets"
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name="bar-chart-2"
                size={24}
                color={focused ? Colors.main : "#fff"}
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
                color={focused ? Colors.main : "#fff"}
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
                color={focused ? Colors.main : "#fff"}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
