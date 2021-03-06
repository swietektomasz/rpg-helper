import React from "react";
import PropTypes from "prop-types";

import "./input-field.css";

export function InputField({ field: { name, onChange, value }, label, type }) {
  return (
    <label className="input-label">
      {label}
      <input
        className="input-field"
        name={name}
        onChange={onChange}
        type={type || "text"}
        value={value}
      />
    </label>
  );
}

InputField.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
  }),
  label: PropTypes.string,
  type: PropTypes.string,
};
