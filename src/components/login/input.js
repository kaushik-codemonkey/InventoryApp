import React from "react";
export default function Input({
  labelfor,
  label,
  type,
  id,
  placeholder,
  required,
  autofocus,
  name,
  setCred,
}) {
  function onChange(e) {
    const { name, value } = e.target;
    setCred((prev) => ({ ...prev, [name]: value }));
  }
  return (
    <div>
      <label for={labelfor} class="sr-only">
        {label}
      </label>
      <input
        type={type}
        id={id}
        class="form-control"
        placeholder={placeholder}
        required={required}
        autofocus={autofocus}
        name={name}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
}
