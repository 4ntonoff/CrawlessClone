import React from "react";
import styled from "styled-components";
import { ReactComponent as LogoIcon } from "../assets/icons/logo_tiny.svg";
import { ReactComponent as HouseIcon } from "../assets/icons/ic_house.svg";
import { ReactComponent as StoreIcon } from "../assets/icons/ic_store.svg";
import { ReactComponent as BellIcon } from "../assets/icons/ic_bell.svg";
import { ReactComponent as BookIcon } from "../assets/icons/ic_book.svg";

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
      fill: #5C53F3;
    }
  }
`;

// Component
const Navbar = () => {
  // You can manage the active state with React state hooks or Redux, depending on your setup.
  const [activeIndex, setActiveIndex] = React.useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index);
    // Handle the click event, e.g., navigate to a different page, show content, etc.
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

export default Navbar;
