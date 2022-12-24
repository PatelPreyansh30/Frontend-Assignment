import "../style/previewField.css";
import pizzaData from "../pizza.json";
// import pizzaData from "../pasta.json";
import InputUiType from "./InputUiType";
import GroupUiType from "./GroupUiType";
import SelectUiType from "./SelectUiType";
import SwitchUiType from "./SwitchUiType";

const PreviewField = (props: { jsonData: Object[] }) => {

  return (
    <div className="previewField-main">
      {pizzaData.map((item, index) => (
        <div key={`preview: ${index}`} className="gray-background">
          {item.uiType === "Input" && <InputUiType data={item} class='h5-font' />}
          {item.uiType === "Group" && <GroupUiType data={item} class='h5-font' />}
          {item.uiType === "Select" && <SelectUiType data={item} class='h5-font' />}
          {item.uiType === "Switch" && <SwitchUiType data={item} class='h5-font' />}
        </div>
      ))}
    </div>
  );
};

export default PreviewField;
