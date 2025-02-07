/**
 * @author Goutam Shetty <goutam.shetty@314ecorp.com>
 * @description KeyMetrics
 */

import React from "react";
import _ from "lodash";
import { Card, Col, Row, Statistic } from "antd";

import QueryBoundary from "../widget/QueryBoundary";
import useMetrics from "../hooks/useMetrics";
import { metricConfig } from "../../constants/config";
import { useTheme } from "../theme/ThemeContext";

const KeyMetrics: React.FC = () => {
  const metrics = useMetrics();
  const { isDarkMode } = useTheme();

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
                  className={isDarkMode ? "card-shadow-dark" : "card-shadow"}
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
