import { FormControlLabel, Radio, RadioGroup, Tooltip } from "@mui/material";
import React, { useEffect } from "react";

const RadioUiType = (props: { data: any; setRadioButtonInput: any }) => {
  useEffect(() => {
    props.setRadioButtonInput(props.data.validate.defaultValue);
  }, []);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      props.setRadioButtonInput(e.target.value);
    }
  };

  return (
    <div className="m10 flex align-items-center justify-content-space-between">
      <RadioGroup
        row
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={props.data.validate.defaultValue}
        name={props.data.jsonKey}
        sx={{ margin: "0" }}
      >
        {props.data.validate.options.map((option: any, index: any) => (
          <div>
            <FormControlLabel
              value={option.value}
              control={
                <Radio
                  onChange={handleOnChange}
                  name={props.data.jsonKey}
                  sx={{ margin: "0" }}
                />
              }
              label={option.label}
              name={props.data.jsonKey}
              labelPlacement="end"
              sx={{ margin: "0" }}
            />
            {props.data.validate.required && (
              <span className="input-required">*</span>
            )}
          </div>
        ))}
      </RadioGroup>
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
