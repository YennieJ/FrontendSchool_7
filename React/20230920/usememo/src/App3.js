import React, { createContext } from "react";
const UserInfo = createContext({ name: "yen", id: "yennie" });
const App3 = () => {
  return (
    // provider로 값 변경 가능
    <UserInfo.Provider value={{ name: "yeajin", id: "yeajinlee" }}>
      <HelloJin />
    </UserInfo.Provider>
  );
};

const HelloJin = () => {
  return (
    <UserInfo.Consumer>
      {(value) => {
        return (
          <div>
            <h2>{value.name}</h2>
            <strong>{value.id}</strong>
            <HelloLeah />
          </div>
        );
      }}
    </UserInfo.Consumer>
  );
};

const HelloLeah = () => {
  return (
    <UserInfo.Consumer>
      {(value) => {
        return (
          <div>
            <h2>{value.name}</h2>
            <strong>{value.id}</strong>
          </div>
        );
      }}
    </UserInfo.Consumer>
  );
};
export default App3;
