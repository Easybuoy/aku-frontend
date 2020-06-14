import React from "react";
import styled from "styled-components";

import Card from "../../common/Card";
import Profile from "../../../assets/profile.jpg";

const StyledTopPerformers = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  h5 {
    padding: 1rem;
  }

  .performance-details {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    .right {
      color: #ced8e3;
      padding: 0.5rem;
      font-size: 0.9rem;
    }
    .performers {
      display: flex;
      flex-wrap: wrap;
      padding: 1rem;
      align-items: center;
      color: #3f5068;

      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 1rem;
      }
    }
  }
`;

const TopPerformers = () => {
  return (
    <StyledTopPerformers>
      <Card>
        <h5>Top Performers</h5>
        <div className="performance-details">
          <div className="performers">
            <img src={Profile} alt="profile" />
            <div className="performers-detail">
              <p>Ray Douglas</p>
              <span>162553</span>
            </div>
          </div>

          <p className="right">3 Hours ago</p>
        </div>

        <div className="performance-details">
          <div className="performers">
            <img src={Profile} alt="profile" />
            <div className="performers-detail">
              <p>Gussie Shelton</p>
              <span>162544</span>
            </div>
          </div>

          <p className="right">4 Hours ago</p>
        </div>

        <div className="performance-details">
          <div className="performers">
            <img src={Profile} alt="profile" />
            <div className="performers-detail">
              <p>Ora Hill</p>
              <span>162545</span>
            </div>
          </div>

          <p className="right">4 Hours ago</p>
        </div>

        <div className="performance-details">
          <div className="performers">
            <img src={Profile} alt="profile" />
            <div className="performers-detail">
              <p>Brian Deans</p>
              <span>162546</span>
            </div>
          </div>

          <p className="right">4 Hours ago</p>
        </div>

        <div className="performance-details">
          <div className="performers">
            <img src={Profile} alt="profile" />
            <div className="performers-detail">
              <p>Olive Bridges</p>
              <span>162557</span>
            </div>
          </div>

          <p className="right">4 Hours ago</p>
        </div>
      </Card>
    </StyledTopPerformers>
  );
};

export default TopPerformers;
