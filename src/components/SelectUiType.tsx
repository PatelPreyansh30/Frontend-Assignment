const SelectUiType = (props: { data: any }) => {
  return (
    <div>
      <label htmlFor="">
        {props.data.label} {props.data.validate.required && <span>*</span>}
      </label>
      <select name="" id="" defaultValue={props.data.defaultValue}>
        {props.data.validate.options.map((option: any, index: any) => (
          <option value={option.label}>{option.label}</option>
        ))}
      </select>
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
