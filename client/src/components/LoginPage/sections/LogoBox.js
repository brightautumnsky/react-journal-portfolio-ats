import React from "react";
import styled from "styled-components";
import Logo from "../../utils/Logo";

const LogoBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 48px;
  h2 {
    color: #84ced1;
  }
`;

function LogoBox() {
  return (
    <LogoBoxContainer>
      <a href="/">
        <Logo width="70" alt="logo" />
      </a>
      <h2>오늘의 일기</h2>
    </LogoBoxContainer>
  );
}

export default LogoBox;
