import "../style/inputField.css";
import React from "react";

const InputField = (props: { setJsonData: any }) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const file = e.target.files;
    if (file === null) {
      return;
    }
    reader.readAsText(file[0]);
    reader.onload = () => {
      if (reader.result) {
        props.setJsonData(reader.result);
      }
    };
    reader.onerror = () => {
      console.log("File error occured", reader.error);
    };
  };

  const handleOnChangeForTextArea = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    props.setJsonData(e.target.value);
  };
  
  return (
    <div className="inputField-main">
      <input
        name=""
        id=""
        className=""
        accept=".json"
        type="file"
        placeholder="Select JSON File"
        onChange={handleOnChange}
      />
      <h5>OR</h5>
      <textarea
        onChange={handleOnChangeForTextArea}
        placeholder="Paste your copied JSON"
      ></textarea>
    </div>
  );
};

export default InputField;
