import { useState } from "react";
import { FormControlLabel, Switch } from "@mui/material";

const ToggleSwitch = () => {
  const [value, setValue] = useState("Show advanced fields");
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setValue("Hide advanced fields");
    } else {
      setValue("Show advanced fields");
    }
  };

  return (
    <div className="m10">
      <FormControlLabel
        value="start"
        control={<Switch color="primary" onChange={handleOnChange} />}
        label={value}
        labelPlacement="start"
        sx={{ margin: "0" }}
      />
    </div>
  );
};

export default ToggleSwitch;
