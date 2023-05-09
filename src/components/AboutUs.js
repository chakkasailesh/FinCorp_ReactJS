import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import bgimage from "../images/bgimage.jpg";
import { context } from "./UserContext";

const AboutUs = () => {
  const { state } = useContext(context);
  const navigate = useNavigate();
  useEffect(() => {
    if (!state.isAuthenticated) {
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
