import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { writeJournal, getJournals } from "../../_actions/journal_action";
import styled from "styled-components";
import PageContainer from "../utils/PageContainer";
import WriteForm from "./Sections/WriteForm";

const initialJournalState = {
  time: {},
  emotion: "",
  journal: "",
};

function WritePage(props) {
  const user = useSelector((state) => state.userStore);
  const [journalState, setJournaState] = useState(initialJournalState);
  const { time, emotion, journal } = journalState;
  const {
    year = new Date().getFullYear(),
    month = new Date().getMonth() + 1,
    date = new Date().getDate(),
  } = time;
  const dispatch = useDispatch();

  const refreshFunction = useCallback(
    (value, category) => {
      setJournaState({ ...journalState, [category]: value });
    },
    [journalState]
  );

  const onSubmitHanlder = (e) => {
    e.preventDefault();
    let body = {
      year,
      month,
      date,
      emotion,
      journal,
      time: new Date(Number(year), Number(month) - 1, Number(date) + 1),
      name: user.userData.name,
    };

    dispatch(writeJournal(body)).then((response) => {
      if (response.payload.success) {
        dispatch(getJournals());
        props.history.push("/journal/list");
      } else {
        alert("일기 저장에 실패했습니다.");
      }
    });
  };

  return (
    <PageContainer>
      <WriteForm sf={onSubmitHanlder} rf={refreshFunction} />
    </PageContainer>
  );
}

export default WritePage;
