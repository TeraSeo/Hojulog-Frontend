import React from "react";
import { Box, Typography } from "@mui/material";

const SuburbText = ({ suburb }) => {

  return (
    <Box sx={{ pl: 1 }}>
      <Typography
        variant="caption"
        sx={{
          color: "gray",
          fontStyle: "italic",
        }}
      >
        {suburb || ""}
      </Typography>
    </Box>
  );
};

export default SuburbText;