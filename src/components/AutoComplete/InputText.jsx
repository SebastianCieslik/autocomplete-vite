import React, { useState } from "react";

import { StyledInputText } from "./AutoComplete.styles.js";

export default function InputText({
  onChange,
  onSubmit,
  defaultValue = "",
  name,
}) {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e) => {
    const val = e.target.value;
    setValue(val);
    onChange(val);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSubmit(value);
    }
  };

  return (
    <StyledInputText
      type="text"
      name={name}
      value={value}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onKeyPress={handleKeyPress}
    />
  );
}
