import React from "react";
import styled from "styled-components";

const ServiceContainer = styled.ul`
  margin: 24px 0 36px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 36px);
  grid-auto-rows: 36px;
  li {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

function Service() {
  return (
    <ServiceContainer>
      <li>
        <a href="/help">고객센터</a>
      </li>
      <li>피드백</li>
      <li>
        <a href="/journal/write">일기 작성</a>
      </li>
      <li>
        <a href="/journal/list">일기 조회</a>
      </li>
      <li>
        <a href="/journal/like">좋아요 일기</a>
      </li>
      <li>
        <a href="/setting">설정</a>
      </li>
      <li>
        <a href="https://github.com/brightautumnsky/react-journal-portfolio-ats">
          깃허브
        </a>
      </li>
    </ServiceContainer>
  );
}

export default Service;
