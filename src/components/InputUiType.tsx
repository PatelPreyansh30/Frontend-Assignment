const InputUiType = (props: { data: any }) => {
  return (
    <div>
      <label htmlFor="">
        {props.data.label} {props.data.validate.required && <span>*</span>}
      </label>
      <input type="text" placeholder={props.data.placeholder} />
    </div>
  );
};

export default InputUiType;
