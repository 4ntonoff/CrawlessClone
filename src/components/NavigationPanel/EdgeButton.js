import React, { useState } from "react";
import styled from "styled-components";
import HelpIcon from "../../assets/icons/ic_help.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const Text = styled.div`
  color: #ff8616;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  transform: rotate(180deg);
  writing-mode: vertical-rl;
  /* Добавляем стиль, чтобы текст занимал только одну строку */
  white-space: nowrap;
`;

const Help = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 32px;
  height: 16px;
  cursor: pointer;
  transform: rotate(-90deg);
  margin-bottom: 8px;
`;

const HiddenInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Slider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #3f3f3f;
  border-radius: 12px;
  transition: background-color 0.2s;

  &::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #fff;
    transition: transform 0.25s;
  }

  ${HiddenInput}:checked + & {
    background-color: #ff8616;
    &::after {
      transform: translateX(16px);
    }
  }
`;

const ProfileData = () => {
  const [connected, setConnected] = useState(false);

  const handleToggle = () => {
    setConnected((prevState) => !prevState);
  };

  return (
    <Container>
      <ToggleSwitch>
        <HiddenInput type="checkbox" checked={connected} onChange={handleToggle} />
        <Slider />
      </ToggleSwitch>
      <Text>Connect to Edge</Text>
      <Help src={HelpIcon} title="Lorem ipsum sit dolor amet" />
    </Container>
  );
};

export default ProfileData;
