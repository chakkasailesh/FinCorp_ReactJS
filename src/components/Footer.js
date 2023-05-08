import React from "react";

const Footer = () => {
  return (
    <>
      <footer
        style={{
          position: "fixed",
          left: "0px",
          bottom: "0px",
          height: "30px",
          width: "100%",
          textAlign: "center",
          color: "white",
          background: "black",
        }}
        className="mainfooter"
      >
        Copyright © 2023 FinCorp All Rights Reserved
      </footer>
    </>
  );
};

export default Footer;
