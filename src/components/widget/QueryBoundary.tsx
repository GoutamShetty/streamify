/**
 * @author Goutam Shetty <goutam.shetty1@gmail.com>
 * @description QueryBoundary
 */

import React, { PropsWithChildren } from "react";
import _ from "lodash";
import { Empty, Result, Spin } from "antd";
import { UseQueryResult } from "@tanstack/react-query";

const QueryBoundary: React.FC<PropsWithChildren<Partial<UseQueryResult>>> = (
  props
) => {
  const {
    children,
    isError,
    isSuccess,
    isFetching = false,
    isLoading = false,
    data,
  } = props;

  if (isSuccess && !isFetching && _.isEmpty(data)) {
    return <Empty />;
  }

  if (isLoading || isFetching) {
    return <Spin size="small" className="w-full" />;
  }

  if (isError) {
    return (
      <Result
        status="error"
        title="Sorry, we are having trouble showing the data!"
      />
    );
  }

  return <>{children}</>;
};

export default QueryBoundary;
