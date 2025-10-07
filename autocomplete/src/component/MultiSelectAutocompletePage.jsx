import React from "react";
import MultiSelectAutocomplete from "./MultiSelectAutocomplete";

export default function MultiSelectAutocompletePage() {
  // Example with 300+ values
  const options = Array.from({ length: 350 }, (_, i) => `Option ${i + 1}`);

  return (
    <div style={{ padding: "40px" }}>
      <h2>Multi-Select Autocomplete</h2>
      <MultiSelectAutocomplete options={options} />
    </div>
  );
}
