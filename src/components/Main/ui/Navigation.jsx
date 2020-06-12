import React from "react";
import styled from "styled-components";

import UKLogo from "../../../assets/uk.png";
const StyledNavigation = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* margin-top: 1rem; */
  padding: 1rem 0;
  align-items: center;
  border-bottom: 1px solid #e2e8ee;

  .nav__left {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    .help {
      margin: 0 2rem;
    }

    .location {
      display: flex;
      flex-wrap: wrap;
      align-items: center;

      .imgae-container {
        margin-right: 0.5rem;
        img {
          width: 20px;
          height: 20px;
        }
      }

      p {
        margin-right: 0.5rem;
      }

      i {
        color: #bbbbbc;
      }
    }
  }

  .nav__right {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 50%;

    input {
      width: 60%;
      border: 1px solid #dde4eb;
      padding: 0.5rem;
      margin-right: 1rem;
    }

    i {
      font-size: 1.5rem;
      margin-right: 1rem;
    }

    .profile-container {
      display: flex;
      flex-wrap: wrap;
      align-items: center;

      img {
        width: 30px;
        height: 30px;
        margin-right: 0.5rem;
      }

      i {
        color: #bbbbbc;
        font-size: 1rem;
      }
    }
  }
`;
const Navigation = () => {
  return (
    <StyledNavigation>
      <div className="nav__left">
        <i class="fas fa-bars"></i>

        <div className="help">
          <p>Help: +050 2992 709 </p>
        </div>

        <div className="location">
          <div className="imgae-container ">
            <img src={UKLogo} alt="uk" />
          </div>
          <p>United States </p>
          <i class="fas fa-chevron-down"></i>
        </div>
      </div>

      <div className="nav__right">
        <input placeholder="Search Here" />
        <i class="far fa-bell"></i>
        <i class="far fa-envelope"></i>

        <div className="profile-container">
          <img src={UKLogo} alt="profile" />
          <i class="fas fa-chevron-down"></i>
        </div>
      </div>
    </StyledNavigation>
  );
};

export default Navigation;
