import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import AboutUs from "./components/AboutUs";
import SignUp from "./components/SignUp";
import UpdateProfile from "./components/UpdateProfile";
import EMICalculator from "./components/EMICalculator";
import Services from "./components/Services";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { UserContext } from "./components/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="services" element={<Services />} />
            <Route path="emi" element={<EMICalculator />} />
            <Route path="signUp" element={<SignUp />} />
            <Route path="updateProfile" element={<UpdateProfile />} />
            <Route index element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContext>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
