import { Autocomplete, TextField, Chip } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
 
const PayLists = () => {
  const pays = [
    { name: "0L", id: "1" },
    { name: "10L", id: "2" },
    { name: "20L", id: "3" },
    { name: "30L", id: "4" },
    { name: "40L", id: "5" },
    { name: "50L", id: "6" },
    { name: "60L", id: "6" },
    { name: "70L", id: "6" },
  ];
    const [selectedPays, setSelectedPays] = useState([pays[2], pays[3]]);
    const [payInputValue, setPayInputValue] = useState("");
 
  console.log(selectedPays);
 
  return (
    <React.Fragment>
      {/* <Autocomplete
        className="each-filter"
        multiple
        defaultValue={selectedPays}
        style={{ width: "auto", minWidth: '15%' }}
        options={pays || []}

        getOptionLabel={(option) => option.name}
        renderOption={(props, option) => (
          <Box component='li' key={option.id} {...props}>
            {option.name}
          </Box>
        )}
        onChange={(event, newVal) => {
            setSelectedPays(newVal);
        }}
        inputValue={payInputValue}
        onInputChange={(event, newPayInputValue) => {
            setPayInputValue(newPayInputValue);
        }}
        renderInput={(params) => {
          return <TextField label='Min Base Pay' {...params} />;
        }}
      ></Autocomplete> */}
      <Autocomplete
        className="each-filter"
        multiple
        id="tags-outlined"
        style={{ width: "auto", minWidth: '15%' }}
        options={pays}
        getOptionLabel={(option) => option.name}
        defaultValue={selectedPays}
        filterSelectedOptions
        renderInput={(params) => (
            <TextField
            {...params}
            label="Min Base Pay"
            />
        )}
        />
    </React.Fragment>
  );
};

export default PayLists;