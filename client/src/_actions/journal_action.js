import axios from "axios";

const asyncJournals = (data) => {
  const request = axios
    .post("/api/journal/list", data)
    .then((response) => response.data);

  return request;
};

const asyncJournal = (dataToSubmit) => {
  const request = axios
    .get(`/api/journal/getDetail${dataToSubmit}`)
    .then((response) => response.data);

  return request;
};

export const getJournals = (dataToSubmit) => async (dispatch) => {
  dispatch({ type: "GET_JOURNALS" });

  try {
    const journals = await asyncJournals(dataToSubmit);
    dispatch({ type: "SUCCESS_JOURNALS", payload: journals });
  } catch {
    dispatch({ type: "ERROR_JOURNALS" });
  }
};

export const getJournal = (dataToSubmit) => async (dispatch) => {
  dispatch({ type: "GET_JOURNALS" });

  try {
    const journal = await asyncJournal(dataToSubmit);
    dispatch({ type: "SUCCESS_JOURNALS", payload: journal });
  } catch {
    dispatch({ type: "ERROR_JOURNALS" });
  }
};

export const writeJournal = (dataToSubmit) => {
  const request = axios
    .post("/api/journal/write", dataToSubmit)
    .then((response) => response.data);

  return {
    type: "WRITE_JOURNAL",
    payload: request,
  };
};

export const likeJournal = (dataToSubmit) => {
  const request = axios
    .post("/api/journal/like", dataToSubmit)
    .then((response) => response.data);

  return {
    type: "LIKE_JOURNAL",
    payload: request,
  };
};

export const deleteJournal = (dataToSubmit) => {
  const request = axios
    .post("/api/journal/delete", dataToSubmit)
    .then((response) => response.data);

  return {
    type: "DELETE_JOURNAL",
    payload: request,
  };
};
