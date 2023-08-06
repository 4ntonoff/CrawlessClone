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
  width: calc(100vw - 290px);
  overflow-x: auto;
  overflow-y: hidden;
  /* For WebKit-based browsers (Chrome and Safari) */
/* Modify the width and color of the scrollbar */
&::-webkit-scrollbar {
  height: 4px; /* Height of the horizontal scrollbar */
}

/* Customize the appearance of the scrollbar thumb */
&::-webkit-scrollbar-thumb {
  background-color: #71717e; /* Color of the scrollbar thumb */
  border-radius: 5px; /* Border radius of the scrollbar thumb */
}

/* For Firefox */
/* Modify the width and color of the scrollbar */
scrollbar-width: thin;
scrollbar-color: #71717e rgba(0, 0, 0, 0.4);

/* To customize the scrollbar thumb in Firefox, you need to use an additional selector */
/* This targets the thumb specifically for horizontal scrollbar */
& {
  scrollbar-color: #71717e rgba(0, 0, 0, 0.4);
}

/* Customize the appearance of the scrollbar thumb */
&::-webkit-scrollbar-thumb:horizontal {
  background-color: #71717e; /* Color of the scrollbar thumb for horizontal scrollbar in Firefox */
  border-radius: 2px; /* Border radius of the scrollbar thumb for horizontal scrollbar in Firefox */
}

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
  cursor: pointer;
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

    const activeIndex = types.findIndex((item) => item.title === type);
    if (activeIndex === 0 && types.length > 1) {
      setActive(types[1].title);
    } else if (activeIndex > 0) {
      setActive(types[activeIndex - 1].title);
    }
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
        <HorizontalCollectionButton>
          <img alt="" src={ExportIcon}></img>
          <span style={{ color: "#464753" }}>Export to file</span>
        </HorizontalCollectionButton>
        <HorizontalCollectionButton>
          <img alt="" src={ResetIcon}></img>
          <span style={{ color: "#464753" }}>Reset</span>
        </HorizontalCollectionButton>
      </HorizontalCollection>
      <TabContent>
        <p style={{ color: "white" }}>{active} screen</p>
      </TabContent>
    </Container>
  );
};

export default TabSection;
