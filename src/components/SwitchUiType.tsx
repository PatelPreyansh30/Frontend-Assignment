import { Checkbox, Chip, Tooltip } from "@mui/material";

const SwitchUiType = (props: {
  data: any;
  class?: string | "";
  setInputData: any;
}) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    props.setInputData((prev: any) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="m10">
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
      <Checkbox
        defaultChecked={props.data.validate.defaultValue}
        id={props.data.jsonKey}
        name={props.data.jsonKey}
        size="small"
        onChange={handleOnChange}
      />
    </div>
  );
};

export default SwitchUiType;

//         {
//           "sort": 6,
//           "label": "Include_seasonings",
//           "description": "",
//           "validate": {
//             "required": true,
//             "defaultValue": true,
//             "immutable": false
//           },
//           "jsonKey": "include_seasonings",
//           "uiType": "Switch",
//           "icon": "",
//           "level": 1,
//           "placeholder": ""
//         },
