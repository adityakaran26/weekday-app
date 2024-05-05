import { Autocomplete, TextField, Chip } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
 
const ModeLists = () => {
  const modes = [
    { name: "Remote", id: "1" },
    { name: "Hybrid", id: "2" },
    { name: "In-office", id: "3" },
  ];
  const [selectedModes, setSelectedMode] = useState([modes[1], modes[2]]);
  const [modeInputValue, setModeInputValue] = useState("");

 
  return (
    <React.Fragment>
      <Autocomplete
        disabled
        className="each-filter"
        multiple
        id="tags-outlined"
        style={{ width: "auto", minWidth: '15%' }}
        options={modes}
        getOptionLabel={(option) => option.name}
        defaultValue={selectedModes}
        filterSelectedOptions
        renderInput={(params) => (
            <TextField
            {...params}
            label="Remote/On-site"
            />
        )}
        />
    </React.Fragment>
  );
};

export default ModeLists;