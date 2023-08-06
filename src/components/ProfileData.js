import React from "react";
import styled from "styled-components";
import ProfilePicture from "../assets/images/profile.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const UserPicture = styled.img`
  width: 32px;
  height: 32px;
  margin: 8px;
  border-radius: 50%;
  cursor: pointer;
`;
const TabBalance = styled.div`
  color: #b9e01e;
  margin-bottom: 16px;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  text-transform: uppercase;
`;

const ProfileData = () => {
  return (
    <Container>
      <TabBalance>$450</TabBalance>
      <UserPicture src={ProfilePicture} alt=""></UserPicture>
    </Container>
  );
};

export default ProfileData;
