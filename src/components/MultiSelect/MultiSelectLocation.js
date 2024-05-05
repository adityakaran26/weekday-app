import { Autocomplete, TextField, Chip } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
 
const LocationLists = ({filteredLocationProp, onLocationChange}) => {
  const locations = filteredLocationProp;
    const [selectedlocations, setSelectedLocations] = useState([]);
    const [locationInputValue, setlocationInputValue] = useState("");
 
    const handleLocationChange = (event, value) => {
      onLocationChange(value);
    };
 
  return (
    <React.Fragment>
      <Autocomplete
        className="each-filter"
        multiple
        id="tags-outlined"
        style={{ width: "auto", minWidth: '15%' }}
        options={locations}
        getOptionLabel={(option) => option.name}
        defaultValue={selectedlocations}
        filterSelectedOptions
        onChange={handleLocationChange}
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