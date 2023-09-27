import React, { createContext } from "react";
import UserInfo from "./context";

import HelloLicatTwo from "./HelloLicatTwo";

const HelloLicat = () => {
  const { name, id } = createContext(UserInfo);
  return (
    <div>
      <h2>{name}</h2>
      <strong>{id}</strong>
      <HelloLicatTwo />
    </div>
  );
};

export default HelloLicat;
