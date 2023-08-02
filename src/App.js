import styled from "styled-components";
import { observer, inject } from "mobx-react";
import EmptyScreen from "./components/EmptyScreen";
import TabPanel from "./components/TabPanel/TabPanel";
import ProjectsPanel from "./components/ProjectsPanel/ProjectsPanel";

const App = ({ store }) => {
  return (
    <Container>
      <TabPanel />
      {store.NavbarIndex === null ? <EmptyScreen /> : <ProjectsPanel />}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  background-color: #151515;
  border-radius: 5px;
`;

export default inject("store")(observer(App));
