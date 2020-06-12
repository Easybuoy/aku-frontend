import React from "react";
import RadarChart from "react-svg-radar-chart";
import styled from "styled-components";
import "react-svg-radar-chart/build/css/index.css";

import Card from "../../common/Card";
const data = [
  {
    data: {
      january: 0.7,
      febuary: 0.8,
      march: 0.9,
      april: 0.67,
      may: 0.8,
      june: 0.2,
      july: 0.5,
      august: 0.91,
    },
    meta: { color: "blue" },
  },
  {
    data: {
      january: 0.6,
      febuary: 0.85,
      march: 0.5,
      april: 0.65,
      may: 0.7,
      june: 0.21,
      july: 0.5,
      august: 0.7,
    },
    meta: { color: "green" },
  },
];

const captions = {
  // columns
  january: "January",
  febuary: "Febuary",
  march: "March",
  april: "April",
  may: "May",
  june: "June",
  july: "July",
  august: "August",
};

const StyledRadar = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  svg {
    width: 100%;
    height: 350px;
  }

  .radar {
    margin: 1rem;
    display: flex;

    flex-wrap: wrap;

    h3 {
      margin: 1rem 0;
      width: 100%;
      font-size: 1.2rem;
    }

    p {
      font-size: 1rem;
      color: #939597;
      width: 100%;
    }

    span {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin: 0.5rem 1rem 0.5rem 0;

      i {
        margin-right: 0.2rem;
        font-size: 0.5rem;
        color: #34d0de;
      }
    }
  }
`;

const Radar = () => {
  return (
    <StyledRadar>
      <Card>
        <div className="radar">
          <h3>Net Profit</h3>
          <p>Started collecting data from Febuary 2019</p>

          <span>
            <i class="fas fa-circle"></i>
            Sales
          </span>

          <span>
            <i style={{ color: "#954efe" }} class="fas fa-circle"></i>
            Orders
          </span>
          <RadarChart captions={captions} data={data} size={450} />
        </div>
      </Card>
    </StyledRadar>
  );
};

export default Radar;
