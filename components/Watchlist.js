import { View, Text } from "react-native-ui-lib";
import React, { useEffect, useState } from "react";
import { getBookMarkedCoins } from "../Helpers/helpers";
import { useUser } from "../Helpers/supabase";
import { FlashList } from "@shopify/flash-list";
import CoinItem from "./CoinItem";
import CoinItemSkeletion from "./CoinItemSkeletion";

const Watchlist = () => {
  const user = useUser(null);
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCoins = async () => {
    setLoading(true);
    await getBookMarkedCoins(user?.id).then((r) => {
      setCoins(r);
    });
    setLoading(false);
  };

  useEffect(() => {
    if (user) getBookMarkedCoins(user?.id).then((r) => setCoins(r));
  }, [user]);
  if (!coins.length)
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Text textColor>Your Watchlist is empty</Text>
      </View>
    );
  return (
    <>
      {!loading ? (
        <FlashList
          refreshing={loading}
          onRefresh={() => fetchCoins()}
          data={coins}
          renderItem={({ item }) => <CoinItem key={item?.uuid} coin={item} />}
          estimatedItemSize={100}
        />
      ) : (
        [1, 2, 3, 4, 5].map((a) => <CoinItemSkeletion key={a} />)
      )}
    </>
  );
};

export default Watchlist;
