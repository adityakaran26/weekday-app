import { Autocomplete, TextField, Chip } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
 
const CompanyLists = ({filteredCompanyProp, onCompanyChange}) => {
  const companies = filteredCompanyProp;
    const [selectedCompaniess, setSelectedCompanies] = useState([]);
    const [locationInputValue, setlocationInputValue] = useState("");

    const handleCompanyChange = (event, value) => {
        onCompanyChange(value);
    };
 
  return (
    <React.Fragment>
      <Autocomplete
        className="each-filter"
        multiple
        id="tags-outlined"
        style={{ width: "auto", minWidth: '15%' }}
        options={companies}
        getOptionLabel={(option) => option.name}
        defaultValue={selectedCompaniess}
        filterSelectedOptions
        onChange={handleCompanyChange}
        renderInput={(params) => (
            <TextField
            {...params}
            label="Companies"
            />
        )}
        />
    </React.Fragment>
  );
};

export default CompanyLists;