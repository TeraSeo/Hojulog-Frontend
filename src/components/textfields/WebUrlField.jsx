import React from "react";
import { Typography, TextField, Grid, InputAdornment } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { logoPrimaryColor } from "../../constant/Color";

const WebUrlField = ({ value, error, onChange }) => {
  return (
    <Grid item xs={12}>
      <Typography variant="subtitle1" sx={{ color: logoPrimaryColor }} gutterBottom>
        Website URL 
      </Typography>
      <TextField
        fullWidth
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter Website URL"
        error={!!error}
        helperText={error || "Example: https://example.com"}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LanguageIcon />
            </InputAdornment>
          ),
        }}
      />
    </Grid>
  );
};

export default WebUrlField;
