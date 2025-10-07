import React from "react";
import Tooltip from "./Tooltip";

export default function App() {
  return (
    <div style={{ 
        margin: "100px"
         }}>
      {/* <Tooltip content="This is a top tooltip" placement="left">
        <span><button>Hover me (Top)</button></span>
      </Tooltip> */}

      <br /><br />

      <Tooltip content="Tooltip on right" placement="left">
        <span style={{ padding: "10px", border: "1px solid #ccc", 
            // margin:"50px" 
            }}>
          Hover me (Right)
        </span>
      </Tooltip>
    </div>
  );
}
