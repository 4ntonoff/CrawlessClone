import React from "react";
import { observer, inject } from "mobx-react";
import styled from "styled-components";
import SearchFilters from "./SearchFilters";
import ProjectElement from "./ProjectElement";
import FolderElement from "./FolderElement";
import FileElement from "./FileElement";
import FirebaseIcon from "../../assets/ui/ui_firebase.svg";
import MongoIcon from "../../assets/ui/ui_mongo.svg";
import WorkflowIcon from "../../assets/ui/ui_workflow.svg";
import CollectionIcon from "../../assets/ui/ui_collection.svg";
import Task1Icon from "../../assets/ui/ui_task1.svg";
import Task2Icon from "../../assets/ui/ui_task2.svg";
import FolderIcon from "../../assets/ui/ui_folder.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 240px;
  
`;

const ProjectsList = styled.div`
  height: calc(100vh - 56px);
  overflow-y: auto;
  scrollbar-width: thin; /* Firefox */
  scrollbar-color: #71717e rgba(0, 0, 0, 0.4); /* Firefox */
  &::-webkit-scrollbar {
    width: 4px; /* Width of the scroll bar */
  }
  &::-webkit-scrollbar-thumb {
    background-color: #71717e; /* Color of the scroll bar */
    opacity: 0.4; /* Opacity of the scroll bar */
    border-radius: 4px; /* Border radius of the scroll bar */
  }
`;

const ProjectsPanel = ({ store }) => {
  return (
    <Container>
      <SearchFilters />
      <ProjectsList>
        <ProjectElement Title="project name" />
        <ProjectElement
          Title="project name"
          Content={
            <>
              <FolderElement Title="Storage" Icon={FirebaseIcon} />{" "}
              <FolderElement
                Title="Storage"
                Icon={MongoIcon}
                Content={
                  <>
                    <FileElement Icon={CollectionIcon} Title="Collection" />
                    <FileElement Icon={CollectionIcon} Title="Collection" />
                    <FileElement Icon={CollectionIcon} Title="Collection" />
                    <FileElement Icon={CollectionIcon} Title="Collection" />
                  </>
                }
              />{" "}
              <FolderElement Icon={WorkflowIcon} Title="Workflow" />
              <FolderElement Icon={WorkflowIcon} Title="Workflow" />
              <FolderElement
                Icon={WorkflowIcon}
                Title="Workflow"
                Content={
                  <>
                    <FileElement Icon={Task1Icon} Title="Task" />
                    <FileElement Icon={Task2Icon} Title="get_input_data" />
                    <FileElement Icon={Task2Icon} Title="details" />
                    <FileElement Icon={Task2Icon} Title="settings" />
                  </>
                }
              />
              <FolderElement
                Icon={WorkflowIcon}
                Title="Workflow"
                Content={
                  <>
                    <FolderElement Icon={FolderIcon} Title="Group of tasks" />
                    <FolderElement
                      Icon={FolderIcon}
                      Title="Group of tasks"
                      Content={
                        <>
                          <FileElement
                            Icon={Task2Icon}
                            Title="deals_of_the_week"
                          />
                          <FileElement
                            Icon={Task2Icon}
                            Title="facebook_login"
                          />
                          <FileElement Icon={Task2Icon} Title="constants" />
                        </>
                      }
                    />
                    <FileElement Icon={Task1Icon} Title="Task" />
                    <FileElement Icon={Task2Icon} Title="form_submit" />
                    <FileElement Icon={Task2Icon} Title="generic_submit" />
                  </>
                }
              />
            </>
          }
        />
        <ProjectElement Title="fvv" />
        <ProjectElement
          Title="project name"
          Content={
            <>
              <FolderElement Title="Storage" Icon={MongoIcon} />
              <FolderElement Title="Storage" Icon={MongoIcon} />
              <FolderElement Title="Storage" Icon={MongoIcon} />
              <FolderElement Title="Workflow" Icon={WorkflowIcon} />
              <FolderElement Title="Workflow" Icon={WorkflowIcon} />
              <FolderElement Title="Workflow" Icon={WorkflowIcon} />
            </>
          }
        />
        <ProjectElement
          Title="project name"
          Content={
            <>
              <FolderElement Title="Storage" Icon={MongoIcon} />
              <FolderElement Title="Storage" Icon={MongoIcon} />
              <FolderElement Title="Storage" Icon={MongoIcon} />
              <FolderElement Title="Workflow" Icon={WorkflowIcon} />
              <FolderElement Title="Workflow" Icon={WorkflowIcon} />
              <FolderElement Title="Workflow" Icon={WorkflowIcon} />
            </>
          }
        />
        <ProjectElement
          Title="project name"
          Content={
            <>
              <FolderElement Title="Storage" Icon={MongoIcon} />
              <FolderElement Title="Storage" Icon={MongoIcon} />
              <FolderElement Title="Storage" Icon={MongoIcon} />
              <FolderElement Title="Workflow" Icon={WorkflowIcon} />
              <FolderElement Title="Workflow" Icon={WorkflowIcon} />
              <FolderElement Title="Workflow" Icon={WorkflowIcon} />
            </>
          }
        />
      </ProjectsList>
    </Container>
  );
};

export default inject("store")(observer(ProjectsPanel));
