import React, { useState, useRef, useEffect } from "react";
import "./MultiSelectAutocomplete.css";

const MultiSelectAutocomplete = ({ options }) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options?.length ? options : []); // at initial it will show entire list
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedValues, setSelectedValues] = useState([]);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    let filtered;
    if (value.trim() === "") {
        // Show all options when input is empty
        filtered = options.filter((opt) => !selectedValues.includes(opt));
    } else {
        filtered = options.filter(
        (opt) =>
            opt.toLowerCase().includes(value.toLowerCase()) &&
            !selectedValues.includes(opt)
        );
    }

    setFilteredOptions(filtered.slice(0, 50)); // limit to 50 for performance
    setShowDropdown(true);
  };


  const handleSelect = (value) => {
    if (!selectedValues.includes(value)) {
      setSelectedValues([...selectedValues, value]);
    }
    // setInputValue("");
    // setShowDropdown(true);
  };

  const handleRemove = (value) => {
    setSelectedValues(selectedValues.filter((item) => item !== value));
  };

  return (
    <>
        {selectedValues.map((val, idx) => (
            <span className="tag" key={idx}>
              {val}
              <button
                type="button"
                className="remove-btn"
                onClick={() => handleRemove(val)}
              >
                ×
              </button>
            </span>
          ))}

        <div className="autocomplete-multi" ref={wrapperRef}>
            <div className="autocomplete-input-wrapper">
                <div className="autocomplete-tags">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleChange}
                        onFocus={() =>  setShowDropdown(true)} //inputValue &&
                        placeholder={selectedValues?.length ? `${selectedValues.length} items selected` : "Type to search.."}//"Type to search..."
                        className="autocomplete-input"
                    />
                </div>
                <span className="edit-icon">✎</span>
            </div>

            {showDropdown && filteredOptions.length > 0 && (
                <ul className="autocomplete-list"
                    ref={null}
                >
                {filteredOptions.map((opt, idx) => (
                    <li
                    key={idx}
                    onClick={() => handleSelect(opt)}
                    className="autocomplete-item"
                    >
                    <input type="checkbox" checked={selectedValues?.includes(opt)}/>{opt}
                    </li>
                ))}
                </ul>
            )}
        </div>
    </>
  );
};

export default MultiSelectAutocomplete;
