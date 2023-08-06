import React, { useState } from "react";
import styled from "styled-components";
import ArrowIcon from "../../assets/icons/ic_arrow.svg";
import ProjectIcon from "../../assets/ui/ui_project.svg";

const Item = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1c1c23;
  margin-bottom: 1px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: #25252e;
  color: #fff;
  height: 24px;
  padding-left: 8px;

  img:first-child {
    transform: ${({ open }) => (open ? "rotate(90deg)" : "none")};
    transition: transform 0.2s ease;
  }
`;

const ContentReady = styled.div`
  display: ${({ open }) => (open ? "flex" : "none")};
`;

const ContentInside = styled.div``;

const VerticalLine = styled.div`
  background-color: #25252e;
  width: 2px;
  margin-left: 14.5px;
`;

const ProjectElement = ({Title, Content, newTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  // const newTab = () => {}

  return (
    <Item>
      <Header onClick={newTab} open={isOpen}>
        <img
          onClick={(e) => {
            e.stopPropagation();
            toggle();
          }}
          src={ArrowIcon}
          alt=""
          style={{ marginRight: "2px" }}
        />
        <img src={ProjectIcon} alt="" />
        <span style={{ marginLeft: "6px", fontSize: "12px", textTransform: "uppercase" }}> {Title}
          
        </span>
      </Header>
      {isOpen && (
        <>
          <ContentReady open={isOpen}>
            <VerticalLine></VerticalLine>
            <ContentInside>{Content}</ContentInside>
          </ContentReady>
        </>
      )}
    </Item>
  );
};

export default ProjectElement;
