import { TextField } from "@mui/material";

const InputUiType = (props: { data: any; class?: string | "" }) => {
  return (
    <div className="width-100 flex align-items-center justify-content-space-between">
      <label htmlFor={props.data.jsonKey} className={`${props.class}`}>
        {props.data.label}{" "}
        {props.data.validate.required && (
          <span className="input-required">*</span>
        )}
      </label>
      <TextField
        id={props.data.jsonKey}
        name={props.data.jsonKey}
        size="small"
        label={props.data.placeholder}
        variant="outlined"
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
