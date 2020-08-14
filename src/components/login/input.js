import React from "react";
export default function Input({
  labelfor,
  label,
  type,
  id,
  placeholder,
  required,
  autofocus,
}) {
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
      />
    </div>
  );
}
