import React, { useMemo, useRef, useState } from "react";

const App2 = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [userInfo, setUserInfo] = useState([]);

  const inputName = useRef(null);
  const inputId = useRef(null);

  const handleInputName = (e) => {
    setName(e.target.value);
    console.log("rendering -1");
  };

  const handleInputId = (e) => {
    setName(e.target.value);
    console.log("rendering -2");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newInfo = [...userInfo, { name, id }];
    setUserInfo(newInfo);

    inputName.current.value = "";
    inputId.current.value = "";
    inputName.current.focus();

    console.log("rendering -3");
  };

  const getNum = (list) => {
    console.log("rendering!");
    return list.length;
  };

  const itemLength = useMemo(() => {
    return getNum(userInfo);
  }, [userInfo]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter your name"
          onChange={handleInputName}
          ref={inputName}
        />
        <input
          type="text"
          placeholder="enter your id"
          onChange={handleInputId}
          ref={inputId}
        />
        <button>회원 명부 작성</button>
      </form>
      <ul>
        {userInfo.map((value, idx) => {
          return (
            <li key={idx}>
              <h3>name : ${value.name}</h3>
              <strong>ID : ${value.id}</strong>
            </li>
          );
        })}
      </ul>
      <span>{itemLength}</span>
    </>
  );
};

export default App2;
