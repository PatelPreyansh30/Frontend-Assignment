import Checkbox from "@mui/material/Checkbox";

const SwitchUiType = (props: { data: any; class?: string | "" }) => {
  return (
    <div className="m10">
      <label htmlFor={props.data.jsonKey} className={`${props.class}`}>
        {props.data.label}{" "}
        {props.data.validate.required && (
          <span className="input-required">*</span>
        )}
      </label>
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
