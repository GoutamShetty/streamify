/**
 * @author Goutam Shetty <goutam.shetty1@gmail.com>
 * @description Title
 */

import { Avatar, Space, Typography } from "antd";
import React from "react";

import logo from "../../assets/streamify.svg";

const Title: React.FC = () => {
  return (
    <Space className="mb-8 w-full">
      <Avatar size="large" shape="square" src={logo} />
      <Typography.Title level={1} className="!mb-0">
        Streamify Analytics Dashboard
      </Typography.Title>
    </Space>
  );
};

export default Title;
