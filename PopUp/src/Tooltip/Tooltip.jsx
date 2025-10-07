import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

const Tooltip = ({ children, content, placement = "top" }) => {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const targetRef = useRef(null);

  useEffect(() => {
    if (visible && targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      let top = 0, left = 0;

      switch (placement) {
        case "top":
          top = rect.top - 8; // 8px gap
          left = rect.left + rect.width / 2;
          break;
        case "bottom":
          top = rect.bottom + 8;
          left = rect.left + rect.width / 2;
          break;
        case "left":
          top = rect.top + rect.height / 2;
          left = rect.left - 100; // make it dynamic
          break;
        case "right":
          top = rect.top + rect.height / 2;
          left = rect.right + 8;
          break;
        default:
          break;
      }

      setCoords({ top, left });
    }
  }, [visible, placement]);

  return (
    <>
      <span
        ref={targetRef}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        style={{ cursor: "pointer" }}
      >
        {children}
      </span>

      {visible &&
        ReactDOM.createPortal(
          <div
            style={{
              position: "fixed",
              top: coords.top,
              left: coords.left,
              transform:
                placement === "top" || placement === "bottom"
                  ? "translateX(-50%)"
                  : "translateY(-50%)",
              background: "black",
              color: "white",
              padding: "6px 10px",
              borderRadius: "6px",
              fontSize: "12px",
              whiteSpace: "nowrap",
              zIndex: 3000,
            }}
          >
            {content}
          </div>,
          document.getElementById("portal-root") // portal target
        )}
    </>
  );
};

export default Tooltip;
