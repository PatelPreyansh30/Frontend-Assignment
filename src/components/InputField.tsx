import "../style/inputField.css";

const InputField = (props: {handleOnChange: any; jsonData: string}) => {
  return (
    <div className="inputField-main">
      <textarea
        value={props.jsonData}
        onChange={props.handleOnChange}
        name="jsonData"
        id=""
        placeholder="Paste your JSON code here"
        style={{ width: "100%", height: "100%", boxSizing: "border-box" }}
      ></textarea>
    </div>
  );
};

export default InputField;
