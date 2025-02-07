/**
 * @author Goutam Shetty <goutam.shetty1@gmail.com>
 * @description Dashboard
 */

import React from "react";
import { Col, Row } from "antd";

import KeyMetrics from "../key-metrics/KeyMetrics";
import RevenueDistribution from "../data-visualization/RevenueDistribution";
import Streams from "../data-table/Streams";
import Title from "./Title";
import TopSongs from "../data-visualization/TopSongs";
import UserGrowth from "../data-visualization/UserGrowth";

const Dashboard: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-white to-[#f7e6b5] dark:bg-gradient-to-br dark:from-[#4a3b1a] dark:to-[#dc9d29] min-h-screen transition-colors">
      <Title />
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} xl={12}>
          <KeyMetrics />
        </Col>
        <Col xs={24} sm={24} xl={12}>
          <UserGrowth />
        </Col>
        <Col xs={24} sm={24} xl={12}>
          <RevenueDistribution />
        </Col>
        <Col xs={24} sm={24} xl={12}>
          <TopSongs />
        </Col>
        <Col span={24}>
          <Streams />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
