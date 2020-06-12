import React from "react";
import styled from "styled-components";

import UKLogo from "../../../assets/uk.png";
import Profile from "../../../assets/profile.jpg";

const StyledNavigation = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem 0 0.5rem 0;
  align-items: center;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.12);

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
      margin-right: 1.5rem;
    }

    i {
      font-size: 1.2rem;
      margin-right: 1.5rem;
    }

    .profile-container {
      display: flex;
      flex-wrap: wrap;
      align-items: center;

      img {
        width: 30px;
        height: 30px;
        margin-right: 0.5rem;
        border-radius: 50%;
      }

      i {
        color: #bbbbbc;
        font-size: 0.8rem;
      }
    }
  }
`;
const Navigation = () => {
  return (
    <StyledNavigation>
      <div className="nav__left">
        <i className="fas fa-bars"></i>

        <div className="help">
          <p>Help: +050 2992 709 </p>
        </div>

        <div className="location">
          <div className="imgae-container ">
            <img src={UKLogo} alt="uk" />
          </div>
          <p>United States </p>
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>

      <div className="nav__right">
        <input placeholder="Search Here" />
        <i className="far fa-bell"></i>
        <i className="far fa-envelope"></i>

        <div className="profile-container">
          <img src={Profile} alt="profile" />
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </StyledNavigation>
  );
};

export default Navigation;
