import React, { useState } from "react";
import styled from "styled-components";
import { FaGithub, FaEnvelope } from "react-icons/fa";

const NavContainer = styled.div`
  background: #f4f4f4;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 13px 0;
  height: 36px;
  ul {
    display: flex;
    gap: 0 12px;
    justify-content: center;
  }
  @media screen and (max-width: 767px) {
    font-size: 0.8rem;
    ul {
      gap: 0 8px;
    }
  }
`;

const IconBoxConatiner = styled.div`
  display: flex;
  margin-left: 36px;
  align-items: center;
  div {
    color: #84ced1;
    margin-right: 12px;
    .email-icon {
      cursor: pointer;
    }
    a {
      color: #84ced1;
    }
  }
  .email-icon--box {
    position: relative;
  }
  @media screen and (max-width: 767px) {
    margin-left: 20px;
  }
`;

const CopiedSuccess = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 12px;
  width: fit-content;
  height: fit-content;
  background: pink;
  border-radius: 12px;
  position: absolute;
  top: 0.9rem;
  left: 0;
  span {
    font-size: 0.725rem;
    font-weight: 600;
    color: white;
  }
`;

function Navbar() {
  const [copied, setCopied] = useState(false);

  const onCopiedHandler = () => {
    navigator.clipboard.writeText("brightautumnsky.21@gmail.com").then(() => {
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    });
  };

  return (
    <NavContainer>
      <ul>
        <li>
          <a href="/journal/write">일기 작성</a>
        </li>
        <li>
          <a href="/journal/list">일기 목록</a>
        </li>
        <li>
          <a href="/journal/like">좋아요</a>
        </li>
        <li>
          <a href="/setting">설정</a>
        </li>
        <IconBoxConatiner>
          <div>
            <a
              href="https://github.com/brightautumnsky/react-journal-portfolio-ats"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
          <div className="email-icon--box">
            <FaEnvelope className="email-icon" onClick={onCopiedHandler} />
            {copied && (
              <CopiedSuccess>
                <span>copied!</span>
              </CopiedSuccess>
            )}
          </div>
        </IconBoxConatiner>
      </ul>
    </NavContainer>
  );
}

export default Navbar;
