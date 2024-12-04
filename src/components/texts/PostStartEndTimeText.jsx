import React from "react";
import { Box, Typography } from "@mui/material";

const PostStartEndTimeText = ({ startDateTime, endDateTime }) => {
  return (
    <Box sx={{ marginTop: 0.5 }}>
      <Typography variant="caption" color="textSecondary">
        {startDateTime ? `Start: ${startDateTime}` : "Start: N/A"}
      </Typography>
      <Typography variant="caption" color="textSecondary" sx={{ marginLeft: 1 }}>
        {endDateTime ? `End: ${endDateTime}` : "End: N/A"}
      </Typography>
    </Box>
  );
};

export default PostStartEndTimeText;