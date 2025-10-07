import React, { useState, useRef, useEffect } from "react";
import "./Tooltip.css";

export default function Tooltip({ text, children }) {
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState("top");
  const tooltipRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (visible && tooltipRef.current && wrapperRef.current) {
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const wrapperRect = wrapperRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Default placement "top"
      let newPlacement = "top";

      if (wrapperRect.top < tooltipRect.height + 10) {
        newPlacement = "bottom";
      }
      if (wrapperRect.bottom + tooltipRect.height > viewportHeight) {
        newPlacement = "top";
      }
      if (wrapperRect.left < tooltipRect.width && wrapperRect.top > tooltipRect.height) {
        newPlacement = "right";
      }
      if (wrapperRect.right + tooltipRect.width > viewportWidth) {
        newPlacement = "left";
      }

      setPlacement(newPlacement);
    }
  }, [visible]);

  return (
    <div
      className="tooltip-wrapper"
      ref={wrapperRef}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div className={`tooltip-box ${placement}`} ref={tooltipRef}>
          {text}
        </div>
      )}
    </div>
  );
}
