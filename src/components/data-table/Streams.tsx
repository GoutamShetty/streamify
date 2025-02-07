/**
 * @author Goutam Shetty <goutam.shetty@314ecorp.com>
 * @description Streams
 */

import React, { useMemo } from "react";
import _ from "lodash";
import { Button, Flex, Table, Typography } from "antd";
import { ColumnsType } from "antd/es/table";

import QueryBoundary from "../widget/QueryBoundary";
import useStreams from "../hooks/useStreams";
import { Streams as IStreams } from "../../types/types";
import { exportToCSV, exportToExcel, exportToPDF } from "../utils/exportUtils";

const getFilterSet = (key: string, data?: IStreams[]) => {
  return _.uniqBy(
    _.map(data, (val) => {
      const value = _.get(val, key);
      return { text: value, value };
    }),
    "value"
  );
};

const Streams: React.FC = () => {
  const streams = useStreams();
  const { data } = streams;

  const columns: ColumnsType<IStreams> = useMemo(() => {
    return [
      {
        title: "Name",
        dataIndex: "songName",
        key: "songName",
        width: 120,
        sorter: (a: IStreams, b: IStreams) =>
          a.songName.localeCompare(b.songName),
        filters: getFilterSet("songName", data),
        onFilter: (value, record) => record.songName.includes(value as string),
      },
      {
        title: "Artist",
        dataIndex: "artist",
        key: "artist",
        width: 120,
        sorter: (a: IStreams, b: IStreams) => a.artist.localeCompare(b.artist),
        filters: getFilterSet("artist", data),
        onFilter: (value, record) => record.artist.includes(value as string),
      },
      {
        title: "Date",
        dataIndex: "dateStreamed",
        key: "dateStreamed",
        width: 120,
        sorter: (a: IStreams, b: IStreams) =>
          a.dateStreamed.localeCompare(b.dateStreamed),
        filters: getFilterSet("dateStreamed", data),
        onFilter: (value, record) =>
          record.dateStreamed.includes(value as string),
      },
      {
        title: "Streams",
        dataIndex: "streamCount",
        key: "streamCount",
        width: 120,
        sorter: (a: IStreams, b: IStreams) => a.streamCount - b.streamCount,
      },
      {
        title: "User Id",
        dataIndex: "userId",
        key: "userId",
        width: 120,
        sorter: (a: IStreams, b: IStreams) => a.userId.localeCompare(b.userId),
        filters: getFilterSet("userId", data),
        onFilter: (value, record) => record.userId.includes(value as string),
      },
    ];
  }, [data]);

  const title = () => (
    <Flex
      className="title-container"
      wrap
      justify="space-between"
      align="center"
    >
      <Typography.Title level={5} className="!mb-0">
        Recent Streams
      </Typography.Title>
      <Flex wrap gap={8}>
        <Button onClick={() => exportToCSV(data, columns, "Streams")}>
          Export to CSV
        </Button>
        <Button onClick={() => exportToExcel(data, columns, "Streams")}>
          Export to Excel
        </Button>
        <Button onClick={() => exportToPDF(data, columns, "Streams")}>
          Export to PDF
        </Button>
      </Flex>
    </Flex>
  );

  return (
    <QueryBoundary {...streams}>
      <Table
        title={title}
        dataSource={data}
        columns={columns}
        pagination={false}
        scroll={{ x: "max-content" }}
      />
    </QueryBoundary>
  );
};

export default Streams;
