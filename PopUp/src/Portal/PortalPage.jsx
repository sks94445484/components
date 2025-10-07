
import React, { useState } from "react";
import Portal from "./Portal";

export default function PortalPage() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Dialog</button>

      {open && (
        <Portal>
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: "white",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0px 8px 20px rgba(0,0,0,0.25)",
              zIndex: 2000,
            }}
          >
            <h2>Dynamic Portal</h2>
            <p>This dialog didnt need a manualin HTML.</p>
            <button onClick={() => setOpen(false)}>Close</button>
          </div>
        </Portal>
      )}
    </div>
  );
}