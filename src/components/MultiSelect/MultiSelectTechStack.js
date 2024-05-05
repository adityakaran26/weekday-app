import { Autocomplete, TextField, Chip } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
 
const StackLists = () => {
  const stacks = [
    { name: "Javascript", id: "1" },
    { name: "C++", id: "2" },
    { name: "Java", id: "3" },
    { name: "Python", id: "4" },
    { name: "OOPS", id: "5" },
  ];
    const [selectedStacks, setSelectedStacks] = useState([stacks[2], stacks[3]]);
    const [stackInputValue, setStackInputValue] = useState("");
 
  console.log(selectedStacks);
 
  return (
    <React.Fragment>
      {/* <Autocomplete
        className="each-filter"
        multiple
        defaultValue={selectedStacks}
        style={{ width: "auto", minWidth: '15%' }}
        options={stacks || []}

        getOptionLabel={(option) => option.name}
        renderOption={(props, option) => (
          <Box component='li' key={option.id} {...props}>
            {option.name}
          </Box>
        )}
        onChange={(event, newVal) => {
            setSelectedStacks(newVal);
        }}
        inputValue={stackInputValue}
        onInputChange={(event, newStackInputValue) => {
            setStackInputValue(newStackInputValue);
        }}
        renderInput={(params) => {
          return <TextField label='Tech Stack' {...params} />;
        }}
      ></Autocomplete> */}
      <Autocomplete
        className="each-filter"
        multiple
        id="tags-outlined"
        style={{ width: "auto", minWidth: '15%' }}
        options={stacks}
        getOptionLabel={(option) => option.name}
        defaultValue={selectedStacks}
        filterSelectedOptions
        renderInput={(params) => (
            <TextField
            {...params}
            label="Tech Stack"
            />
        )}
        />
    </React.Fragment>
  );
};

export default StackLists;