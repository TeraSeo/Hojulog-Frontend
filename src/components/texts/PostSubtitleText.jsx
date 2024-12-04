import React from "react";
import { Typography } from "@mui/material";

const PostSubtitleText = ({ subtitle }) => {
  return (
    <Typography variant="subtitle2" color="textSecondary">
      {subtitle || "Product Subtitle"}
    </Typography>
  );
};

export default PostSubtitleText;