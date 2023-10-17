import { View, Text, Image, ListItem, Colors } from "react-native-ui-lib";
import React from "react";
import { Alert, StyleSheet } from "react-native";

const CoinItem = () => {
  return (
    <View>
      <ListItem
        activeBackgroundColor={Colors.grey60}
        activeOpacity={0.3}
        height={77.5}
        onPress={() => Alert.alert(`pressed on order #1`)}>
        <ListItem.Part left>
          <Image
            source={{
              uri: "https://bin.bnbstatic.com/image/admin_mgs_image_upload/20220218/94863af2-c980-42cf-a139-7b9f462a36c2.png",
            }}
            style={styles.image}
          />
        </ListItem.Part>
        <ListItem.Part
          middle
          column
          containerStyle={[styles.border, { paddingRight: 17 }]}>
          <ListItem.Part containerStyle={{ marginBottom: 3 }}>
            <Text
              grey10
              text70
              style={{ flex: 1, marginRight: 10 }}
              numberOfLines={1}>
              {"BNB"}
            </Text>
            <Text grey10 text70 style={{ marginTop: 2 }}>
              {"$69"}
            </Text>
          </ListItem.Part>
          <ListItem.Part>
            <Text
              style={{ flex: 1, marginRight: 10 }}
              text90
              grey40
              numberOfLines={1}>{`${10} item`}</Text>
            <Text text90 color={"green"} numberOfLines={1}>
              {"paid"}
            </Text>
          </ListItem.Part>
        </ListItem.Part>
      </ListItem>
      {/* <Image
        style={StyleSheet.absoluteFillObject}
        overlayType="top"
        source={{
          uri: "https://bin.bnbstatic.com/image/admin_mgs_image_upload/20220218/94863af2-c980-42cf-a139-7b9f462a36c2.png",
        }}></Image>
      <View></View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 54,
    height: 54,
    borderRadius: 20,
    marginHorizontal: 14,
  },
  border: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.grey70,
  },
});

export default CoinItem;
