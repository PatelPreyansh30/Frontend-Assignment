import React, { useEffect } from "react";
import {
  Chip,
  FormControlLabel,
  Radio,
  RadioGroup,
  Tooltip,
} from "@mui/material";

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
    <div className="m10 flex align-items-center justify-content-space-between flex-wrap">
      <RadioGroup
        row
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={props.data.validate.defaultValue}
        name={props.data.jsonKey}
        sx={{ margin: "0" }}
      >
        {props.data.validate.options.map((option: any, index: any) => (
          <div key={`radio: ${index}`}>
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
            {props.data.description && (
              <Tooltip title={props.data.description} arrow>
                <Chip label="i" size="small" />
              </Tooltip>
            )}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default RadioUiType;
