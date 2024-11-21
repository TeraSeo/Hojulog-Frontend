import React from "react";
import { Typography, TextField, Grid, InputAdornment } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";

const MAX_LENGTH = 5000;

const DescriptionField = ({ value, error, onChange }) => {
  const handleChange = (e) => {
    if (e.target.value.length <= MAX_LENGTH) {
      onChange(e.target.value);
    }
  };

  return (
    <Grid item xs={12}>
      <Typography variant="subtitle1" sx={{ color: "#001f5b" }} gutterBottom>
        Description
      </Typography>
      <TextField
        fullWidth
        multiline
        rows={6}
        value={value}
        onChange={handleChange}
        placeholder="Describe your product in detail"
        error={!!error}
        helperText={error || `${value.length}/${MAX_LENGTH} ${value.length >= MAX_LENGTH ? "(Maximum length reached)" : ""}`}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <DescriptionIcon />
            </InputAdornment>
          ),
        }}
      />
    </Grid>
  );
};

export default DescriptionField;