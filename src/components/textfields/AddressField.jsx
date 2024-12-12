import React from "react";
import { Typography, TextField, Grid } from "@mui/material";

const AddressField = ({ value, error, onChange }) => {
  return (
    <Grid item xs={12}>
      <Typography variant="subtitle1" sx={{ color: "#001f5b" }} gutterBottom>
        주소
      </Typography>
      <TextField
        fullWidth
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="주소를 입력하세요"
        error={!!error}
        helperText={error || ""}
      />
    </Grid>
  );
};

export default AddressField;
