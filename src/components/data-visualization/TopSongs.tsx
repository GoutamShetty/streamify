/**
 * @author Goutam Shetty <goutam.shetty1@gmail.com>
 * @description TopSongs
 */

import React from "react";
import { Card } from "antd";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import QueryBoundary from "../widget/QueryBoundary";
import useTopSongs from "../hooks/useTopSongs";

const TopSongs: React.FC = () => {
  const topSongs = useTopSongs();

  return (
    <Card title="Top 5 Streamed Songs">
      <QueryBoundary {...topSongs}>
        <ResponsiveContainer width="100%" height={322}>
          <BarChart data={topSongs.data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="streams" name="Streams" fill="#dc9d29" />
          </BarChart>
        </ResponsiveContainer>
      </QueryBoundary>
    </Card>
  );
};

export default TopSongs;
