import React from "react";
import { Typography, Grid, FormControl, Select, MenuItem, InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { logoPrimaryColor } from "../../constant/Color";

const VisibilityField = ({ value, onChange }) => {
  return (
    <Grid item xs={12}>
      <Typography variant="subtitle1" sx={{ color: logoPrimaryColor }} gutterBottom>
        Visibility
      </Typography>
      <FormControl fullWidth>
        <Select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          startAdornment={
            <InputAdornment position="start">
              <VisibilityIcon />
            </InputAdornment>
          }
        >
          <MenuItem value="Public">Public</MenuItem>
          <MenuItem value="Private">Private</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  );
};

export default VisibilityField;
