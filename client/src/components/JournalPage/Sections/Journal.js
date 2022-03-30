import React from "react";
import styled from "styled-components";
import getUrl from "../../../_functions/getUrl";

const StyledJournal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  height: 100%;
  background: white;
  border-radius: 24px;
  box-shadow: 1px 6px 12px rgba(0, 0, 0, 0.1);
  padding: 24px;
  box-sizing: border-box;
  overflow: hidden;
  &:hover .icon {
    transform: scale(1.3) rotate(5deg);
  }
`;

const Content = styled.div`
  font-weight: 700;
  max-width: 500px;
  p {
    width: 200px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

const Date = styled.div`
  padding: 3px 6px;
  border-radius: 6px;
  font-weight: 800;
  font-size: 0.9rem;
  color: white;
  background: #84ced1;
  align-self: flex-end;
`;

const Emotion = styled.div`
  .icon {
    box-sizing: border-box;
    align-self: center;
    transition: all 0.15s ease-in;
  }
  img {
    width: 50px;
  }
`;

const Like = styled.div`
  align-self: flex-end;
  img {
    width: 30px;
  }
`;

function Journal({ info }) {
  return (
    info &&
    info.map((journal, index) => (
      <a href={`/journal/detail/${journal._id}`} key={index}>
        <StyledJournal key={index}>
          <Emotion>
            <img src={getUrl(journal.emotion)} alt={journal.emotion} />
          </Emotion>
          <Content>
            <p>{journal.journal}</p>
          </Content>
          <Like>
            <img
              src={journal.like ? "/images/like.png" : "/images/unlike.png"}
              alt={journal.like ? "like" : "unlike"}
            />
          </Like>
          <Date>
            {journal.year}.{journal.month}.{journal.date}
          </Date>
        </StyledJournal>
      </a>
    ))
  );
}

export default Journal;
