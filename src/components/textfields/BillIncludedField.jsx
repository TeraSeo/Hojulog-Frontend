import React from "react";
import { Typography, FormControl, Select, MenuItem, Grid } from "@mui/material";

const BillIncludedField = ({ value, error, onChange }) => {
  return (
    <Grid item xs={12}>
      <Typography variant="subtitle1" sx={{ color: "#001f5b" }} gutterBottom>
        관리비 포함 여부
      </Typography>
      <FormControl fullWidth error={!!error}>
        <Select value={value} onChange={(e) => onChange(e.target.value)}>
          <MenuItem value={true}>포함</MenuItem>
          <MenuItem value={false}>미포함</MenuItem>
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

export default BillIncludedField;
