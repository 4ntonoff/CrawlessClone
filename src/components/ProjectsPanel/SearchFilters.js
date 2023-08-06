import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "../../assets/icons/ic_search.svg";
import { ReactComponent as TreeIcon } from "../../assets/icons/ic_tree.svg";
import { ReactComponent as StarIcon } from "../../assets/icons/ic_star.svg";
import { ReactComponent as ShareIcon } from "../../assets/icons/ic_share.svg";
import { ReactComponent as CollapseIcon } from "../../assets/icons/ic_collapse.svg";
import { ReactComponent as TargetIcon } from "../../assets/icons/ic_target.svg";
import { ReactComponent as AddIcon } from "../../assets/icons/ic_add.svg";

const Container = styled.div`
  box-sizing: content-box;
  width: 240px;
  display: flex;
  flex-direction: column;
  gap: 1px;
  background-color: #151515;
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 32px;
  margin: 0 auto;
  background-color: #25252e;
`;
const SearchField = styled.input`
  width: 208px;
  height: 24px;
  background-color: #151515;
  border-radius: 4px 0px 0px 4px;
  color: #464753;
  font-size: 12px;
  border: 0;
  padding: 4px 8px;

  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.img`
  cursor: pointer;
  padding: 4px;
  background-color: #151515;
  border-radius: 0px 4px 4px 0px;
`;

const Filters = styled.div`
  display: flex;
  background-color: #1c1c23;
  gap: -1px;

  border-bottom-width: 1px;
  border-bottom-color: #151515;
  border-bottom-style: solid;
`;
const SvgItem = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-bottom-width: 1px;
  border-bottom-color: ${({ active }) => (active ? "#887dff" : "#151515")};
  border-bottom-style: solid;
  box-sizing: border-box;
  transition: all 0.3s ease;

  svg {
    fill: ${({ active }) => (active ? "#887DFF" : "#A3A3B1")};
    transition: fill 0.3s ease;
  }
`;
const Grid3 = styled.div`
  box-sizing: content-box;
  display: flex;
  border-right-width: 1px;
  border-right-color: #151515;
  border-right-style: solid;
`;
const Grid2 = styled.div`
  width: 112px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right-width: 1px;
  border-right-color: #151515;
  border-right-style: solid;
`;
const Icon = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 8;
`;

export default function SearchFilters() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <Container>
      <Search>
        <SearchField
          placeholder="Search..."
          title="Enter input here"
        ></SearchField>
        <SearchButton src={SearchIcon}></SearchButton>
      </Search>
      <Filters>
        <Grid3>
          <SvgItem
            active={activeIndex === 0}
            onClick={() => handleItemClick(0)}
          >
            <TreeIcon fill={activeIndex === 0 ? "#5C53F3" : "#A3A3B1"} />
          </SvgItem>
          <SvgItem
            active={activeIndex === 1}
            onClick={() => handleItemClick(1)}
          >
            <StarIcon fill={activeIndex === 1 ? "#5C53F3" : "#A3A3B1"} />
          </SvgItem>
          <SvgItem
            active={activeIndex === 2}
            onClick={() => handleItemClick(2)}
          >
            <ShareIcon fill={activeIndex === 2 ? "#5C53F3" : "#A3A3B1"} />
          </SvgItem>
        </Grid3>
        <Grid2>
          <Icon>
            <CollapseIcon fill="#A3A3B1"></CollapseIcon>
          </Icon>
          <Icon>
            <TargetIcon fill="#A3A3B1"></TargetIcon>
          </Icon>
        </Grid2>
        <Icon style={{ backgroundColor: "#2F2F3C" }}>
          <AddIcon fill="#fff"></AddIcon>
        </Icon>
      </Filters>
    </Container>
  );
}
