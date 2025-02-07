/**
 * @author Goutam Shetty <goutam.shetty1@gmail.com>
 * @description config
 */

import {
  DEFAULT_ICON_CONFIGS,
  IIconConfig,
} from "@icon-park/react/lib/runtime";
import { Dollar, People, PeopleDownload, Play } from "@icon-park/react";
import { ThemeConfig } from "antd";

const IconConfig: IIconConfig = {
  ...DEFAULT_ICON_CONFIGS,
  size: 16,
  theme: "outline",
  prefix: "anticon i",
};

interface IThemeConfig {
  light: ThemeConfig;
  dark: ThemeConfig;
}

const themeConfig: IThemeConfig = {
  light: {
    token: {
      colorPrimary: "#dc9d29",
      colorBgBase: "#ffffff",
      colorTextBase: "#000000",
      colorBorder: "#d9d9d9",
    },
  },
  dark: {
    components: {
      Table: {
        borderColor: "#ffffff",
        colorBorderSecondary: "#ffffff",
        colorBorder: "#ffffff",
        colorBorderBg: "#ffffff",
        colorPrimaryBorder: "#ffffff",
        rowHoverBg: "#5b4e4e",
        headerFilterHoverBg: "#5b4e4e",
      },
      Card: {
        colorBorderSecondary: "#ffffff",
      },
    },
    token: {
      colorPrimary: "#dc9d29",
      colorBgBase: "#000000",
      colorTextBase: "#ffffff",
      colorBorder: "#434343",
    },
  },
};

const metricConfig = {
  totalUsers: {
    label: "Total Users",
    key: "totalUsers",
    color: "#1890ff",
    prefix: <People />,
  },
  activeUsers: {
    label: "Active Users",
    key: "activeUsers",
    color: "#3f8600",
    prefix: <PeopleDownload />,
  },
  totalStreams: {
    label: "Total Streams",
    key: "totalStreams",
    color: "#722ed1",
    prefix: <Play />,
  },
  revenue: {
    label: "Revenue",
    key: "revenue",
    color: "#389e0d",
    prefix: <Dollar />,
  },
  topArtist: {
    label: "Top Artist",
    key: "topArtist.name",
    color: "#faad14",
    prefix: "topArtist.imgUrl",
  },
};

export { IconConfig, themeConfig, metricConfig };
