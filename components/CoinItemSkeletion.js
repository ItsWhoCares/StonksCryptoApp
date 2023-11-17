import { View, Text, ListItem, Colors } from "react-native-ui-lib";
import React from "react";

const CoinItemSkeletion = () => {
  return (
    <View paddingH-5>
      <ListItem
        activeBackgroundColor={Colors.grey60}
        activeOpacity={0.3}
        height={77.5}>
        <ListItem.Part left>
          <View
            style={{
              width: 32,
              height: 32,
              borderRadius: 20,
              marginHorizontal: 14,
              backgroundColor: Colors.mutedBackground,
            }}></View>
        </ListItem.Part>
        <ListItem.Part middle column containerStyle={{ paddingRight: 17 }}>
          <ListItem.Part containerStyle={{ marginBottom: 3 }}>
            <View
              style={{
                backgroundColor: Colors.mutedBackground,
                width: "30%",
                height: "60%",
                borderRadius: 5,
              }}></View>
            <View
              style={{
                marginVertical: 10,
                backgroundColor: Colors.mutedBackground,
                width: "20%",
                height: "60%",
                borderRadius: 5,
              }}></View>
          </ListItem.Part>
          <ListItem.Part>
            <View
              style={{
                backgroundColor: Colors.mutedBackground,
                width: "20%",
                height: "60%",
                borderRadius: 5,
              }}></View>
            <View
              style={{
                marginVertical: 10,
                backgroundColor: Colors.mutedBackground,
                width: "25%",
                height: "60%",
                borderRadius: 5,
              }}></View>
          </ListItem.Part>
        </ListItem.Part>
      </ListItem>
    </View>
  );
};

export default CoinItemSkeletion;
