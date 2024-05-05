import { Autocomplete, TextField, Chip } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
 
const LocationLists = () => {
  const locations = [
    { name: "Bangalore", id: "1" },
    { name: "Pune", id: "2" },
    { name: "Delhi", id: "3" },
    { name: "Mumbai", id: "4" },
    { name: "Kolkatta", id: "5" },
  ];
    const [selectedlocations, setSelectedLocations] = useState([locations[2], locations[3]]);
    const [locationInputValue, setlocationInputValue] = useState("");
 
  console.log(selectedlocations);
 
  return (
    <React.Fragment>
      {/* <Autocomplete
        className="each-filter"
        multiple
        defaultValue={selectedlocations}
        style={{ width: "auto", minWidth: '15%' }}
        options={locations || []}

        getOptionLabel={(option) => option.name}
        renderOption={(props, option) => (
          <Box component='li' key={option.id} {...props}>
            {option.name}
          </Box>
        )}
        onChange={(event, newVal) => {
            setSelectedLocations(newVal);
        }}
        inputValue={locationInputValue}
        onInputChange={(event, newLocationInputValue) => {
            setlocationInputValue(newLocationInputValue);
        }}
        renderInput={(params) => {
          return <TextField label='Locations' {...params} />;
        }}
      ></Autocomplete> */}
      <Autocomplete
        className="each-filter"
        multiple
        id="tags-outlined"
        style={{ width: "auto", minWidth: '15%' }}
        options={locations}
        getOptionLabel={(option) => option.name}
        defaultValue={selectedlocations}
        filterSelectedOptions
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

export default LocationLists;