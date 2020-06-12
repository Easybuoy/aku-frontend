import React from "react";
import styled from "styled-components";

import Container from "../Container";
import Navigation from "./ui/Navigation";
import Breadcrumb from "./ui/Breadcrumb";
import Radar from "./charts/Radar";
import Card from "../common/Card";

import Graph1 from "../../assets/1.png";

const StyledMain = styled.div`
  background-color: white;
  width: 79.5%;
  height: 100vh;
  flex-direction: column;
  overflow-y: scroll;

  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    margin: 1rem 0;

    .left {
      width: 70%;
      display: flex;
      flex-wrap: wrap;

      .full-width {
        /* display: flex;
        flex-wrap: wrap; */
        width: 100%;
      }

      .line-graph {
        padding: 1rem;
        h3 {
          margin: 1rem 0;
        }

        p {
          color: #939597;
          margin: 0.5rem 0;
        }
        img {
          width: 100%;
          object-fit: cover;
        }
      }
    }

    .right {
      width: 25%;
      display: flex;
      flex-wrap: wrap;

      .radar {
        margin: 1rem;
        display: flex;
        flex-wrap: wrap;

        h3 {
          margin: 1rem 0;
        }

        p {
          font-size: 0.7rem;
          color: #939597;
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
    }
  }
`;

const Main = () => {
  return (
    <StyledMain>
      <Navigation />
      <Container margin="1rem">
        <Breadcrumb />
        <section>
          <div className="left">
            <div className="full-width">
              <Card>
                <div className="line-graph">
                  <h3>Sales Statistical Overview</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Asperiores molestiae corporis similique omnis? Quam maxime,
                  </p>
                  <img src={Graph1} alt="graph" />
                </div>
              </Card>
            </div>
          </div>
          <div className="right">
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
                <Radar />
              </div>
            </Card>

            <Card>
              <Radar />
            </Card>
          </div>
        </section>
      </Container>
    </StyledMain>
  );
};

export default Main;
