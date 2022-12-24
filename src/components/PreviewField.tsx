import "../style/previewField.css";
import pizzaData from "../pizza.json";
import InputUiType from "./InputUiType";
import GroupUiType from "./GroupUiType";

const PreviewField = (props: { jsonData: Object[] }) => {
  return (
    <div className="previewField-main">
      {pizzaData.map((item, index) => (
        <div key={`first:${index}`}>
          {item.uiType === "Input" && <InputUiType data={item} />}
          {item.uiType === "Group" && <GroupUiType data={item} />}
        </div>
      ))}
    </div>
  );
};

export default PreviewField;
