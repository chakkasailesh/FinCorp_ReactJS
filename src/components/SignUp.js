import React from "react";
import { useSelector } from "react-redux";

const SignUp = () => {
  const authenticated = useSelector((state) => state.LoginReducer.isAuthed);
  console.log(authenticated);
  if (authenticated) {
    return <h2>Already a user</h2>;
  } else return <h2>SignUp</h2>;
};

export default SignUp;
