import React from "react";
import { Typography } from "@mui/material";
import { logoPrimaryColor } from "../../constant/Color";

const PostTitleText = ({ title }) => {
  return (
    <Typography variant="h6" sx={{ color: logoPrimaryColor }}>
      {title || "Product Title"}
    </Typography>
  );
};

export default PostTitleText;
