import { useEffect, useState } from "react";
import { getOneDayData } from "../helpers";
import { useLocalSearchParams } from "expo-router";

async function getCoinInfo(uuid) {
  const res = await fetch(
    `${process.env.EXPO_PUBLIC_API_URL}/api/getCoinInfo?uuid=${uuid}`
  );
  if (res.status !== 200) {
    return null;
  }
  const data = await res.json();
  return data;
}

async function getCoinPrice(uuid) {
  const res = await fetch(
    `${process.env.EXPO_PUBLIC_API_URL}/api/getCoinPrice?uuid=${uuid}`
  );
  if (res.status !== 200) {
    return null;
  }
  const data = await res.json();
  //console.log(data);
  return data.price;
}

export default function useCoin(initial) {
  if (!initial) initial = useLocalSearchParams();
  const [coin, setCoin] = useState(initial);
  const [price, setPrice] = useState(initial.price);
  useEffect(() => {
    getCoinInfo(coin.uuid).then((r) => setCoin(r));
    getCoinPrice(coin.uuid).then((r) => setPrice(r));

    const iter = setInterval(() => {
      getCoinPrice(coin.uuid).then((r) => setPrice(r));
    }, 10000);
    return () => {
      clearInterval(iter);
    };
  }, []);
  return [coin, price];
}
