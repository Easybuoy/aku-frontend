import React from "react";
import styled from "styled-components";

import ProfileImage from "../../../assets/profile.jpg";

const StyledProfile = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;

  padding: 0.5rem;
  margin: 1rem auto;
  background: #3457ec;
  border-radius: 2px;
  color: white;

  .image-container {
    margin-right: 2.5rem;
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
  }

  .profile-detail {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    p {
      font-size: 0.9rem;
    }

    span {
      font-size: 0.6rem;
    }
  }
`;
const Profile = () => {
  return (
    <StyledProfile>
      <div className="image-container">
        <img src={ProfileImage} alt="profile" />
      </div>

      <div className="profile-detail">
        <p>Ezekiel Ekunola</p>
        <span>Premium user</span>
      </div>
    </StyledProfile>
  );
};

export default Profile;
