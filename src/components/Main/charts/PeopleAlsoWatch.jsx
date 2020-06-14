import React from "react";
import styled from "styled-components";

import Card from "../../common/Card";

const StyledPeopleAlsoWatch = styled.div`
  /* height: 500px; */
  /* width: 100%; */
  display: flex;
  flex-wrap: wrap;
  /* margin: 1.5rem; */
  width: 90%;
  margin: 0 auto;

  /* padding: 1rem; */
  h3 {
    width: 100%;
    margin: 1rem 0;
    font-weight: bolder;
    font-size: 1.2rem;
  }
  a {
    text-decoration: none;
    color: #2b67ea;
    margin-bottom: 1rem;
  }

  .event-detail-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 1rem;
    width: 100%;

    .header {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      margin-bottom: 1rem;

      width: 100%;
      color: #a7afb7;

      p {
        width: 33%;
      }
    }

    .content {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      margin-bottom: 1rem;
      align-items: center;
      width: 100%;
      p {
        color: #808b9b;
        width: 33%;
        font-size: 0.9mre;
      }

      .symbol {
        width: 33%;
        span {
          font-size: 0.8rem;
          color: #808b9b;
        }
      }
      .up {
        color: #35d186;
      }

      .down {
        color: #fb6768;
      }
    }

    /* a {
      text-decoration: none;
      color: #d2d6db;
    } */
  }
`;

const PeopleAlsoWatch = () => {
  return (
    <Card>
      <StyledPeopleAlsoWatch>
        <h3>People Also Watch</h3>
        <div className="event-detail-container">
          <div className="header">
            <p>Symbol</p>
            <p>Last Price</p>
            <p>Change</p>
          </div>

          <div className="content">
            <div className="symbol">
              <p>NFLX</p>
              <span>Netflix, Inc.</span>
            </div>

            <p>$250.00</p>
            <p className="up">+12.64</p>
          </div>

          <div className="content">
            <div className="symbol">
              <p>TSLA</p>
              <span>Tesla, Inc.</span>
            </div>

            <p>$850.00</p>
            <p className="down">-14.53</p>
          </div>

          <div className="content">
            <div className="symbol">
              <p>GOOG</p>
              <span>Alphabet, Inc.</span>
            </div>

            <p>$450.00</p>
            <p className="down">-10.09</p>
          </div>

          <div className="content">
            <div className="symbol">
              <p>NFAMZNLX</p>
              <span>Amazon.com, Inc.</span>
            </div>

            <p>$620.00</p>
            <p className="up">+26.14</p>
          </div>

          <div className="content">
            <div className="symbol">
              <p>AAPL</p>
              <span>Apple Inc.</span>
            </div>

            <p>$170.00</p>
            <p className="up">+22.39</p>
          </div>
        </div>

        <a href="##">Show all</a>
      </StyledPeopleAlsoWatch>
    </Card>
  );
};

export default PeopleAlsoWatch;
