import styled from "styled-components";
import { observer, inject } from "mobx-react";
import EmptyScreen from "./components/EmptyScreen/EmptyScreen";
import NavigationPanel from "./components/NavigationPanel/NavigationPanel";
import ProjectsPanel from "./components/ProjectsPanel/ProjectsPanel";
import MainContent from "./components/MainContent/MainContent";

const Main = styled.div`
  display: flex;
  flex: 1 auto;
`;

const App = ({ store }) => {
  return (
    <Container>
      <NavigationPanel />
      {store.NavbarIndex === null ? (
        <EmptyScreen />
      ) : (
        <Main>
          {" "}
          <ProjectsPanel /> <MainContent />
        </Main>
      )}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  background-color: #151515;
`;

export default inject("store")(observer(App));
