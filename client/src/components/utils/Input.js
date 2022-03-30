import React from "react";
import styled, { css } from "styled-components";
import { darken } from "polished";

const sizes = {
  small: {
    height: "1.5rem",
  },
  medium: {
    height: "2.5rem",
  },
  large: {
    height: "3.5rem",
  },
};

const sizeStyle = css`
  ${({ size }) =>
    css`
      height: ${sizes[size].height};
    `}
`;

const roundedStyle = css`
  ${({ rounded }) => css`
    border-radius: ${`${rounded}px`};
  `}
`;

const StyledInput = styled.input`
  border: none;
  color: gray;
  font-size: 20px;

  ${({ color }) => css`
    background: ${darken(0.05, color)};
  `}
  ${sizeStyle}
  ${roundedStyle}

  ${({ width }) => css`
    width: ${width}px;
  `}

  &:focus {
    outline: none;
  }
  &::placeholder {
    font-size: 12px;
  }
`;

function Input({
  children,
  color,
  size,
  rounded,
  placeholder,
  onChange,
  name,
  type,
  width,
}) {
  return (
    <StyledInput
      type={type}
      name={name}
      color={color}
      onChange={onChange}
      size={size}
      rounded={rounded}
      placeholder={placeholder}
      width={width}
    >
      {children}
    </StyledInput>
  );
}

StyledInput.defaultProps = {
  size: "medium",
  color: "white",
  rounded: "0",
  type: "text",
};

export default Input;
