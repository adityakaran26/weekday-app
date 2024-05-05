import { Autocomplete, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
 
const ExpLists = ({filteredExpProp, onMinExpChange}) => {
  const exps = filteredExpProp;
  const [selectedExp, setSelectedExp] = useState([]);
  const [expInputValue, setExpInputValue] = useState("");
 
  const handleMinExpChange = (event, value) => {
    onMinExpChange(value);
  };
 
  return (
    <React.Fragment>
      {/* <Autocomplete
        className="each-filter"
        defaultValue={selectedExp}
        style={{ width: "auto", minWidth: '15%' }}
        options={exps}
        getOptionLabel={(option) => option.name}
        // onChange={(event, newVal) => {
        //     // setSelectedExp(newVal);
        // }}
        onChange={handleMinExpChange}
        renderInput={(params) => {
          return <TextField label='Experience' {...params} />;
        }}
      ></Autocomplete> */}

      <Autocomplete
        className="each-filter"
        multiple
        id="tags-outlined"
        style={{ width: "auto", minWidth: '15%' }}
        options={exps}
        getOptionLabel={(option) => option.name}
        defaultValue={selectedExp}
        filterSelectedOptions
        onChange={handleMinExpChange}
        renderInput={(params) => (
            <TextField
            {...params}
            label="Locations"
            />
        )}
        />
    </React.Fragment>
  );
};

export default ExpLists;