import React from "react";
import { Box, Typography } from "@mui/material";
import { formatTimeDifference } from "../../service/TimeService";

const CreatedAtText = ({ createdAt }) => {
  const formattedTime = formatTimeDifference(createdAt);

  return (
    <Box sx={{ px: 1 }}>
      <Typography
        variant="caption"
        sx={{
          color: "gray",
          fontStyle: "italic",
        }}
      >
        {formattedTime}
      </Typography>
    </Box>
  );
};

export default CreatedAtText;