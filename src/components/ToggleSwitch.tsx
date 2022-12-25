import { useState } from "react";
import { FormControlLabel, Switch } from "@mui/material";

const ToggleSwitch = () => {
  const [value, setValue] = useState("Show advanced fields");
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setValue("Hide advanced field");
    } else {
      setValue("Show advanced fields");
    }
  };

  return (
    <div>
      <FormControlLabel
        value="start"
        control={<Switch color="primary" onChange={handleOnChange} />}
        label={value}
        labelPlacement="start"
      />
    </div>
  );
};

export default ToggleSwitch;
