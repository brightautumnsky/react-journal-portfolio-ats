import React from "react";
import styled, { css } from "styled-components";

const StyledLogo = styled.img`
  ${({ width }) => css`
    width: ${`${width}px`};
  `}
`;

function Logo({ width }) {
  return <StyledLogo src="/images/logoImage.png" width={width}></StyledLogo>;
}

StyledLogo.defaultProps = {
  width: "100px",
};

export default Logo;
