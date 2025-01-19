import React from "react";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  const FooterStyle = {
    position: ["/", "/employee"].includes(location.pathname) ? "fixed" : "relative",
    bottom: ["/", "/employee"].includes(location.pathname) ? "0" : "auto",
    width: "100%",
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    padding: "10px 0",
  };

  return (
    <div style={FooterStyle}>
      <span>©2025 All Rights Reserved</span>
    </div>
  );
}

export default Footer;
