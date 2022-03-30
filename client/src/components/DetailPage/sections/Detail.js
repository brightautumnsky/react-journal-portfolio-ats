import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { likeJournal, deleteJournal } from "../../../_actions/journal_action";
import Button from "../../utils/Button";
import getUrl from "../../../_functions/getUrl";

const StyledDetail = styled.div`
  padding: 0px 100px 0px;
  text-align: center;
  position: relative;
  span {
    font-weight: 600;
  }
  @media screen and (max-width: 766px) {
    padding: 0px 70px 0;
  }
`;

const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
  img {
    width: 100px;
    &:nth-of-type(2) {
      width: 50px;
    }
  }
  p {
    text-align: justify;
  }
  p:nth-of-type(1) {
    text-decoration: underline;
  }
  & > div {
    display: inline-block;
  }
`;

function Detail({ info, id, props }) {
  useEffect(() => {});
  const dispatch = useDispatch();

  const onLikeHandler = () => {
    let body = {
      id,
    };
    dispatch(likeJournal(body));
  };

  const deleteHandler = () => {
    let body = {
      id,
    };

    dispatch(deleteJournal(body));
    props.history.push("/journal/list");
  };

  return (
    <StyledDetail>
      {info && (
        <DetailBox>
          <p>
            {info[0].year}.{info[0].month}.{info[0].date}
          </p>
          <img src={getUrl(info[0].emotion)} alt={info[0].emotion} />
          <p>{info[0].journal}</p>
          <img
            onClick={onLikeHandler}
            src={info[0].like ? "/images/like.png" : "/images/unlike.png"}
            alt={info[0].like ? "like" : "unlike"}
          />
        </DetailBox>
      )}
      <Button color="#84ced1" onClick={deleteHandler}>
        <span>삭제</span>
      </Button>
    </StyledDetail>
  );
}

export default Detail;
