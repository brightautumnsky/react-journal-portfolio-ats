import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
  margin-bottom: 36px;
  width: 600px;
  height: 300px;
  resize: none;
  border: 3px solid #84ced1;
  box-sizing: border-box;
  padding: 1rem;
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 767px) {
    width: 270px;
    height: 360px;
  }
`;

function Textarea({ refresh }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    refresh && refresh(content, "journal");
  }, [content]);

  const onChange = (e) => {
    setContent(e.target.value);
  };

  return <StyledTextarea value={content} onChange={onChange} />;
}

export default Textarea;
