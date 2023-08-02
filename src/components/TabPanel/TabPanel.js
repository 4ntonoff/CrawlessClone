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
  border-color: #383838;
  border-width: 0.1px;
  border-right-style: solid;
`;

const TabPanel = () => {
  return (
    <Container>
      <Tabbar />
      <EdgeButton />
      <ProfileData />
    </Container>
  );
};

export default TabPanel;
