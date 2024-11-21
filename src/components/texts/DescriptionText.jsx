import React, { useState } from "react";
import { Typography, Link } from "@mui/material";

const DescriptionText = ({ description }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const CHARACTER_LIMIT = 300; // Set the character limit for the summary

  const handleToggleDescription = () => {
    setShowFullDescription((prev) => !prev);
  };

  const isDescriptionLong = description.length > CHARACTER_LIMIT;
  const displayedDescription = showFullDescription
    ? description
    : `${description.substring(0, CHARACTER_LIMIT)}${isDescriptionLong ? "..." : ""}`;

  return (
    <Typography
      variant="body2"
      gutterBottom
      sx={{
        marginBottom: 2,
        wordBreak: 'break-word', // Prevents long words from exceeding the container
        overflowWrap: 'break-word', // Ensures wrapping for long text
      }}
    >
      {displayedDescription}
      {isDescriptionLong && !showFullDescription && (
        <Link
          component="button"
          variant="body2"
          sx={{ marginLeft: 1, color: "#001f5b" }}
          onClick={handleToggleDescription}
        >
          see details
        </Link>
      )}
      {showFullDescription && isDescriptionLong && (
        <Link
          component="button"
          variant="body2"
          sx={{ marginLeft: 1, color: "#001f5b" }}
          onClick={handleToggleDescription}
        >
          show less
        </Link>
      )}
    </Typography>
  );
};

export default DescriptionText;