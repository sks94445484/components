import React from "react";
import Tooltip from "./Tooltip";

export default function App() {
  return (
    <div style={{ padding: "100px" }}>
      <Tooltip text="Hello, I'm a tooltip!">
        <button>Hover me</button>
      </Tooltip>
    </div>
  );
}
