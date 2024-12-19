import React from "react";
import { Typography } from "@mui/material";
import { primaryColor } from "../../constant/Color";

const PostTitleText = ({ title }) => {
  return (
    <Typography variant="h6" sx={{ color: primaryColor }}>
      {title || "Product Title"}
    </Typography>
  );
};

export default PostTitleText;
