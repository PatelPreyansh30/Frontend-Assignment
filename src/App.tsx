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
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: "cursive",
          backgroundColor: "rgb(127, 169, 196, 0.8)",
        },
      },
    },
  },
});

function App() {
  const [jsonData, setJsonData] = useState<string>(``);

  function isValidJson(str: string) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <InputField setJsonData={setJsonData} />

        {jsonData === "" ? (
          <PreviewField jsonData="Please paste JSON data" isJsonData={false} />
        ) : (
          <>
            {isValidJson(jsonData) ? (
              <>
                {Array.isArray(JSON.parse(jsonData)) ? (
                  <PreviewField jsonData={JSON.parse(jsonData)} isJsonData />
                ) : (
                  <PreviewField
                    jsonData="Please enter JSON data which has multiple fields"
                    isJsonData={false}
                  />
                )}
              </>
            ) : (
              <PreviewField
                jsonData="Please enter valid JSON data"
                isJsonData={false}
              />
            )}
          </>
        )}
      </ThemeProvider>
    </div>
  );
}

export default App;
