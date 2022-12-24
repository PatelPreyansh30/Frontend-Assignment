import React from "react";
import SelectUiType from "./SelectUiType";
import SwitchUiType from "./SwitchUiType";

const GroupUiType = (props: { data: any }) => {
  return (
    <div>
      <label htmlFor="">
        {props.data.label} {props.data.validate.required && <span>*</span>}
      </label>
      {props.data.subParameters.map((subParameter: any, index: any) => (
        <>
          {subParameter.uiType === "Select" && (
            <SelectUiType data={subParameter} />
          )}
          {subParameter.uiType === "Switch" && (
            <SwitchUiType data={subParameter} />
          )}
          <p>Subparameter Label: {subParameter.label}</p>
          {subParameter.conditions?.map((condition: any) => (
            <p>Subparameter conditions: {condition.value}</p>
          ))}
          {subParameter.subParameters?.map((secondSubParam: any) => (
            <p>Subparameter Subparameter: {secondSubParam.label}</p>
          ))}
        </>
      ))}
      {/* {props.data.subParameters.map((subParameter: any, index: any) => (
      ))} */}
    </div>
  );
};

export default GroupUiType;
