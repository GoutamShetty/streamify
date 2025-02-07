/**
 * @author Goutam Shetty <goutam.shetty1@gmail.com>
 * @description UserGrowth
 */

import React from "react";
import { Card } from "antd";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import QueryBoundary from "../widget/QueryBoundary";
import useUserGrowth from "../hooks/useUserGrowth";

const UserGrowth: React.FC = () => {
  const userGrowth = useUserGrowth();

  return (
    <Card title="User Growth">
      <QueryBoundary {...userGrowth}>
        <ResponsiveContainer width="100%" height={322}>
          <LineChart data={userGrowth.data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              name="Total Users"
              dataKey="totalUsers"
              stroke="#8884d8"
            />
            <Line
              type="monotone"
              name="Active Users"
              dataKey="activeUsers"
              stroke="#82ca9d"
            />
          </LineChart>
        </ResponsiveContainer>
      </QueryBoundary>
    </Card>
  );
};

export default UserGrowth;
