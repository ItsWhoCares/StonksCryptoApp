import { View, Text, Colors } from "react-native-ui-lib";
import React from "react";
import { StyleSheet } from "react-native";
import { Skeleton } from "@rneui/base";

const AssetsItemSkeleton = () => {
  return (
    <View
      row
      padding-card
      bg-background
      // height={70}
      style={{
        justifyContent: "space-between",
      }}>
      <View
        row
        style={{
          width: 80,
          // justifyContent: "center",
          alignItems: "center",
        }}>
        <Skeleton
          style={styles.image}
          animation="wave"
          skeletonStyle={{
            backgroundColor: Colors.mutedBackground,
          }}
        />

        <View paddingH-10 width={100}>
          <Skeleton
            animation="wave"
            style={{
              backgroundColor: Colors.mutedBackground,
              marginVertical: 5,
              width: "100%",
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
              width: "80%",
              borderRadius: 5,
            }}
            skeletonStyle={{
              backgroundColor: Colors.mutedShadow,
            }}
          />
        </View>
      </View>
      <View>
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
      </View>
      <Skeleton
        animation="wave"
        style={{
          backgroundColor: Colors.mutedBackground,
          width: "25%",
          height: 36,
          borderRadius: 20,
        }}
        skeletonStyle={{
          backgroundColor: Colors.mutedShadow,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 32,
    height: 32,
    borderRadius: 20,
    // marginHorizontal: 14,
    backgroundColor: Colors.mutedShadow,
  },
  border: {
    // borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.grey70,
  },
});
export default AssetsItemSkeleton;
