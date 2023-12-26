import { useEffect, useState } from "react";
import useCoin from "./useCoin";
const filters = ["1h", "24h", "7d", "30d", "1y"];
import chartData from "../time.json";
async function getChart(uuid, filter) {
  const res = await fetch(
    `${process.env.EXPO_PUBLIC_API_URL}/api/mobile/getChart?uuid=${uuid}&tp=${filters[filter]}`
  );
  const data = await res.json();
  //const data = chartData;

  data.history = data.history.filter((a) => a.value !== null);
  let max = data.history[0].value;
  let maxIndex = 0;
  let min = data.history[data.history.length - 1].value;
  let minIndex = data.history.length - 1;
  for (let i = 0; i < data.history.length; i++) {
    if (data.history[i].value > max) {
      max = data.history[i].value;
      maxIndex = i;
    }
    if (data.history[i].value < min) {
      min = data.history[i].value;
      minIndex = i;
    }
  }

  //console.log(max, maxIndex, min, minIndex);
  return { ...data, minIndex: minIndex, maxIndex: maxIndex };
}

export default function useHistory({ coin, filter = 0 }) {
  const [history, setHistory] = useState({
    change: coin.change ?? 0,
    history: [],
  });

  useEffect(() => {
    setHistory({ change: history?.change, history: [] });
    getChart(coin.uuid, filter).then((r) => {
      setHistory(r);
    });
    const iter = setInterval(() => {
      getChart(coin.uuid, filter).then((r) => {
        setHistory(r);
      });
      //console.log(history.history[history.history.length - 1]);
    }, 30000);
    return () => clearInterval(iter);
  }, [filter]);
  return history;
}
