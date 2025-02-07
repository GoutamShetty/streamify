/**
 * @author Goutam Shetty <goutam.shetty1@gmail.com>
 * @description Title
 */

import { Avatar, Space, Typography } from "antd";
import React from "react";

import ThemeToggle from "../theme/ThemeToggle";
import logo from "../../assets/streamify.svg";
import logoDark from "../../assets/streamify-dark.svg";
import { useTheme } from "../theme/ThemeContext";

const Title: React.FC = () => {
  const { isDarkMode } = useTheme();
  return (
    <Space className="mb-8 w-full">
      <Avatar size="large" shape="square" src={isDarkMode ? logoDark : logo} />
      <Typography.Title level={1} className="!mb-0">
        Streamify Analytics Dashboard
      </Typography.Title>
      <ThemeToggle />
    </Space>
  );
};

export default Title;
