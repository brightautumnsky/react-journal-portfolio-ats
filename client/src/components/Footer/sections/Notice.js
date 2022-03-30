import React from "react";
import styled from "styled-components";

const NoticeContainer = styled.div`
  p {
    text-align: justify;
    &:nth-of-type(1) {
      font-size: 0.9rem;
    }
    &:nth-of-type(2) {
      margin-top: 24px;
      text-align: center;
      font-size: 0.8rem;
    }
  }
`;

function Notice() {
  return (
    <NoticeContainer>
      <p>
        <span>
          <a href="https://ats-portfolio-site.netlify.app/" target="_blank">
            포트폴리오 사이트
          </a>
        </span>
        에 오시면 제작 과정을 확인하실 수 있습니다. 방문해주셔서 감사합니다.
      </p>
      <p>brightautumnsky.21@gmail.com</p>
    </NoticeContainer>
  );
}

export default Notice;
