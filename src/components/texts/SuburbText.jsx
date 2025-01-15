import React from "react";
import { Box, Typography } from "@mui/material";
import { ComponentTextResponsiveFontSize1 } from "../../constant/FontSizeResponsive";

const SuburbText = ({ suburb, pl=1 }) => {

  return (
    <Box sx={{ pl: pl }}>
      <Typography
        sx={{
          color: "gray",
          fontStyle: "italic",
          fontSize: ComponentTextResponsiveFontSize1
        }}
      >
        {suburb || ""}
      </Typography>
    </Box>
  );
};

export default SuburbText;