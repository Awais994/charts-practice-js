import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Surface,
  Symbols,
  ResponsiveContainer,
} from "recharts";
import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import CircleIcon from "@mui/icons-material/Circle";
// const tradeToken = "0x9813037ee2218799597d83d4a5b6f3b6778218d9";

const CustmizeToll = ({ active, payload, label }) => {
  console.log(payload);
  return (
    <Box
      sx={{
        width: "200px",
        p: 2,
        background: "linear-gradient(white, grey)",
      }}
    >
      <Box> {new Date().toLocaleString()}</Box>
      <Box>{label}</Box>
      {payload.map((entry, index) => (
        <Box
          key={`item-${index}`}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {" "}
          <CircleIcon sx={{ color: entry.fill, fontSize: "16px" }} />
          {entry.value}
        </Box>
      ))}
    </Box>
  );
};

function Charts() {
  // const [finalData, setFinalData] = useState([]);

  // const chkQuery = (num) => {
  //   if (num === 0) {
  //     const query1 = JSON.stringify({
  //       query: `query MyQuery {
  //           pairs(
  //              where: {token0_: {id: "${tradeToken}"}},first:1000
  //           ) {
  //             id
  //             token0 {
  //               name
  //               symbol
  //               id
  //             }
  //             token1 {
  //               name
  //               symbol
  //               id
  //             }
  //           }
  //         }`,
  //       variables: {},
  //     });
  //     return query1;
  //   } else {
  //     const query2 = JSON.stringify({
  //       query: `query MyQuery {
  //               pairs(
  //                  where: {token0_: {id: "${tradeToken}"}},first:${1000 * num}
  //               ) {
  //                 id
  //                 token0 {
  //                   name
  //                   symbol
  //                   id
  //                 }
  //                 token1 {
  //                   name
  //                   symbol
  //                   id
  //                 }
  //               }
  //             }`,
  //       variables: {},
  //     });
  //     return query2;
  //   }
  // };

  // const call = async () => {
  //   let num = 0;
  //   try {
  //     const queryRoutes = chkQuery(num);
  //     const {
  //       data: { data },
  //     } = await axios.post(
  //       "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2",
  //       queryRoutes
  //     );
  //     if (data?.pairs?.length !== 1000) {
  //       num = 0;
  //       setFinalData([...data.pairs]);
  //       return;
  //     } else {
  //       num = num + 1;
  //       setFinalData((prev) => [...prev, ...data.pairs]);
  //       call();
  //       return;
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   call();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  // const renderLegend = (props) => {
  //   const { payload } = props;

  //   return (
  //     <ul>
  //       {payload.map((entry, index) => (
  //         <li key={`item-${index}`}>{entry.value}</li>
  //       ))}
  //     </ul>
  //   );
  // };
  // const renderLegend = (props) => {
  //   const { payload } = props;

  //   return (
  //     <div
  //       style={{
  //         display: "grid",
  //         gridTemplateColumns: "max-content max-content",
  //         gap: "1em",
  //       }}
  //     >
  //       {payload.map((entry, index) => (
  //         <div>{entry.value}</div>
  //       ))}
  //     </div>
  //   );
  // };
  // const renderCusomizedLegend = ({ payload }) => {
  //   return (
  //     <div className="customized-legend">
  //       {payload.map((entry) => {
  //         const { dataKey, color } = entry;
  //         const active = payload.includes(this.state.disabled, dataKey);
  //         const style = {
  //           marginRight: 10,
  //           color: active ? "#AAA" : "#000",
  //         };

  //         return (
  //           <span
  //             className="legend-item"
  //             onClick={() => this.handleClick(dataKey)}
  //             style={style}
  //           >
  //             <Surface width={10} height={10} viewBox="0 0 10 10">
  //               <Symbols cx={5} cy={5} type="circle" size={50} fill={color} />
  //               {active && (
  //                 <Symbols
  //                   cx={5}
  //                   cy={5}
  //                   type="circle"
  //                   size={25}
  //                   fill={"#FFF"}
  //                 />
  //               )}
  //             </Surface>
  //             <span>{dataKey}</span>
  //           </span>
  //         );
  //       })}
  //     </div>
  //   );
  // };
  return (
    <>
      <Box mt={2} mx={2}>
        {/* <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            flex: "1",
            width: "0",
          }}
        > */}
        <ResponsiveContainer width="99%" height={400}>
          <AreaChart
            // width={500}
            // height={400}

            animationDuration={5000}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Legend verticalAlign="top" height={36} />

            {/* <Legend content={<CustmizeToll />} /> */}
            <Tooltip
              // itemStyle={{ color: "white" }}
              // contentStyle={{
              //   background: "gray",
              //   color: "white",
              //   width: "200px",
              // }}
              content={<CustmizeToll />}
            />

            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fill="#8884d8"
              animationEasing="ease-out"
              isAnimationActive={false}
              // animationDuration={1000}
            />
            {/* <Area type="monotone" dataKey="pv" stroke="#8884d8" fill="red" /> */}
            {/* <Area
              type="monotone"
              dataKey="amt"
              stroke="#8884d8"
              fill="#8884d8"
            /> */}
          </AreaChart>
        </ResponsiveContainer>
        {/* </div>
      </div> */}
      </Box>
    </>
  );
}

export default Charts;
