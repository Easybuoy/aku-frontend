import React from "react";

import styled from "styled-components";

import Card from "../../common/Card";
import WebsiteMetricImage from "../../../assets/website-metric.png";

const StyledWebsiteMetric = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin: 0 auto;
  /* height: 500px; */

  h3 {
    margin: 1rem;
    width: 100%;
  }

  .header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;

    .metric-detail {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      /* width: 40%; */
      h4 {
        flex-wrap: wrap;
        display: flex;
      }
    }

    img {
      width: 150px;
      height: 150px;
    }
  }
`;
const WebsiteMetric = () => {
  return (
    <Card>
      <StyledWebsiteMetric>
        <h3>Website Audience Metrics</h3>

        <div className="header">
          <div className="metric-detail">
            <div>
              <h4>523, 100</h4>
              <span>
                Page views
                <i className="fas fa-circle"></i>
              </span>
            </div>
          </div>
          <img src={WebsiteMetricImage} alt="metric" />
        </div>
      </StyledWebsiteMetric>
    </Card>
  );
};

export default WebsiteMetric;
