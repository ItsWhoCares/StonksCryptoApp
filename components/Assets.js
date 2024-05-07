import {
  View,
  Text,
  Card,
  Colors,
  TouchableOpacity,
  Button,
  ButtonSize,
  Image,
} from "react-native-ui-lib";
import React from "react";
import { StyleSheet } from "react-native";
import { formatCurrency, formatNumber } from "../Helpers/helpers";
import { FlashList } from "@shopify/flash-list";
import { SvgUri } from "react-native-svg";
import AssetsItem from "./AssetsItem";

const Assets = ({ portfolio, refresh }) => {
  // console.log(portfolio);
  const [loading, setLoading] = React.useState(false);
  const refreshing = React.useCallback(() => {
    setLoading(true);
    refresh().then(() => {
      setLoading(false);
    });
  }, [refresh]);
  if (portfolio.length === 0) return <Text>No assets</Text>;
  return (
    <View flex bg-background padding-card>
      <FlashList
        data={portfolio}
        refreshing={loading}
        onRefresh={refreshing}
        estimatedItemSize={100}
        keyExtractor={(item) => item.buyID}
        renderItem={({ item }) => <AssetsItem item={item} />}
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
  },
  border: {
    // borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.grey70,
  },
});

export default Assets;
