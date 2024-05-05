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
 
  console.log(selectedModes);
 
  return (
    <React.Fragment>
      {/* <Autocomplete
        className="each-filter"
        multiple
        defaultValue={selectedModes}
        style={{ width: "auto", minWidth: '15%' }}
        options={modes || []}

        getOptionLabel={(option) => option.name}
        renderOption={(props, option) => (
          <Box component='li' key={option.id} {...props}>
            {option.name}
          </Box>
        )}
        onChange={(event, newVal) => {
            setSelectedMode(newVal);
        }}
        inputValue={modeInputValue}
        onInputChange={(event, newModeInputValue) => {
            setModeInputValue(newModeInputValue);
        }}
        renderInput={(params) => {
          return <TextField label='Remote/On-site' {...params} />;
        }}
      ></Autocomplete> */}
      <Autocomplete
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