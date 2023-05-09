import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import validateFiled from "../validations/validateField";
import { signupValidate } from "../actions/Actions";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const initialForm = {
    username: "",
    phone: "",
    password: "",
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authenticated = useSelector((state) => state.LoginReducer.isAuthed);
  const [formData, setFormData] = useState(initialForm);
  const [formErrors, setFormErrors] = useState(initialForm);
  const handleChange = (e) => {
    const { name, value } = e.target;
    const error = validateFiled(name, value, formData);
    setFormData({ ...formData, [name]: value });
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
    console.log("data");
    dispatch(signupValidate(formData));
    navigate("/");
  };
  if (authenticated) {
    return <h2>Already a user</h2>;
  } else
    return (
      <div>
        <h2 style={{ textAlign: "center" }}>SignUp</h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                className="form-control"
                type="text"
                id="username"
                name="username"
                onChange={handleChange}
                value={formData.username}
              ></input>
              {formErrors.username && (
                <span className="error text-danger">{formErrors.username}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="phone">Mobile No:</label>
              <input
                className="form-control"
                type="text"
                id="phonr"
                name="phone"
                onChange={handleChange}
                value={formData.phone}
              ></input>
              {formErrors.phone && (
                <span className="error text-danger">{formErrors.phone}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                className="form-control"
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                value={formData.password}
              ></input>
              {formErrors.password && (
                <span className="error text-danger">{formErrors.password}</span>
              )}
            </div>
            <button type="submit" className="btn btn-primary">
              SignUp
            </button>
          </form>
        </div>
      </div>
    );
};

export default SignUp;
