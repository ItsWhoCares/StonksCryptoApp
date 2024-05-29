import { useState, useEffect } from "react";
import { supabase } from "../supabase";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { formatNumber } from "../helpers";
import { Image } from "react-native-ui-lib";

export async function getPortfolio(userID) {
  const { data, error } = await supabase
    .from("portfolio")
    .select("*")
    .eq("userID", userID);
  if (error) {
    console.log(error);
    return -1;
  }

  //get coin info for each bookmark
  const portfolio = await Promise.all(
    data.map(async (portfolioItem) => {
      const res = await fetch(
        `${process.env.EXPO_PUBLIC_API_URL}/api/getCoinInfo?uuid=${portfolioItem.coinUUID}`
      );
      const coin = await res.json();
      await Image.prefetch(coin.iconUrl);
      return {
        ...portfolioItem,
        // iconUrl: coin.iconUrl,
        ...coin,
        holdings: {
          currentPrice: coin.price,
          change: formatNumber(
            ((coin.price - portfolioItem.coinPrice) / portfolioItem.coinPrice) *
              100
          ),
          currentValue: coin.price * portfolioItem.quantity,
          buyValue: portfolioItem.coinPrice * portfolioItem.quantity,
          quantity: portfolioItem.quantity,
        },
      };
    })
  );
  return portfolio;
}

const usePortfolio = (user) => {
  const [portfolio, setPortfolio] = useState(null);

  const refreshPortfolio = async () => {
    if (!user) return;
    const portfolio = await getPortfolio(user.id);
    if (portfolio.length === 0) return setPortfolio(null);
    setPortfolio(portfolio);
  };

  useEffect(() => {
    if (!user) return;
    getPortfolio(user.id).then((portfolio) => {
      if (portfolio.length === 0) return setPortfolio(null);
      setPortfolio(portfolio);
    });
  }, [user]);

  useEffect(() => {
    const channels = supabase
      .channel("custom-all-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "portfolio" },
        (payload) => {
          console.log("Change portfolio", payload);
          refreshPortfolio();
        }
      )
      .subscribe();
    console.log("Subscribed to portfolio channel");
    return () => {
      console.log("Unsubscribed from portfolio channel");
      channels.unsubscribe();
    };
  }, [user]);

  return [portfolio, refreshPortfolio];
};

export default usePortfolio;
