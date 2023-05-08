import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../actions/Actions";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  useEffect(() => {
    dispatch(logout);
    navigate("/aboutus");
  });
};

export default Logout;
