import "../style/previewField.css";
import pizzaData from "../pizza.json";
// import pizzaData from "../pasta.json";
import InputUiType from "./InputUiType";
import GroupUiType from "./GroupUiType";
import SelectUiType from "./SelectUiType";

const PreviewField = (props: { jsonData: Object[] }) => {
  return (
    <div className="previewField-main">
      {pizzaData.map((item, index) => (
        <div
          key={`preview: ${index}`}
          className="gray-background"
        >
          {item.uiType === "Input" && <InputUiType data={item} />}
          {item.uiType === "Group" && <GroupUiType data={item} />}
          {item.uiType === "Select" && <SelectUiType data={item} />}
        </div>
      ))}
    </div>
  );
};

export default PreviewField;
