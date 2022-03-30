import React from "react";
import styled from "styled-components";
import Button from "../../utils/Button";

const StyledTitle = styled.div`
  background: #f4f4f4;
  padding: 0 50px;
  box-sizing: border-box;
  h1 {
    font-size: 24px;
  }
  @media screen and (max-width: 766px) {
    padding: 0 25px;
    h1 {
      font-size: 16px;
    }
  }
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0 12px;
  img {
    width: 50px;
  }
`;

const UserBox = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 24px;
  display: inline-flex;
  flex-direction: row;
  gap: 0 1.5rem;
  justify-content: space-between;
  a,
  span {
    text-decoration: none;
    font-size: 0.8rem;
    font-weight: 800;
    &:hover {
      text-decoration: underline;
    }
  }
  @media screen and (max-width: 766px) {
    gap: 0 0.5rem;
    a,
    span {
      font-size: 0.65rem;
    }
  }
`;

function Title({ user, logoutHandler }) {
  return (
    <StyledTitle>
      <TitleBox>
        <img src="/images/logoImage.png" alt="logo" />
        <h1>
          <a href="/">오늘의 일기</a>
        </h1>
      </TitleBox>
      {user.userData && user.userData.isAuth ? (
        <UserBox>
          <Button size="small" color="transparent" onClick={logoutHandler}>
            <a href="/">로그아웃</a>
          </Button>
        </UserBox>
      ) : (
        <UserBox>
          <Button size="small" color="transparent">
            <a href="/register">회원가입</a>
          </Button>
          <Button size="small" color="transparent">
            <a href="/login">로그인</a>
          </Button>
        </UserBox>
      )}
    </StyledTitle>
  );
}

export default Title;
