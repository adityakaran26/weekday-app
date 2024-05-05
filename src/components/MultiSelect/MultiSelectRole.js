import { Autocomplete, TextField, Chip } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
 
const RoleLists = ({filterRoleProps, onRoleChange}) => {
  const roles = filterRoleProps;
    const [selectedRoles, setSelectedRoles] = useState([]);
    const [roleInputValue, setRoleInputValue] = useState("");
    
    const handleRoleChange = (event, value) => {
      onRoleChange(value);
    };
 
  return (
    <React.Fragment>
    <Autocomplete
        className="each-filter"
        multiple
        id="tags-outlined"
        style={{ width: "auto", minWidth: '15%' }}
        options={roles}
        getOptionLabel={(option) => option.name}
        defaultValue={selectedRoles}
        filterSelectedOptions
        onChange={handleRoleChange}
        renderInput={(params) => (
            <TextField
            {...params}
            label="Roles"
            />
        )}
        />
    </React.Fragment>
  );
};

export default RoleLists;