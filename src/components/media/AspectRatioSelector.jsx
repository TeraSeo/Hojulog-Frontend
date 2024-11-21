import React from "react";
import { ToggleButton, ToggleButtonGroup, Typography, Grid } from "@mui/material";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";

const AspectRatioSelector = ({ mediaAspectRatio, handleAspectRatioChange }) => (
  <Grid item xs={12}>
    <Typography variant="subtitle1" gutterBottom>
      <AspectRatioIcon sx={{ marginRight: 1 }} />
      Select Product Images and Video Aspect Ratio
    </Typography>
    <ToggleButtonGroup
      value={mediaAspectRatio}
      exclusive
      onChange={handleAspectRatioChange}
      aria-label="aspect ratio"
      sx={{ marginBottom: 2 }}
    >
      <ToggleButton value="9x16" aria-label="9x16">
        9 x 16
      </ToggleButton>
      <ToggleButton value="16x9" aria-label="16x9">
        16 x 9
      </ToggleButton>
    </ToggleButtonGroup>
  </Grid>
);

export default AspectRatioSelector;
