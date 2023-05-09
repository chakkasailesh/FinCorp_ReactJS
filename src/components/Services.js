import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { context } from "./UserContext";

const Servies = () => {
  const { state } = useContext(context);
  const navigate = useNavigate();
  useEffect(() => {
    if (!state.isAuthenticated) {
      navigate("/");
    }
  });
  return <h2>Services</h2>;
};

export default Servies;
