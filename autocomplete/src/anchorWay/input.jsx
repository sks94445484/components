import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

export default function Input() {
  const [anchorEl, setAnchorEl] = useState(null); // the active input element
  const [options, setOptions] = useState([]);
  const [containerEl, setContainerEl] = useState(null); // portal container

  const fruits = ["Apple", "Banana", "Cherry", "Mango", "Papaya", "Orange"];

  // Update dropdown options when anchor changes
  useEffect(() => {
    if (anchorEl) {
      setOptions(fruits.filter(f => f.toLowerCase().includes(anchorEl.value.toLowerCase())));
    }
  }, [anchorEl]);

  // Handle outside click to close dropdown
  useEffect(() => {
    function handleClickOutside(e) {
      if (anchorEl && !anchorEl.contains(e.target)) {
        setAnchorEl(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [anchorEl]);

//   const handleFocus = (e) => {
//     setAnchorEl(e.target); // set anchor to clicked input
//   };

  const handleFocus = (e) => {
    setAnchorEl(e.target);

    // ✅ Create a new container div dynamically
    let divEl = document.getElementById("dropdown-container");
    if(!divEl){
        divEl = document.createElement("div");
        // div.className = "dropdown-container";
        divEl.id = "dropdown-container";
        document.body.appendChild(divEl); // you could append anywhere
    }
    setContainerEl(divEl);
  };


  const handleSelect = (value) => {
    if (anchorEl) {
      anchorEl.value = value; // set value directly in input
      setAnchorEl(null); // close dropdown
    }
  };

  // compute dropdown position relative to anchorEl
  const dropdownStyle = anchorEl
    ? {
        position: "absolute",
        top: anchorEl.getBoundingClientRect().bottom + window.scrollY + 4 + "px",
        left: anchorEl.getBoundingClientRect().left + window.scrollX + "px",
        width: anchorEl.getBoundingClientRect().width + "px",
      }
    : {};

  return (
    <div className="container">
      <input type="text" placeholder="Input 1" onFocus={handleFocus} />
      <input type="text" placeholder="Input 2" onFocus={handleFocus} />
      <input type="text" placeholder="Input 3" onFocus={handleFocus} />

      {anchorEl &&
        options.length > 0 &&
        ReactDOM.createPortal(
          <ul className="dropdown" style={dropdownStyle}>
            {options.map((opt, idx) => (
              <li key={idx} onClick={() => handleSelect(opt)}>
                {opt}
              </li>
            ))}
          </ul>,
          //document.body // or 
        //   document.getElementsByClassName("dropdown-container")?.[0]
        // document.getElementById("dropdown-container")
        containerEl
          // we are using absolute, so it go top and take position from there
        )}
    </div>
  );
}
