import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import "./autocomplete.css";

export default function AutocompletePortal() {
  const [inputValue, setInputValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedValues, setSelectedValues] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);

  const options = ["Apple", "Banana", "Cherry", "Dragonfruit", "Mango", "Papaya"];
  const filteredOptions = options.filter((opt) =>
    opt.toLowerCase().includes(inputValue.toLowerCase())
  );

  const inputRef = useRef(null);
  const [dropdownStyle, setDropdownStyle] = useState({});

  // Update dropdown position relative to input
  let screenWidth = window.innerWidth
  useEffect(() => {
    if (showDropdown && inputRef.current) {
      const rect = inputRef.current.getBoundingClientRect();
      setDropdownStyle({
        position: "absolute",
        top: rect.bottom + window.scrollY + 4 + "px", // just below input
        left: rect.left + window.scrollX + "px",
        width: rect.width + "px",
      });
    }
  }, [showDropdown, inputValue, width]);

    useEffect(() => {
    let timer;
    const handleResize = () => {
        clearTimeout(timer);
        timer = setTimeout(() => setWidth(window.innerWidth), 200);
    };

    window.addEventListener("resize", handleResize);
    return () =>{ 
        // clearTimeout(timer);
        window.removeEventListener("resize", handleResize)};
    }, []);

  // Click outside closes dropdown
  useEffect(() => {
    const handleClick = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleChange = (e) => setInputValue(e.target.value);

  const handleSelect = (opt) => {
    setSelectedValues((prev) =>
      prev.includes(opt) ? prev.filter((v) => v !== opt) : [...prev, opt]
    );
  };

  return (
    <div className="autocomplete-portal">
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={handleChange}
        onFocus={() => setShowDropdown(true)}
        placeholder={
          selectedValues.length
            ? `${selectedValues.length} items selected`
            : "Type to search..."
        }
        className="autocomplete-input"
      />

      {/* ✅ Dropdown in portal */}
      {showDropdown &&
        filteredOptions.length > 0 &&
        ReactDOM.createPortal(
          <ul className="autocomplete-list" style={dropdownStyle}>
            {filteredOptions.map((opt, idx) => (
              <li
                key={idx}
                onClick={() => handleSelect(opt)}
                className="autocomplete-item"
              >
                <input
                  type="checkbox"
                  checked={selectedValues.includes(opt)}
                  readOnly
                />
                {opt}
              </li>
            ))}
          </ul>,
          document.body // portal target
        )}
    </div>
  );
}
