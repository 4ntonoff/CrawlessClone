import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Tab from "./Tab";
import CrawlessIcon from "../../assets/ui/ui_crawless.svg";
import SpeedometerIcon from "../../assets/ui/ui_speedometer.svg";
import TaskIcon from "../../assets/ui/ui_task1.svg";
import WorkflowIcon from "../../assets/ui/ui_workflow.svg";
import FirebaseIcon from "../../assets/ui/ui_firebase.svg";
import ProjectIcon from "../../assets/ui/ui_project.svg";
import StoreIcon from "../../assets/ui/ui_store.svg";
import BookmarkIcon from "../../assets/ui/ui_bookmark.svg";
import ExportIcon from "../../assets/icons/ic_export.svg";
import ResetIcon from "../../assets/icons/ic_reset.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonGroup = styled.div`
  display: flex;
  width: 100%;
  background-color: #151515;
  height: 32px;
`;

const HorizontalCollection = styled.div`
  display: flex;
  width: 100%;
  background-color: #2f2f3c;
  height: 40px;
  padding: 8px;
  gap: 8px;
  align-items: center;
  justify-content: end;
`;

const HorizontalCollectionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border: 1px solid #464753;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: transparent;
  outline: 0;
`;

const TabContent = styled.div`
  display: flex;
  height: calc(100vh - 72px);
  align-items: center;
  justify-content: center;
`;
const initialTabs = [
  { title: "Welcome", icon: CrawlessIcon },
  { title: "Statistics", icon: SpeedometerIcon },
  { title: "Task", icon: TaskIcon },
  { title: "Workflow", icon: WorkflowIcon },
  { title: "Storage", icon: FirebaseIcon },
  { title: "Project", icon: ProjectIcon },
  { title: "Store", icon: StoreIcon },
  { title: "Docs", icon: BookmarkIcon },
];
const TabSection = () => {
  const [active, setActive] = useState(initialTabs[0].title);
  const [types, setTypes] = useState(initialTabs);

  useEffect(() => {
    if (types.length === 0) {
      setTypes([{ title: "Welcome", icon: CrawlessIcon }]);
      setActive("Welcome");
    }
  }, [types]);

  const handleClose = (type) => {
    const updatedTypes = types.filter((item) => item.title !== type);
    setTypes(updatedTypes);
  };

  return (
    <Container>
      <ButtonGroup>
        {types.map((item) => (
          <Tab
            key={item.title}
            icon={item.icon}
            title={item.title}
            active={active === item.title}
            handleOpen={() => setActive(item.title)}
            handleClose={() => handleClose(item.title)}
          >
            {item.title}
          </Tab>
        ))}
      </ButtonGroup>
      <HorizontalCollection>
        <HorizontalCollectionButton onClick>
          <img alt="" src={ExportIcon}></img>
          <span style={{ color: "#464753" }}>Export to file</span>
        </HorizontalCollectionButton>
        <HorizontalCollectionButton onClick>
          <img alt="" src={ResetIcon}></img>
          <span style={{ color: "#464753" }}>Reset</span>
        </HorizontalCollectionButton>
      </HorizontalCollection>
      <TabContent>
        <p style={{ color: "white", verticalAlign: "middle" }}>{active}</p>
      </TabContent>
    </Container>
  );
};

export default TabSection;
