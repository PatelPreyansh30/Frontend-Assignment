import Tooltip from "@mui/material/Tooltip";
import React, { useEffect } from "react";

const RadioUiType = (props: { data: any; setRadioButtonInput: any }) => {
  useEffect(() => {
    props.setRadioButtonInput(props.data.validate.defaultValue);
  }, []);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setRadioButtonInput(e.target.value);
  };

  return (
    <div className="m10 flex align-items-center justify-content-space-between">
      {props.data.validate.options.map((option: any, index: any) => (
        <div key={`radio: ${index}`} className="flex align-items-center">
          <Tooltip title={props.data.description} arrow>
            <label htmlFor={option.value}>
              {option.label}{" "}
              {props.data.validate.required && (
                <span className="input-required">*</span>
              )}
            </label>
          </Tooltip>
          <input
            type="radio"
            name={props.data.jsonKey}
            id={option.value}
            defaultChecked={props.data.validate.defaultValue === option.value}
            defaultValue={props.data.validate.defaultValue}
            value={option.value}
            onChange={handleOnChange}
          />
        </div>
      ))}
    </div>
  );
};

export default RadioUiType;

// {
//   "sort": 0,
//   "label": "Pizza_type Type",
//   "description": "",
//   "validate": {
//     "required": true,
//     "options": [
//       {
//         "label": "Naples Style Pizza",
//         "value": "naples",
//         "description": "",
//         "icon": ""
//       },
//       {
//         "label": "New York Style Pizza",
//         "value": "newyork",
//         "description": "",
//         "icon": ""
//       }
//     ],
//     "defaultValue": "naples",
//     "immutable": false
//   },
//   "jsonKey": "type",
//   "uiType": "Radio",
//   "icon": "",
//   "level": 1,
//   "placeholder": ""
// },
