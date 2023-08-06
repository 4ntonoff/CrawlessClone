import React from "react";
import styled from "styled-components";
import TabSection from "./TabSection";

const Container = styled.div`
  background-color: #1C1C23;
  margin-left: 1px;
  flex: 1;
  `;

const MainContent = () => {
  return (
    <Container>
      <TabSection />
    </Container>
  );
};

export default MainContent;
