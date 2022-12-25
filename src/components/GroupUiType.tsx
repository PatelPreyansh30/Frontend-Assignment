import { useState } from "react";
import { Divider, Tooltip } from "@mui/material";
import IgnoreUiType from "./IgnoreUiType";
import RadioUiType from "./RadioUiType";
import SelectUiType from "./SelectUiType";
import SwitchUiType from "./SwitchUiType";

const GroupUiType = (props: { data: any; class?: string | "" }) => {
  const [radioButtonInput, setRadioButtonInput] = useState("");

  return (
    <div>
      <Tooltip title={props.data.description} arrow>
        <p className={`${props.class}`}>
          {props.data.label}{" "}
          {props.data.validate.required && (
            <span className="input-required">*</span>
          )}
        </p>
      </Tooltip>
      <Divider />
      {props.data.subParameters.map((subParameter: any, index: any) => (
        <div key={`group: ${index}`}>
          {subParameter.uiType === "Select" && (
            <SelectUiType data={subParameter} />
          )}
          {subParameter.uiType === "Switch" && (
            <SwitchUiType data={subParameter} />
          )}
          {subParameter.uiType === "Radio" && (
            <RadioUiType
              data={subParameter}
              setRadioButtonInput={setRadioButtonInput}
            />
          )}
          {subParameter.conditions?.map((condition: any) => (
            <div key={`radioCondition: ${index}`}>
              {radioButtonInput === condition.value && (
                <IgnoreUiType
                  data={subParameter}
                  radioButtonInput={radioButtonInput}
                />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GroupUiType;
