import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import validateFiled from "../validations/validateField";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { context } from "./UserContext";
import axios from "axios";

const Login = () => {
  const initialForm = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialForm);
  const [formErrors, setFormErrors] = useState(initialForm);
  const { state, setState } = useContext(context);
  let navigate = useNavigate();
  useEffect(() => {
    if (state.isAuthenticated) {
      navigate("/aboutus");
    }
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    const error = validateFiled(name, value, formData);
    setFormData({ ...formData, [name]: value, loginAttempted: false });
    setFormErrors({ ...formErrors, [name]: error });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    Object.keys(formData).forEach(
      (name) => (errors[name] = validateFiled(name, formData[name], formData))
    );
    setFormErrors(errors);
    if (Object.values(errors).some((error) => error)) {
      return;
    }
    axios.get("http://localhost:4000/members").then((res) => {
      let value = res.data;
      console.log(value);
      let result = value.find(
        (val) =>
          val.userID === formData.username && val.password === formData.password
      );
      if (result) {
        setState({ ...state, isAuthenticated: true });
      } else {
        setState({ ...state, isAuthenticated: false });
      }
    });
    setFormData({ ...formData, loginAttempted: true });
  };
  return (
    <div>
      <h2>Login</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">User ID:</label>
            <input
              className="form-control"
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleChange}
            />
            {formErrors.username && (
              <span className="error text-danger">{formErrors.username}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              className="form-control"
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
            />
            {formErrors.password && (
              <span className="error text-danger">{formErrors.password}</span>
            )}
          </div>
          {!state.isAuthenticated && formData.loginAttempted && (
            <div className="error text-danger">Invalid Credentials</div>
          )}
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
