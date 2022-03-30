import { useState } from "react";

function useInputs(initialState) {
  const [inputs, setInputs] = useState(initialState);

  const onChange = (e) => {
    let target = e.target;
    setInputs({ ...inputs, [target.name]: target.value });
  };

  const onReset = () => {
    setInputs(initialState);
  };

  return [inputs, onChange, onReset];
}

export default useInputs;
