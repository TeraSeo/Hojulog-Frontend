import React from "react";
import { Typography, TextField, Grid, InputAdornment } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const PlayStoreUrlField = ({ value, error, onChange }) => {
  return (
    <Grid item xs={12}>
      <Typography variant="subtitle1" sx={{ color: "#001f5b" }} gutterBottom>
        Play Store URL
      </Typography>
      <TextField
        fullWidth
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter Play Store URL"
        error={!!error}
        helperText={error || "Example: https://play.google.com/store/apps/details?id=com.instagram.android"}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PlayArrowIcon />
            </InputAdornment>
          ),
        }}
      />
    </Grid>
  );
};

export default PlayStoreUrlField;