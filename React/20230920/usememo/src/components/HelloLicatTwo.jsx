import React, { createContext } from "react";
import UserInfo from "./context";

const HelloLicat = () => {
  const { name, id } = createContext(UserInfo);
  return (
    <div>
      <h2>{name}</h2>
      <strong>{id}</strong>
    </div>
  );
};

export default HelloLicat;
