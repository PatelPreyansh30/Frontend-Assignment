import "../style/previewField.css";
import { Button } from "@mui/material";
import InputUiType from "./InputUiType";
import GroupUiType from "./GroupUiType";
import SelectUiType from "./SelectUiType";
import SwitchUiType from "./SwitchUiType";
import ToggleSwitch from "./ToggleSwitch";

const PreviewField = (props: { jsonData: any; isJsonData: boolean }) => {
  return (
    <>
      {props.isJsonData ? (
        <div className="previewField-main">
          {props.jsonData.map((item: any, index: any) => (
            <div key={`preview: ${index}`} className="gray-background">
              {item.uiType === "Input" && (
                <InputUiType data={item} class="h5-font" />
              )}
              {item.uiType === "Group" && (
                <GroupUiType data={item} class="h5-font" />
              )}
              {item.uiType === "Select" && (
                <SelectUiType data={item} class="h5-font" />
              )}
              {item.uiType === "Switch" && (
                <SwitchUiType data={item} class="h5-font" />
              )}
            </div>
          ))}
          <div
            className="flex justify-content-space-between align-items-center"
            style={{ padding: "0 10px" }}
          >
            <ToggleSwitch />
            <div className="flex justify-content-center align-items-center">
              <Button variant="outlined" sx={{ marginRight: "5px" }}>
                Cancel
              </Button>
              <Button variant="contained" sx={{ marginLeft: "5px" }}>
                Submit
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <h3>{props.jsonData}</h3>
      )}
    </>
  );
};

export default PreviewField;
