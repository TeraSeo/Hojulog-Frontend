import React from "react";
import { Box, Typography } from "@mui/material";
import { formatTimeDifference } from "../../service/TimeService";
import { ComponentTextResponsiveFontSize1 } from "../../constant/FontSizeResponsive";

const CreatedAtText = ({ createdAt, pl=1 }) => {
  const formattedTime = formatTimeDifference(createdAt);

  return (
    <Box sx={{ pl: pl }}>
      <Typography
        sx={{
          color: "gray",
          fontStyle: "italic",
          fontSize: ComponentTextResponsiveFontSize1
        }}
      >
        {formattedTime}
      </Typography>
    </Box>
  );
};

export default CreatedAtText;