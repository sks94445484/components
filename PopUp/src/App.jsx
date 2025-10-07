
import React, { useState } from "react";
import PortalPage from "./Portal/PortalPage";
import PopUpPage from "./PopUp/PopUpPage";
import TooltipPage from "./Tooltip/TooltipPage"

export default function App() {

  return (
    <div
      style={{
        height: "200vh",
      }}
    >
      <PortalPage />
      <PopUpPage />
      <TooltipPage />
    </div>
  );
}

