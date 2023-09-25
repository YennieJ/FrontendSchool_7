import React, { useState, useRef } from "react";

const App2 = () => {
  const [emailVal, setEmailVal] = useState("");
  const [pwVal, setPwVal] = useState("");

  const emailInput = useRef(null);
  const pwInput = useRef(null);

  const inputCheck = (e) => {
    e.preventDefault();

    if (emailInput.current.value === "") {
      alert("enter your email");
      emailInput.current.focus();
      return;
    } else if (pwInput.current.value === "") {
      alert("enter your password");
      pwInput.current.focus();
      return;
    }

    setEmailVal(emailInput.current.value);
    setPwVal(pwInput.current.value);
  };

  return (
    <form
      onSubmit={inputCheck}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <label>
        email : <input type="email" ref={emailInput}></input>
      </label>
      <label>
        password : <input type="password" ref={pwInput}></input>
      </label>
      <button type="submit" style={{ width: "100px" }}>
        login
      </button>

      <span>input email : {emailVal}</span>
      <span>input password : {pwVal}</span>
    </form>
  );
};

export default App2;
