const SwitchUiType = (props: { data: any; class?: string | "" }) => {
  return (
    <div>
      <label htmlFor={props.data.jsonKey} className={`${props.class}`}>
        {props.data.label}{" "}
        {props.data.validate.required && (
          <span className="input-required">*</span>
        )}
      </label>
      <input
        type="checkbox"
        name={props.data.jsonKey}
        id={props.data.jsonKey}
        defaultChecked={props.data.validate.defaultValue}
        placeholder={props.data.placeholder}
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
