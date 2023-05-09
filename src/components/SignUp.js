import React, { useContext } from "react";
import { context } from "./UserContext";

const SignUp = () => {
  const { state } = useContext(context);
  if (state.isAuthenticated) {
    return <h2>Already a user</h2>;
  } else return <h2>SignUp</h2>;
};

export default SignUp;
