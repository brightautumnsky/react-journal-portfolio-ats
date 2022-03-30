import React from "react";
import styled from "styled-components";
import Button from "../../utils/Button";

const StyledLike = styled.div`
  margin-bottom: 150px;
  h3 {
    text-align: center;
  }
`;

const LikeList = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px 0;
  align-items: center;
  justify-content: space-around;
  margin-top: 36px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

const LikeJournal = styled.div`
  max-width: 600px;
  height: fit-content;
  border: 3px dotted #84ced1;
  padding: 24px;
  box-sizing: border-box;
  overflow: hidden;
  span {
    font-size: 0.75rem;
    background: #84ced1;
    color: white;
    padding: 3px 6px;
  }
  p {
    /* text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap; */
    text-align: justify;
    font-weight: 800;
    line-height: 24px;
    margin: 0;
    padding: 6px 12px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 36px;
  a {
    font-weight: 700;
    color: #fff;
  }
`;

function Like({ info }) {
  return (
    <StyledLike>
      <h3>최근 좋아요를 누른 일기</h3>
      <LikeList>
        {info &&
          info.map(
            (journal, index) =>
              index < 4 &&
              journal.like && (
                <LikeJournal key={index}>
                  <a href={`journal/detail/${journal._id}`}>
                    <p>
                      {journal.journal} {/* */}
                      <span>
                        {journal.year}.{journal.month}.{journal.date}
                      </span>
                    </p>
                  </a>
                </LikeJournal>
              )
          )}
      </LikeList>
      <ButtonContainer>
        <Button color="#84ced1">
          <a href="/diary/like">더보기</a>
        </Button>
      </ButtonContainer>
    </StyledLike>
  );
}

export default Like;
