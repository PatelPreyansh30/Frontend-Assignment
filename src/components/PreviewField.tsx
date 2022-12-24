import { useState } from "react";
import "../style/previewField.css";

const PreviewField = (props: { jsonData: Object[] }) => {
  const [data, setData] = useState<any[]>([]);
  return <div className="previewField-main">{data}</div>;
};

export default PreviewField;
