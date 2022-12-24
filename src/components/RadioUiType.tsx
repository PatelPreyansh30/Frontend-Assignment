const RadioUiType = (props: { data: any }) => {
  return (
    <div>
      {props.data.validate.options.map((option: any, index: any) => (
        <div>
          <label htmlFor={option.value}>{option.label}</label>
          <input type="radio" name={props.data.jsonKey} id={option.value} />
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
