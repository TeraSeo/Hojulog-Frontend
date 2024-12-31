import React from "react";
import { Box, Typography } from "@mui/material";

const SummarizedDescriptionText = ({ description }) => {

  return (
    <Box sx={{ pl: 1 }}>
      <Typography
        variant="caption"
        sx={{
          color: "gray",
          fontStyle: "italic",
          userSelect: "none"
        }}
      >
        {description || ""}
      </Typography>
    </Box>
  );
};

export default SummarizedDescriptionText;