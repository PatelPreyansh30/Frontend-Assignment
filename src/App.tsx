import React, { useState } from "react";
import "./App.css";
import "./style/utility.css";
import PreviewField from "./components/PreviewField";
import InputField from "./components/InputField";

function App() {
  const [jsonData, setJsonData] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setJsonData(value);
  };

  return (
    <div className="app">
      <InputField handleOnChange={handleOnChange} jsonData={jsonData} />
      <PreviewField jsonData={[jsonData]} />
    </div>
  );
}

export default App;
