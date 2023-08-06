import React from "react";
import styled from "styled-components";
import EdgeButton from "./EdgeButton";
import ProfileData from "./ProfileData";
import Tabbar from "./Navbar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 48px;
  gap: 20px;
  margin-right: 1px;
`;

const NavigationPanel = () => {
  return (
    <Container>
      <Tabbar />
      <EdgeButton />
      <ProfileData />
    </Container>
  );
};

export default NavigationPanel;
