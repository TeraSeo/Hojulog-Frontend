import React from "react";
import { Typography, TextField, Grid } from "@mui/material";

const StartEndDateField = ({ label, value, error, onChange }) => {
  return (
    <Grid item xs={12} sm={6}>
      <Typography variant="subtitle1" gutterBottom>
        {label}
      </Typography>
      <TextField
        fullWidth
        type="datetime-local"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        error={!!error}
        helperText={error || ""}
        InputLabelProps={{ shrink: true }}
      />
    </Grid>
  );
};

export default StartEndDateField;