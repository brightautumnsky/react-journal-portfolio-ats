import React from "react";
import styled, { css } from "styled-components";

const StyledScroll = styled.div`
  position: relative;
  width: 100%;
  h1 {
    display: inline-block;
  }
  span {
    font-weight: 600;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 24px;
  }
  ${(props) =>
    props.scroll
      ? css`
          display: none;
        `
      : css`
          display: block;
        `}
`;

function Scroll({ scroll, children }) {
  return <StyledScroll scroll={scroll}>{children}</StyledScroll>;
}

export default Scroll;
