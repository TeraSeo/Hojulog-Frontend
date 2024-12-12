import React from "react";
import { Grid, Typography, TextField, InputAdornment } from "@mui/material";

const PriceField = ({ value, error, onChange, smSize=6 }) => {
  return (
    <Grid item xs={12} sm={smSize}>
      <Typography variant="subtitle1" sx={{ color: "#001f5b" }} gutterBottom>
        가격 입력
      </Typography>
      <TextField
        fullWidth
        value={value}
        onChange={(e) => onChange(e.target.value.replace(/[^0-9]/g, ""))}
        placeholder="가격을 입력하세요"
        error={!!error}
        helperText={error || ""}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />
    </Grid>
  );
};

export default PriceField;