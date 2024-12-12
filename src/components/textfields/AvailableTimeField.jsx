import React from "react";
import { Typography, TextField, Grid } from "@mui/material";

const AvailableTimeField = ({ value, error, onChange }) => {
  return (
    <Grid item xs={12}>
      <Typography variant="subtitle1" sx={{ color: "#001f5b" }} gutterBottom>
        입주시기
      </Typography>
      <TextField
        fullWidth
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="입주시기를 입력하세요 (예: 2024-01-01)"
        error={!!error}
        helperText={error || ""}
      />
    </Grid>
  );
};

export default AvailableTimeField;
