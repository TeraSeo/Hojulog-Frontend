import React from "react";
import { Grid, Typography, TextField, InputAdornment } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { logoPrimaryColor } from "../../constant/Color";

const YouTubeUploader = ({ youtubeUrl, handleYoutubeUrlChange, error }) => {
  return (
    <Grid item xs={12}>
      <Typography
        variant="subtitle1"
        sx={{ color: logoPrimaryColor }}
        gutterBottom
      >
        YouTube Video/Shorts URL
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        value={youtubeUrl || ""}
        onChange={(e) => handleYoutubeUrlChange(e.target.value)}
        placeholder="Enter YouTube Video or Shorts URL"
        error={!!error}
        helperText={error || "Enter a valid YouTube URL (e.g., https://youtu.be/VIDEO_ID or https://youtube.com/shorts/VIDEO_ID)"}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <YouTubeIcon />
            </InputAdornment>
          ),
        }}
      />
    </Grid>
  );
};

export default YouTubeUploader;