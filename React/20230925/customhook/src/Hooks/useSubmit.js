import React, { useRef, useState } from "react";

const useSubmit = () => {
  const [inputVal, setInputVal] = useState("");
  const inputRef = useRef(null);

  const onSubmit = () => {
    setInputVal(inputRef.current.value);
  };
  return [inputRef, inputVal, onSubmit];
};

export default useSubmit;
