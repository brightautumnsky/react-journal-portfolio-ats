import React, { useState, useEffect } from "react";
import styled from "styled-components";

const defaultDate = {
  year: [2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030],
  month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  date: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ],
};

const StyledDate = styled.div`
  display: flex;
  gap: 0 12px;
  align-items: center;
`;

const StyledSelect = styled.select`
  width: 60px;
  border: none;
  background: transparent;
  color: #84ced1;
  font-weight: 800;
  &:focus {
    outline: none;
  }
`;

const initialDateState = {
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
  date: new Date().getDate(),
};

function DateBox({ refresh }) {
  const [dateState, setDateState] = useState(initialDateState);

  useEffect(() => {
    refresh && refresh(dateState, "time");
  }, [dateState]);

  const setOption = (category) => {
    return defaultDate[category].map((value, index) => (
      <option name={category} value={value} key={index}>
        {value}
      </option>
    ));
  };

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDateState({ ...dateState, [name]: value });
  };

  return (
    <StyledDate>
      <StyledSelect onChange={onChange} name="year">
        {setOption("year")}
      </StyledSelect>
      년
      <StyledSelect onChange={onChange} name="month">
        {setOption("month")}
      </StyledSelect>
      월
      <StyledSelect onChange={onChange} name="date">
        {setOption("date")}
      </StyledSelect>
      일
    </StyledDate>
  );
}

export default DateBox;
