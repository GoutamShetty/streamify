/**
 * @author Goutam Shetty <goutam.shetty1@gmail.com>
 * @description FallBack
 */

import { Spin } from "antd";
import React from "react";

const FallBack: React.FC = () => {
  return (
    <Spin className="w-full">
      <div />
    </Spin>
  );
};

export default FallBack;
