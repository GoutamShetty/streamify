/**
 * @author Goutam Shetty <goutam.shetty@314ecorp.com>
 * @description KeyMetrics
 */

import React from "react";
import _ from "lodash";
import { Card, Col, Row, Statistic } from "antd";
import { Dollar, People, PeopleDownload, Play } from "@icon-park/react";

import QueryBoundary from "../widget/QueryBoundary";
import useMetrics from "../hooks/useMetrics";

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

const KeyMetrics: React.FC = () => {
  const metrics = useMetrics();

  return (
    <Card title="Key Metrics">
      <QueryBoundary {...metrics}>
        <Row gutter={[16, 16]}>
          {_.map(metricConfig, (metric) => {
            const isArtistSection = metric.key === metricConfig.topArtist.key;
            return (
              <Col xs={24} sm={24} xl={isArtistSection ? 24 : 12}>
                <Card
                  bordered={false}
                  size="small"
                  className="card-shadow"
                  hoverable
                >
                  <Statistic
                    title={metric.label}
                    value={_.get(metrics.data, _.split(metric.key, "."))}
                    valueStyle={{
                      color: metric.color,
                      display: "flex",
                      alignItems: "center",
                    }}
                    prefix={
                      isArtistSection ? (
                        <img
                          src={_.get(
                            metrics.data,
                            _.split(
                              _.isString(metric.prefix) ? metric.prefix : "",
                              "."
                            )
                          )}
                          height={70}
                          width={70}
                        />
                      ) : (
                        metric.prefix
                      )
                    }
                  />
                </Card>
              </Col>
            );
          })}
        </Row>
      </QueryBoundary>
    </Card>
  );
};

export default KeyMetrics;
