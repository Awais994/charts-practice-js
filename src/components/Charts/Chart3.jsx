/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
import React from "react";
import { Box } from "@mui/material";
import axios from "axios";
import ReactECharts from "echarts-for-react";
import { useEffect, useState } from "react";

const kFormatter = (num) => {
  return Math.abs(num) > 999
    ? "$" + Math.sign(num) * (Math.abs(num) / 1000).toFixed(2) + "k"
    : Math.sign(num) * Math.abs(num);
};

function Chart3() {
  const [prices, setPrices] = useState([]);
  // const [all, setAll] = useState([]);
  const pricesListArray = [];
  const dateListArray = [];

  const getData = async () => {
    try {
      const { data } = await axios.get(
        "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7"
      );
      setPrices(data.prices);
      //   setAll(data.market_caps);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // eslint-disable-next-line no-unused-expressions
  prices.length !== 0
    ? prices.map((info) => {
        pricesListArray.push(info[1]);
        dateListArray.push(new Date(info[0]).toLocaleDateString());
      })
    : null;
  let average = 0;
  pricesListArray.length !== 0
    ? pricesListArray.forEach((info) => {
        average = average + +info;
      })
    : null;
  const option3 = {
    title: {
      text: "Stacked Area Chart",
    },

    tooltip: {
      trigger: "axis",
    },
    visualMap: {
      show: false,
      dimension: 1,
      pieces: [
        {
          min: average / pricesListArray.length,
          color: "#04d12a",
        },
        {
          max: average / pricesListArray.length - 1,

          color: "#cc0704",
        },
      ],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,

        data: dateListArray,
      },
    ],
    yAxis: {
      type: "value",
      min: function (value) {
        return value.min.toFixed(2);
      },
      max: function (value) {
        return value.max.toFixed(2);
      },

      axisLabel: {
        formatter: function (value) {
          return "$" + (value / 1000).toFixed(2) + "k";
        },
      },
    },
    dataZoom: [
      {
        type: "inside",
      },
    ],
    series: [
      {
        name: "Prices",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: pricesListArray,
        markLine: {
          symbol: ["none", "none"],
          label: {
            position: "start",
            backgroundColor: "grey",
            color: "white",
            top: 10,
            borderRadius: 5,
            padding: 8,
          },
          data: [
            {
              yAxis: average / pricesListArray.length,
            },
          ],
        },
      },
    ],
  };
  return (
    <>
      <Box p={4}>
        <ReactECharts
          style={{ width: "100%", height: "500px" }}
          option={option3}
        />
      </Box>
    </>
  );
}

export default Chart3;
