import InputUiType from "./InputUiType";
import SelectUiType from "./SelectUiType";
import SwitchUiType from "./SwitchUiType";

const IgnoreUiType = (props: {
  data: any;
  radioButtonInput: string;
  setInputData: any;
}) => {
  return (
    <div className="m10">
      {props.data.subParameters.map((subParameter: any, index: any) => (
        <div key={`switch: ${index}`}>
          {subParameter.uiType === "Select" && (
            <SelectUiType
              data={subParameter}
              setInputData={props.setInputData}
            />
          )}
          {subParameter.uiType === "Input" && (
            <InputUiType
              data={subParameter}
              setInputData={props.setInputData}
            />
          )}
          {subParameter.uiType === "Switch" && (
            <SwitchUiType
              data={subParameter}
              setInputData={props.setInputData}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default IgnoreUiType;
