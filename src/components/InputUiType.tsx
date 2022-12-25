import { Chip, TextField, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";

const InputUiType = (props: {
  data: any;
  class?: string | "";
  setInputData: any;
}) => {
  const [inputField, setInputField] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputField(value);
    props.setInputData((prev: any) => ({ ...prev, [name]: inputField }));
  };

  return (
    <div className="width-100 flex align-items-center justify-content-space-between flex-wrap m10">
      <label htmlFor={props.data.jsonKey} className={`${props.class}`}>
        {props.data.label}{" "}
        {props.data.validate.required && (
          <span className="input-required">*</span>
        )}
        {props.data.description && (
          <Tooltip title={props.data.description} arrow>
            <Chip label="i" size="small" />
          </Tooltip>
        )}
      </label>
      <TextField
        id={props.data.jsonKey}
        name={props.data.jsonKey}
        size="small"
        label={props.data.placeholder}
        variant="outlined"
        value={inputField}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default InputUiType;

// {
//   "sort": 1,
//   "label": "Pizza Name",
//   "description": "",
//   "validate": {
//     "required": true,
//     "immutable": false
//   },
//   "jsonKey": "name",
//   "uiType": "Input",
//   "icon": "",
//   "level": 0,
//   "placeholder": "Enter Pizza Name"
// },
