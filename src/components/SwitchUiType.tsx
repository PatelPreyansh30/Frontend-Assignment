import Checkbox from "@mui/material/Checkbox";
import Tooltip from "@mui/material/Tooltip";

const SwitchUiType = (props: { data: any; class?: string | "" }) => {
  return (
    <div className="m10">
      <Tooltip title={props.data.description} arrow>
        <label htmlFor={props.data.jsonKey} className={`${props.class}`}>
          {props.data.label}{" "}
          {props.data.validate.required && (
            <span className="input-required">*</span>
          )}
        </label>
      </Tooltip>
      <Checkbox
        defaultChecked={props.data.validate.defaultValue}
        id={props.data.jsonKey}
        name={props.data.jsonKey}
        size="small"
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
