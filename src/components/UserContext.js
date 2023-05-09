import React, { createContext, useState } from "react";

const context = createContext();

const UserContext = (props) => {
  const [state, setState] = useState({ isAuthenticated: false });
  return (
    <context.Provider value={{ state, setState: setState }}>
      {props.children}
    </context.Provider>
  );
};

export { context, UserContext };
