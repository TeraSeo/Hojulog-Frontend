import React from "react";
import { Typography, TextField, Grid, InputAdornment } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import { logoPrimaryColor } from "../../constant/Color";

const AppStoreUrlField = ({ value, error, onChange }) => {
  return (
    <Grid item xs={12}>
      <Typography variant="subtitle1" sx={{ color: logoPrimaryColor }} gutterBottom>
        App Store URL
      </Typography>
      <TextField
        fullWidth
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter App Store URL"
        error={!!error}
        helperText={error || "Example: https://apps.apple.com/us/app/instagram/id389801252"}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AppleIcon />
            </InputAdornment>
          ),
        }}
      />
    </Grid>
  );
};

export default AppStoreUrlField;
