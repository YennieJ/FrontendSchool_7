import { useState } from "react";

const useInput = (initSate) => {
  const [value, setValue] = useState(initSate);

  function onChange(e) {
    setValue(e.target.value);
  }
  return [value, onChange];
};

export default useInput;
