import React from "react";
import styled, { css } from "styled-components";
import { lighten } from "polished";

const sizes = {
  small: {
    fontSize: "0.75rem",
    height: "1.5rem",
  },
  medium: {
    fontSize: "1.25rem",
    height: "2.5rem",
  },
  large: {
    fontSize: "1.75rem",
    height: "3.5rem",
  },
};

const sizeStyle = css`
  ${({ size }) =>
    css`
      font-size: ${sizes[size].fontSize};
      height: ${sizes[size].height};
    `}
`;

const roundedStyle = css`
  ${({ rounded }) => css`
    border-radius: ${`${rounded}px`};
  `}
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledButton = styled.button`
  border: none;
  &:focus {
    outline: none;
  }

  ${({ width, color, fontWeight }) =>
    css`
      background-color: ${lighten(0.05, color)};
      width: ${`${width}px`};
      color: ${color === "transparent" ? "pink" : "white"};
      span {
        font-weight: ${fontWeight};
      }
      &:hover {
        background: ${color};
        cursor: pointer;
      }
    `}

  ${sizeStyle}
  ${roundedStyle}
`;

function Button({ children, size, color, rounded, width, onClick, fw }) {
  return (
    <ButtonContainer>
      <StyledButton
        size={size}
        width={width}
        color={color}
        rounded={rounded}
        onClick={onClick}
        fontWeight={fw}
      >
        {children}
      </StyledButton>
    </ButtonContainer>
  );
}

StyledButton.defaultProps = {
  size: "medium",
  color: "black",
  rounded: "0",
  fw: "300",
};

export default Button;
