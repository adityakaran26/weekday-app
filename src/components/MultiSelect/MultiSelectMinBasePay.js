import { Autocomplete, TextField, Chip } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
 
const PayLists = ({filteredBasePayProp, onPayChange}) => {
  const pays = filteredBasePayProp;
    const [selectedPays, setSelectedPays] = useState([]);
    const [payInputValue, setPayInputValue] = useState("");
 
    const handlePayChange = (event, value) => {
      onPayChange(value);
    };
 
  return (
    <React.Fragment>
      <Autocomplete
        className="each-filter"
        multiple
        id="tags-outlined"
        style={{ width: "auto", minWidth: '15%' }}
        options={pays}
        getOptionLabel={(option) => option.name}
        defaultValue={selectedPays}
        filterSelectedOptions
        onChange={handlePayChange}
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