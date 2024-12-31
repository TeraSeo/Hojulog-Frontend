import React from "react";
import { Box, Typography } from "@mui/material";
import { formatTimeDifference } from "../../service/TimeService";

const CreatedAtText = ({ createdAt, pl=1 }) => {
  const formattedTime = formatTimeDifference(createdAt);

  return (
    <Box sx={{ pl: pl }}>
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