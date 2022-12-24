const InputUiType = (props: { data: any; class?: string | "" }) => {
  return (
    <div className="width-100 flex align-items-center justify-content-space-between">
      <label htmlFor={props.data.jsonKey} className={`${props.class}`}>
        {props.data.label}{" "}
        {props.data.validate.required && (
          <span className="input-required">*</span>
        )}
      </label>
      <input
        name={props.data.jsonKey}
        id={props.data.jsonKey}
        placeholder={props.data.placeholder}
        type="text"
        className="preview-input-field"
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
