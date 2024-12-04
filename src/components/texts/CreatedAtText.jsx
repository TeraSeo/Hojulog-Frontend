import React from "react";
import { Typography } from "@mui/material";
import { formatDistanceToNow } from "date-fns";

const CreatedAtText = ({ createdAt }) => {
  const displayText = createdAt
    ? formatDistanceToNow(new Date(createdAt), { addSuffix: true })
    : "now";

  return (
    <Typography
      variant="caption"
      sx={{
        color: "gray",
        fontStyle: "italic",
      }}
    >
      {displayText}
    </Typography>
  );
};

export default CreatedAtText;
