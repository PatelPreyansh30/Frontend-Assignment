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
  typography: {
    fontFamily: "Poppins",
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

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <InputField setJsonData={setJsonData} />

        {jsonData === "" ? (
          <PreviewField jsonData="Please Paste JSON Data" isJsonData={false} />
        ) : (
          <>
            {jsonData.split("")[0] !== "[" && jsonData.split("")[0] !== "{" ? (
              <PreviewField
                jsonData="Please Enter Valid JSON Data"
                isJsonData={false}
              />
            ) : (
              <>
                {jsonData.split("")[0] === "{" ? (
                  <PreviewField jsonData="{} JSON Data" isJsonData={false} />
                ) : (
                  <PreviewField jsonData={JSON.parse(jsonData)} isJsonData />
                )}
              </>
            )}
          </>
        )}
      </ThemeProvider>
    </div>
  );
}

export default App;
