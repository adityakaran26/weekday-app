import { Autocomplete, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
 
const ExpLists = () => {
  const exps = [
    { name: "1", id: "0" },
    { name: "2", id: "1" },
    { name: "3", id: "2" },
    { name: "4", id: "3" },
    { name: "5", id: "4" },
    { name: "6", id: "5" },
    { name: "7", id: "6" },
  ];
  const [selectedExp, setSelectedExp] = useState(exps[0]);
  const [expInputValue, setExpInputValue] = useState("");
 
  console.log(selectedExp);
 
  return (
    <React.Fragment>
      <Autocomplete
        className="each-filter"
        defaultValue={selectedExp}
        style={{ width: "auto", minWidth: '15%' }}
        options={exps}
        getOptionLabel={(option) => option.name}
        renderOption={(props, option) => (
          <Box component='li' {...props}>
            {option.name}
          </Box>
        )}
        onChange={(event, newVal) => {
            setSelectedExp(newVal);
        }}
        inputValue={expInputValue}
        onInputChange={(event, newExpInputValue) => {
            setExpInputValue(newExpInputValue);
        }}
        renderInput={(params) => {
          return <TextField label='Experience' {...params} />;
        }}
      ></Autocomplete>
    </React.Fragment>
  );
};

export default ExpLists;