import React from "react";
import { Grid, Typography, TextField, MenuItem } from "@mui/material";

const PeriodField = ({ value = "주", error, onChange }) => {
  const options = ["주", "월", "년"];

  return (
    <Grid item xs={12} sm={6}>
      <Typography variant="subtitle1" sx={{ color: "#001f5b" }} gutterBottom>
        기간 선택
      </Typography>
      <TextField
        select
        fullWidth
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="기간을 선택하세요"
        error={!!error}
        helperText={error || ""}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    </Grid>
  );
};

export default PeriodField;