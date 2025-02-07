/**
 * @author Goutam Shetty <goutam.shetty1@gmail.com>
 * @description Theme Toggle
 */

import React from "react";
import { Moon, Sun } from "@icon-park/react";
import { Switch } from "antd";

import { useTheme } from "./ThemeContext";

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Switch
      className="toggle-switch"
      checked={isDarkMode}
      onChange={toggleTheme}
      checkedChildren={<Moon />}
      unCheckedChildren={<Sun />}
    />
  );
};

export default ThemeToggle;
