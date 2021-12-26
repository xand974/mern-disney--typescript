import "./chart.scss";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type ChartType = {
  grid: boolean;
  data: any;
  title: string;
  dataKey: any;
};

export default function Chart({ grid, data, title, dataKey }: ChartType) {
  return (
    <div className="chart">
      <h2 className="title">{title}</h2>

      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <Line type="monotone" dataKey={dataKey} color="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
