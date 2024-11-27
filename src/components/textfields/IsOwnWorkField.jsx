import React from "react";
import { Typography, Grid, FormControl, Select, MenuItem } from "@mui/material";

const IsOwnWorkField = ({ value, onChange }) => {
  return (
    <Grid item xs={12}>
      <Typography variant="subtitle1" sx={{ color: "#001f5b" }} gutterBottom>
        Is This Your Own Work?
      </Typography>
      <FormControl fullWidth>
        <Select
          value={value ? "yes" : "no"}
          onChange={(e) => onChange(e.target.value === "yes")}
        >
          <MenuItem value="yes">Yes</MenuItem>
          <MenuItem value="no">No</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  );
};

export default IsOwnWorkField;
