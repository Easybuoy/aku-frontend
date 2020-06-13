import React from "react";
import styled from "styled-components";

import Card from "../../common/Card";

const StyledRecentEvents = styled.div`
  /* height: 500px; */
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /* margin: 1.5rem; */
  padding: 1rem;
  h3 {
    width: 100%;
    margin: 1rem 0;
    font-weight: bolder;
    font-size: 1.2rem;
  }
  a {
    text-decoration: none;
    color: #2b67ea;
  }

  .event-detail-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 90%;

    .event-detail {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      margin-bottom: 1rem;

      p {
        color: #41526a;
        margin-bottom: 0.5rem;
      }

      .data {
        color: #626669;
      }
    }

    a {
      text-decoration: none;
      color: #d2d6db;
    }
  }
`;

const RecentEvents = () => {
  return (
    <Card>
      <StyledRecentEvents>
        <h3>Recent Events</h3>
        <div className="event-detail-container">
          <div className="event-detail">
            <p className="data">March 14, 2019</p>
            <p>Change in Directors</p>
          </div>

          <a href="##">Edit event</a>
        </div>

        <div className="event-detail-container">
          <div className="event-detail">
            <p className="data">Dec 7, 2018</p>
            <p>Other Events</p>
          </div>

          <a href="##">Edit event</a>
        </div>

        <div className="event-detail-container">
          <div className="event-detail">
            <p className="data">Oct 31, 2018</p>
            <p>Quaterly Report</p>
          </div>

          <a href="##">Edit event</a>
        </div>

        <div className="event-detail-container">
          <div className="event-detail">
            <p className="data">Oct 30, 2018</p>
            <p>Results of Operations and Financial</p>
          </div>

          <a href="##">Edit event</a>
        </div>

        <a href="##">Show all</a>
      </StyledRecentEvents>
    </Card>
  );
};

export default RecentEvents;
