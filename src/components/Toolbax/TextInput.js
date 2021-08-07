import React from "react";

const TextInput = ({ name, label, onChange, placeHolder, value }) => {
  let wrapperClass = "form-group";

  return (
    <div className={wrapperClass}>
      <label htmlFom={name}>{label}</label>
      <div className="field">
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeHolder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default TextInput;
