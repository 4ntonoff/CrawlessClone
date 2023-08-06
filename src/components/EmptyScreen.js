import React from "react";
import styled from "styled-components";
import LogoPic from "../assets/images/logo_big.svg";
import ShiftKey from "../assets/keys/key_shift.svg";
import WinKey from "../assets/keys/key_win.svg";
import PKey from "../assets/keys/key_p.svg";
import FKey from "../assets/keys/key_f.svg";
import F5Key from "../assets/keys/key_f5.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  width: calc(100% - 48px);
  align-items: center;
  justify-content: center;
`;
const Logo = styled.img``;
const HotKeyList = styled.div`
  display: flex;
  gap: 16px;
`;
const ActionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Action = styled.div`
  color: #71717e;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
`;
const KeyList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const KeyGrid = styled.div`
  display: flex;
  gap: 4px;
`;
const Key = styled.img`
`;

const ProfileData = () => {
  return (
    <Container>
      <Logo src={LogoPic} />
      <HotKeyList>
        <ActionList>
          <Action>Show all commands</Action>
          <Action>Start debugging</Action>
          <Action>Toggle terminal</Action>
          <Action>Start debugging</Action>
        </ActionList>
        <KeyList>
          <KeyGrid>
            <Key src={ShiftKey} />
            <Key src={WinKey} />
            <Key src={PKey} />
          </KeyGrid>
          <KeyGrid>
          <Key src={ShiftKey} />
          <Key src={PKey} />
          </KeyGrid>
          <KeyGrid>
          <Key src={ShiftKey} />
          <Key src={WinKey} />
          <Key src={FKey} />

          </KeyGrid>
          <KeyGrid>
          <Key src={F5Key} />

          </KeyGrid>
        </KeyList>
      </HotKeyList>
    </Container>
  );
};

export default ProfileData;
