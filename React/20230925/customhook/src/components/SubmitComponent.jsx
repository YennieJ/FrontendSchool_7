import React from "react";
import useSubmit from "../Hooks/useSubmit";

const SubmitComponent = () => {
  const [inputRef, inputVal, onSubmit] = useSubmit();

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={onSubmit}>Submit</button>

      <h1>{inputVal}</h1>
    </>
  );
};

export default SubmitComponent;
