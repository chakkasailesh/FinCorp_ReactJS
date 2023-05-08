import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import validateFiled from "../validations/validateField";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginValidate } from "../actions/Actions";

const Login = () => {
  const initialForm = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialForm);
  const [formErrors, setFormErrors] = useState(initialForm);
  const dispatch = useDispatch();
  const authenticated = useSelector((state) => state.LoginReducer.isAuthed);
  let navigate = useNavigate();
  useEffect(() => {
    if (authenticated) {
      navigate("/aboutus");
    }
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    const error = validateFiled(name, value, formData);
    setFormData({ ...formData, [name]: value, loginAttempted: false });
    setFormErrors({ ...formErrors, [name]: error });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    Object.keys(formData).forEach(
      (name) => (errors[name] = validateFiled(name, formData[name], formData))
    );
    setFormErrors(errors);
    if (Object.values(errors).some((error) => error)) {
      return;
    }
    dispatch(loginValidate(formData));
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
          {!authenticated && formData.loginAttempted && (
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
