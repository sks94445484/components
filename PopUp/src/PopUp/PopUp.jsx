import React from "react";
import ReactDOM from "react-dom";

const Popup = ({ children, x, y }) => {
  return ReactDOM.createPortal(
    <div
      style={{
        position: "absolute",
        top: y,
        left: x,
        background: "white",
        border: "1px solid #ccc",
        padding: "8px",
        borderRadius: "8px",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",
        zIndex: 1000
      }}
    >
      {children}
    </div>,
    document.getElementById("portal-root")
  );
};

export default Popup;
