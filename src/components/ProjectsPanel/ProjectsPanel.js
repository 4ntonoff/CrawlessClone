import React from "react";
import { observer, inject } from "mobx-react";
import styled from "styled-components";
import SearchFilters from "./SearchFilters";
// import TreeItem from "./TreeElement";
// import HouseIcon from '../../assets/icons/ic_house.svg'


const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 240px;
`;

const ProjectsList = styled.div``;

const ProjectsPanel = ({ store }) => {
  return (
    <Container>
      <SearchFilters />
      <ProjectsList>

      </ProjectsList>
    </Container>
  );
};

export default inject("store")(observer(ProjectsPanel));
