import React, { useState } from "react";
import Popup from "./PopUp";

export default function App() {
  const [coords, setCoords] = useState(null);

  const handleClick = (e) => {
    console.log(e,"e")
    setCoords({ x: e.clientX, y: e.clientY });
    // setCoords({ x: e.nativeEvent.screenX, y: e.nativeEvent.screenY });
  };

  return (
    <div>
      <button onClick={handleClick}
        style={{
            // margin: "100px 0px 0px 100px",
        }}
      >Show Popup</button>
      {coords && (
        <Popup x={coords.x} y={coords.y}>
          <p>This is a popup!</p>
          <button onClick={() => setCoords(null)}>Close</button>
        </Popup>
      )}
    </div>
  );
}
