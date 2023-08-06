import React from "react";
import styled from "styled-components";

import { ReactComponent as CrossIcon } from "../../assets/icons/ic_cross.svg";

const Container = styled.button`
  height: 32px;
  padding: 8px 0px 8px 12px;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  text-transform: capitalize;
  color: #71717e;
  font-size: 12px;
  cursor: pointer;
  align-items: center;
  background: #1c1c23;
  border: 0;
  outline: 0;

  transition: all 0.2s ease;
  ${({ active }) =>
    active &&
    `
    color: white;
    border-top: 1px solid #887DFF;
    background-color: #2F2F3C;
  `}
  svg {
    width: 16px;
    height: 16px;
    transition: fill 0.3s ease;
  }

  &:hover {
    svg {
      fill: #a3a3b1;
    }
    /* background-color: #2F2F3C; */
  }
`;
const Icon = styled.img`
  margin-left: 4px;
  margin-right: 4px;
`;
const Title = styled.span`
  font-weight: 400;
  line-height: 16px;
`;
const Cross = styled.div`
  height: 16px;
  width: 16px;
  margin: 0px 8px;
`;

const Tab = ({ icon, title, active, handleOpen, handleClose }) => {

  return (
    <Container active={active} onClick={handleOpen}>
      <Icon src={icon}></Icon>
      <Title>{title}</Title>
      <Cross onClick={(e) => { e.stopPropagation(); handleClose(); }}>
        <CrossIcon src={CrossIcon} />
      </Cross>
    </Container>
  );
};

export default Tab;
