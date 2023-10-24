import { useEffect, useState } from "react";
import { getOneDayData } from "../helpers";

async function getCoinInfo(uuid) {
  const res = await fetch(
    `https://stonks-crypto.vercel.app/api/getCoinInfo?uuid=${uuid}`
  );
  if (res.status !== 200) {
    return null;
  }
  const data = await res.json();
  return data;
}

async function getCoinPrice(uuid) {
  const res = await fetch(
    `https://stonks-crypto.vercel.app/api/getCoinPrice?uuid=${uuid}`
  );
  if (res.status !== 200) {
    return null;
  }
  const data = await res.json();
  //console.log(data);
  return data.price;
}

export default function useCoin(initial) {
  const [coin, setCoin] = useState(initial);
  const [price, setPrice] = useState(initial.price);
  const [change, setChange] = useState(initial.change);
  const [history, setHistory] = useState([]);
  useEffect(() => {
    getCoinInfo(coin.uuid).then((r) => setCoin(r));
    getCoinPrice(coin.uuid).then((r) => setPrice(r));
    getOneDayData(coin.uuid).then((r) => {
      setHistory(r.history);
      setChange(r.change);
    });
    const iter = setInterval(() => {
      getCoinPrice(coin.uuid).then((r) => setPrice(r));
    }, 10000);
    return () => {
      clearInterval(iter);
    };
  }, []);
  return [coin, price, change, history];
}
