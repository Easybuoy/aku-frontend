import React from "react";
import styled from "styled-components";

import Card from "../../common/Card";
const StyledTotalUserSales = styled.div`
  height: 200px;
  /* width: 100%; */
  background-color: #ffffff;
  color: #192e4a;
  justify-content: space-around;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  .header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    i {
      margin-right: 0.3rem;
    }
  }

  h4 {
    font-size: 1.5rem;
  }

  .progress {
    margin-top: 1rem;
    background-color: #e5e9f2;
    height: 0.5em;
    position: relative;
    width: 70%;
    border-radius: 10px;
  }
  .progress-bar-red {
    background-size: 23em 0.25em;
    height: 100%;
    width: 70%;
    position: relative;
    border-radius: 10px;
    background-color: #ff6867;
  }

  .progress-bar-green {
    background-size: 23em 0.25em;
    height: 100%;
    width: 50%;
    position: relative;
    border-radius: 10px;
    background-color: #08d186;
  }

  .content-left {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    width: 40%;

    i {
      color: #ff6867;
    }
  }

  .content-right {
    width: 40%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;

    i {
      color: #08d186;
    }
  }
`;

const TotalUserSales = () => {
  return (
    <Card>
      <StyledTotalUserSales>
        <div className="content-left">
          <div className="header">
            <i className="fas fa-circle"></i>
            <p>Total Sales</p>
          </div>
          <h4> $7,590</h4>

          <div className="progress">
            <div className="progress-bar-red"></div>
          </div>
        </div>

        <div className="content-right">
          <div className="header">
            <i className="fas fa-circle"></i>
            <p> Average Price</p>
          </div>

          <h4>$5,460</h4>
          <div className="progress">
            <div className="progress-bar-green"></div>
          </div>
        </div>
      </StyledTotalUserSales>
    </Card>
  );
};

export default TotalUserSales;
