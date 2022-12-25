import React, { useState } from "react";
import "./App.css";
import "./style/utility.css";
import PreviewField from "./components/PreviewField";
import InputField from "./components/InputField";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "300px",
          backgroundColor: "white",
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: "300px",
          backgroundColor: "white",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          margin: "15px 0",
        },
      },
    },
  },
});

function App() {
  const [jsonData, setJsonData] = useState<string>(``);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setJsonData(value);
  };

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <InputField handleOnChange={handleOnChange} setJsonData={setJsonData} />
        {jsonData !== "" ? (
          <PreviewField jsonData={JSON.parse(jsonData)} isJsonData />
        ) : (
          <PreviewField jsonData="Please Paste JSON Data" isJsonData={false} />
        )}
      </ThemeProvider>
    </div>
  );
}

export default App;
