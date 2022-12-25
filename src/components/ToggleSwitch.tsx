import { FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";

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
