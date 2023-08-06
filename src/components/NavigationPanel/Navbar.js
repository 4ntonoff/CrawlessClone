import React, { useState } from "react";
import styled from "styled-components";
import { observer, inject } from "mobx-react";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo_tiny.svg";
import { ReactComponent as HouseIcon } from "../../assets/icons/ic_house.svg";
import { ReactComponent as StoreIcon } from "../../assets/icons/ic_store.svg";
import { ReactComponent as BellIcon } from "../../assets/icons/ic_bell.svg";
import { ReactComponent as BookIcon } from "../../assets/icons/ic_book.svg";

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SvgItem = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${({ active }) => (active ? "#2D2763" : "#151515")};

  svg {
    width: 24px;
    height: 24px;
    fill: ${({ active }) => (active ? "#5C53F3" : "#A3A3B1")};
    transition: fill 0.3s ease;
  }

  &:hover {
    svg {
      fill: #5c53f3;
    }
  }
`;

const Navbar = ({ store }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index);
    store.setNavbarIndex(index);
  };

  return (
    <NavbarContainer>
      <SvgItem active={activeIndex === 0} onClick={() => handleItemClick(0)}>
        <LogoIcon fill={activeIndex === 0 ? "#5C53F3" : "#A3A3B1"} />
      </SvgItem>
      <SvgItem active={activeIndex === 1} onClick={() => handleItemClick(1)}>
        <HouseIcon fill={activeIndex === 1 ? "#5C53F3" : "#A3A3B1"} />
      </SvgItem>
      <SvgItem active={activeIndex === 2} onClick={() => handleItemClick(2)}>
        <StoreIcon fill={activeIndex === 2 ? "#5C53F3" : "#A3A3B1"} />
      </SvgItem>
      <SvgItem active={activeIndex === 3} onClick={() => handleItemClick(3)}>
        <BellIcon fill={activeIndex === 3 ? "#5C53F3" : "#A3A3B1"} />
      </SvgItem>
      <SvgItem active={activeIndex === 4} onClick={() => handleItemClick(4)}>
        <BookIcon fill={activeIndex === 4 ? "#5C53F3" : "#A3A3B1"} />
      </SvgItem>
    </NavbarContainer>
  );
};

// export default inject('store')(observer(Navbar));
export default inject("store")(observer(Navbar));
