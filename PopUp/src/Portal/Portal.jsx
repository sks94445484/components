import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const Portal = ({ children }) => {
  const elRef = useRef(null);

  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    let portalRoot = document.getElementById("portal-root");

    // If no portal-root exists, create one
    if (!portalRoot) {
      portalRoot = document.createElement("div");
      portalRoot.id = "portal-root";
      document.body.appendChild(portalRoot);
    }

    portalRoot.appendChild(elRef.current);

    return () => {
      portalRoot.removeChild(elRef.current);
    };
  }, []);

  return ReactDOM.createPortal(children, elRef.current);
};

export default Portal;
