import React from "react";
import styled from "styled-components";

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
  background-color: #1c1c23;
  color: #fff;
  height: 24px;
  padding-left: 16px;
`;

const FolderElement = ({ Title, Icon, newTab }) => {
  return (
    <Item>
      <Header onClick={newTab}>
        <img src={Icon} alt="" />
        <span style={{ marginLeft: "6px", fontSize: "12px" }}>{Title}</span>
      </Header>
    </Item>
  );
};

export default FolderElement;
