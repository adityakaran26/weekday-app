import { Autocomplete, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
 
const ExpLists = ({filteredExpProp}) => {
  const exps = filteredExpProp;
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