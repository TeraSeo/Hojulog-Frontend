import React from "react";
import { FormControl, MenuItem, Select, Typography, Grid } from "@mui/material";

const BathroomTypeField = ({ value, error, onChange }) => {
  return (
    <Grid item xs={12}>
      <Typography variant="subtitle1" sx={{ color: "#001f5b" }} gutterBottom>
        화장실 유형
      </Typography>
      <FormControl fullWidth error={!!error}>
        <Select
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <MenuItem value="공용">공용</MenuItem>
          <MenuItem value="개인">개인</MenuItem>
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

export default BathroomTypeField;