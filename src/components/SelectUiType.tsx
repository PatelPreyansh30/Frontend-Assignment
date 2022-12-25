import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Tooltip,
} from "@mui/material";

const SelectUiType = (props: { data: any; class?: string | "" }) => {
  return (
    <div className="width-100 flex align-items-center justify-content-space-between m10">
      <Tooltip title={props.data.description} arrow>
        <label htmlFor={props.data.jsonKey} className={`${props.class}`}>
          {props.data.label}{" "}
          {props.data.validate.required && (
            <span className="input-required">*</span>
          )}
        </label>
      </Tooltip>
      <FormControl size="small">
        <InputLabel id="demo-simple-select-label">
          {props.data.label}
        </InputLabel>
        <Select
          name={props.data.jsonKey}
          id={props.data.jsonKey}
          defaultValue={props.data.validate.defaultValue}
          labelId="demo-simple-select-label"
          label={props.data.label}
        >
          {props.data.validate.options.map((option: any, index: any) => (
            <MenuItem key={`options: ${index}`} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectUiType;

//   "sort": 1,
//   "label": "Sauce",
//   "description": "",
//   "validate": {
//     "required": true,
//     "options": [
//       {
//         "label": "Red",
//         "value": "Red",
//         "description": "",
//         "icon": ""
//       },
//       {
//         "label": "White",
//         "value": "White",
//         "description": "",
//         "icon": ""
//       },
//       {
//         "label": "Pesto",
//         "value": "Pesto",
//         "description": "",
//         "icon": ""
//       }
//     ],
//     "defaultValue": "Red",
//     "immutable": false
//   },
//   "jsonKey": "sauce",
//   "uiType": "Select",
//   "icon": "",
//   "level": 1,
//   "placeholder": ""
// },
