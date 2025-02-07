/**
 * @author Goutam Shetty <goutam.shetty@314ecorp.com>
 * @description RevenueDistribution
 */

import React from "react";
import _ from "lodash";
import { Card } from "antd";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

import QueryBoundary from "..//widget/QueryBoundary";
import useRevenueDistribution from "../hooks/useRevenueDistribution";

const COLORS = ["#dc9d29", "#82ca9d"];

const RevenueDistribution: React.FC = () => {
  const revenueDistribution = useRevenueDistribution();

  return (
    <Card title="Revenue Distribution">
      <QueryBoundary {...revenueDistribution}>
        <ResponsiveContainer width="100%" height={322}>
          <PieChart>
            <Pie
              data={revenueDistribution.data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              fill="#8884d8"
              label
              labelLine
            >
              {_.map(revenueDistribution.data, (__: string, index: number) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </QueryBoundary>
    </Card>
  );
};

export default RevenueDistribution;
