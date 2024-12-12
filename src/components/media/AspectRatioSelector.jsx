import React from "react";
import { ToggleButton, ToggleButtonGroup, Typography, Grid } from "@mui/material";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";

const AspectRatioSelector = ({ mediaAspectRatio, handleAspectRatioChange }) => (
  <Grid item xs={12}>
    <Typography variant="subtitle1" gutterBottom>
      <AspectRatioIcon sx={{ marginRight: 1 }} />
      이미지 비율 선택
    </Typography>
    <Typography variant="body2" color="textSecondary" gutterBottom>
      원하는 이미지의 화면 비율을 선택하세요.
    </Typography>

    <ToggleButtonGroup
      value={mediaAspectRatio}
      exclusive
      onChange={handleAspectRatioChange}
      aria-label="aspect ratio"
      sx={{ marginBottom: 2 }}
    >
      <ToggleButton value="9x16" aria-label="세로 비율 9x16">
        9 x 16 (세로)
      </ToggleButton>
      <ToggleButton value="16x9" aria-label="가로 비율 16x9">
        16 x 9 (가로)
      </ToggleButton>
    </ToggleButtonGroup>
  </Grid>
);

export default AspectRatioSelector;