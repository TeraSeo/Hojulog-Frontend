import React from "react";
import { FormControl, MenuItem, Select, Typography, Grid } from "@mui/material";

const ParkableField = ({ value, error, onChange }) => {
  return (
    <Grid item xs={12}>
      <Typography variant="subtitle1" sx={{ color: "#001f5b" }} gutterBottom>
        주차 여부
      </Typography>
      <FormControl fullWidth error={!!error}>
        <Select
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <MenuItem value={true}>주차 가능</MenuItem>
          <MenuItem value={false}>주차 불가능</MenuItem>
        </Select>
        {error && (
          <Typography variant="body2" color="error" sx={{ mt: 1 }}>
            {error}
          </Typography>
        )}
      </FormControl>
    </Grid>
  );
};

export default ParkableField;