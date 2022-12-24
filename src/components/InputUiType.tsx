const InputUiType = (props: { data: any }) => {
  return (
    <div>
      <label htmlFor={props.data.jsonKey}>
        {props.data.label} {props.data.validate.required && <span>*</span>}
      </label>
      <input
        type="text"
        name={props.data.jsonKey}
        id={props.data.jsonKey}
        placeholder={props.data.placeholder}
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
