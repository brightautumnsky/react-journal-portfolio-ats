const axios = require("axios");

export function setFontSize(dataToSubmit) {
  const request = {
    success: true,
    ...dataToSubmit,
  };

  return {
    type: "SET_FONTSIZE",
    payload: request,
  };
}

export function setBackground(dataToSubmit) {
  const request = {
    success: true,
    ...dataToSubmit,
  };
  return {
    type: "SET_BACKGROUND",
    payload: request,
  };
}

// 설정 저장
export function setUpdate(dataToSubmit) {
  const request = axios
    .post("/api/setting/update", dataToSubmit)
    .then((response) => response.data);

  return {
    type: "SET_UPDATE",
    payload: request,
  };
}

export function setList() {
  const request = axios
    .post("/api/setting/list")
    .then((response) => response.data.info);

  return {
    type: "SET_LIST",
    payload: request,
  };
}
