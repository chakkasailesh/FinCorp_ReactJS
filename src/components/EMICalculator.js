import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const EMICalculator = () => {
  const authenticated = useSelector((state) => state.LoginReducer.isAuthed);
  const navigate = useNavigate();
  useEffect(() => {
    if (!authenticated) {
      navigate("/");
    }
  });
  return <h2>EMICalculator</h2>;
};

export default EMICalculator;
