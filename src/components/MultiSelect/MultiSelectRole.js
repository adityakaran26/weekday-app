import { Autocomplete, TextField, Chip } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
 
const RoleLists = () => {
  const roles = [
    { name: "Frontend", id: "1" },
    { name: "Backend", id: "2" },
    { name: "React", id: "3" },
    { name: "Vue", id: "4" },
    { name: "Angular", id: "5" },
    { name: "Devops", id: "6" },
  ];
    const [selectedRoles, setSelectedRoles] = useState([roles[2], roles[3]]);
    const [roleInputValue, setRoleInputValue] = useState("");
 
  console.log(selectedRoles);
 
  return (
    <React.Fragment>
      {/* <Autocomplete
        className="each-filter"
        multiple
        defaultValue={selectedRoles}
        style={{ width: "auto", minWidth: '15%' }}
        options={roles || []}

        getOptionLabel={(option) => option.name}
        renderOption={(props, option) => (
          <Box component='li' key={option.id} {...props}>
            {option.name}
          </Box>
        )}
        onChange={(event, newVal) => {
            setSelectedRoles(newVal);
        }}
        inputValue={roleInputValue}
        onInputChange={(event, newRoleInputValue) => {
            setRoleInputValue(newRoleInputValue);
        }}
        renderInput={(params) => {
          return <TextField label='Roles' {...params} />;
        }}
      ></Autocomplete> */}

    <Autocomplete
        className="each-filter"
        multiple
        id="tags-outlined"
        style={{ width: "auto", minWidth: '15%' }}
        options={roles}
        getOptionLabel={(option) => option.name}
        defaultValue={selectedRoles}
        filterSelectedOptions
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