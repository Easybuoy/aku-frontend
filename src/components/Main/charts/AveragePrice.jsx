import React from "react";
import styled from "styled-components";

const StyledAveragePrice = styled.div`
  height: 200px;
  /* width: 100%; */
  background-color: #080bac;
  color: white;
  justify-content: space-around;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  .content-left {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    width: 40%;
    h3 {
      font-size: 2rem;
      margin: 0;
      padding: 0;
      margin-bottom: 2rem;
    }
  }

  .content-right {
    width: 40%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;

    span {
      background-color: #1c23b4;
      justify-content: center;
      border-radius: 10px;
      padding: 0.5rem;
      margin-bottom: 1rem;
      border: 1px solid #686d85;
    }
  }
`;

const AveragePrice = () => {
  return (
    <StyledAveragePrice>
      <div className="content-left">
        <h3> 4,624</h3>
        <h5> Average Price</h5>
      </div>
      <div className="content-right">
        <span>
          <i className="fas fa-2x fa-suitcase"></i>
        </span>
        <p>Since last month</p>
      </div>
    </StyledAveragePrice>
  );
};

export default AveragePrice;
