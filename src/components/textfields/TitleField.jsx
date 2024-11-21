import React from "react";
import { Typography, TextField, Grid, InputAdornment } from "@mui/material";
import TitleIcon from "@mui/icons-material/Title";

const MAX_LENGTH = 40;

const TitleField = ({ value, error, onChange }) => {
  const handleChange = (e) => {
    if (e.target.value.length <= MAX_LENGTH) {
      onChange(e.target.value);
    }
  };

  return (
    <Grid item xs={12}>
      <Typography variant="subtitle1" sx={{ color: "#001f5b" }} gutterBottom>
        Title of the Product
      </Typography>
      <TextField
        fullWidth
        value={value}
        onChange={handleChange}
        placeholder="Enter product title"
        error={!!error}
        helperText={error || `${value.length}/${MAX_LENGTH} ${value.length >= MAX_LENGTH ? "(Maximum length reached)" : ""}`}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <TitleIcon />
            </InputAdornment>
          ),
        }}
      />
    </Grid>
  );
};

export default TitleField;
