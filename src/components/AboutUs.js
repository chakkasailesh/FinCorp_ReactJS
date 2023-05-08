import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import bgimage from "../images/bgimage.jpg";

const AboutUs = () => {
  const authenticated = useSelector((state) => state.LoginReducer.isAuthed);
  const navigate = useNavigate();
  useEffect(() => {
    if (!authenticated) {
      navigate("/");
    }
  });
  return (
    <div
      className="container-fluid text-center bg-image"
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        height: "500px",
      }}
    >
      <h1 style={{ color: "darkred" }}>FinCorp</h1>
      <h2>An Hub For Your Finiancial Needs</h2>
      <div style={{ fontSize: "25px" }}>
        We offer the extensive array of services by providing loans to citizens:
        Money transfer, wealth management and also leading on providing micro
        loans to agriculture and small businesses in the rural regions.
      </div>
    </div>
  );
};

export default AboutUs;
