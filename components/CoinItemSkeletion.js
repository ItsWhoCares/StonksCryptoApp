import { View, Text, ListItem, Colors } from "react-native-ui-lib";
import React from "react";

import { Skeleton } from "@rneui/themed";

const CoinItemSkeletion = () => {
  return (
    <View paddingH-5>
      <ListItem
        activeBackgroundColor={Colors.grey60}
        activeOpacity={0.3}
        height={77.5}>
        <ListItem.Part left>
          {/* <View
            style={{
              width: 32,
              height: 32,
              borderRadius: 20,
              marginHorizontal: 14,
              backgroundColor: Colors.mutedBackground,
            }}></View> */}
          <Skeleton
            circle
            animation="wave"
            width={32}
            height={32}
            style={{
              marginHorizontal: 14,
              backgroundColor: Colors.mutedBackground,
            }}
            skeletonStyle={{
              backgroundColor: Colors.mutedShadow,
            }}
          />
        </ListItem.Part>
        <ListItem.Part middle column containerStyle={{ paddingRight: 17 }}>
          <ListItem.Part containerStyle={{ marginBottom: 3 }}>
            {/* <View
              style={{
                backgroundColor: Colors.mutedBackground,
                width: "30%",
                height: "60%",
                borderRadius: 5,
              }}></View> */}
            <Skeleton
              animation="wave"
              style={{
                backgroundColor: Colors.mutedBackground,
                width: "30%",
                borderRadius: 5,
              }}
              skeletonStyle={{
                backgroundColor: Colors.mutedShadow,
              }}
            />
            <Skeleton
              animation="wave"
              style={{
                backgroundColor: Colors.mutedBackground,
                width: "20%",
                borderRadius: 5,
              }}
              skeletonStyle={{
                backgroundColor: Colors.mutedShadow,
              }}
            />
          </ListItem.Part>
          <ListItem.Part>
            <Skeleton
              animation="wave"
              style={{
                backgroundColor: Colors.mutedBackground,
                width: "20%",
                borderRadius: 5,
              }}
              skeletonStyle={{
                backgroundColor: Colors.mutedShadow,
              }}
            />
            <Skeleton
              animation="wave"
              style={{
                backgroundColor: Colors.mutedBackground,
                marginVertical: 10,
                width: "25%",
                borderRadius: 5,
              }}
              skeletonStyle={{
                backgroundColor: Colors.mutedShadow,
              }}
            />
          </ListItem.Part>
        </ListItem.Part>
      </ListItem>
    </View>
  );
};

export default CoinItemSkeletion;
