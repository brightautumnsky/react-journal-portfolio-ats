import React from "react";
import styled, { css } from "styled-components";

const StyledIcon = styled.img`
  ${({ width }) => css`
    width: ${`${width}rem`};
  `}
  ${({ check }) =>
    check &&
    css`
      border-bottom: 3px solid pink;
      box-sizing: border-box;
    `}
  ${({ pointer }) =>
    pointer &&
    css`
      cursor: pointer;
    `}
  ${({ js }) =>
    js &&
    css`
      justify-self: center;
    `}
    ${({ mobile }) =>
    mobile &&
    css`
      width: 50px;
    `}
`;

function Icon({ className, width, url, onClick, check, pointer, js, mobile }) {
  return (
    <StyledIcon
      className={className}
      src={url}
      width={width}
      onClick={onClick}
      check={check}
      pointer={pointer}
      js={js}
      mobile={mobile}
    />
  );
}

StyledIcon.defaultProps = {
  width: "1.5",
};

export default Icon;
