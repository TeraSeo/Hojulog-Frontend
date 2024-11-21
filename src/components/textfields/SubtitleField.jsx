import React from "react";
import { Typography, TextField, Grid, InputAdornment } from "@mui/material";
import SubtitlesIcon from "@mui/icons-material/Subtitles";

const MAX_LENGTH = 60;

const SubtitleField = ({ value, error, onChange }) => {
  const handleChange = (e) => {
    if (e.target.value.length <= MAX_LENGTH) {
      onChange(e.target.value);
    }
  };

  return (
    <Grid item xs={12}>
      <Typography variant="subtitle1" sx={{ color: "#001f5b" }} gutterBottom>
        Subtitle
      </Typography>
      <TextField
        fullWidth
        value={value}
        onChange={handleChange}
        placeholder="Enter subtitle"
        error={!!error}
        helperText={error || `${value.length}/${MAX_LENGTH} ${value.length >= MAX_LENGTH ? "(Maximum length reached)" : ""}`}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SubtitlesIcon />
            </InputAdornment>
          ),
        }}
      />
    </Grid>
  );
};

export default SubtitleField;
