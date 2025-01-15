import React from "react";
import { Typography } from "@mui/material";
import { PostTitleFontSize } from "../../constant/FontSizeResponsive";

const DetailedPostTitleText = ({ subCategory, title }) => {
  return (
    <Typography
      variant="body2"
      sx={{
        fontSize: PostTitleFontSize,
        fontWeight: "400",
        textAlign: "start",
        whiteSpace: "normal", 
        wordBreak: "break-word", 
        overflow: "hidden",   
        width: "100%",        
      }}
    >
      {subCategory} | {title || "No Title Available"}
    </Typography>
  );
};

export default DetailedPostTitleText;
