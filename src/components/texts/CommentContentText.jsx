import { Typography } from "@mui/material";
import React from "react";
import { PostResponsiveFontSize2 } from "../../constant/FontSizeResponsive";

const CommentContentText = ({ content }) => {
    return <Typography
            sx={{
            color: "#555",
            lineHeight: 1.4,
            fontSize: PostResponsiveFontSize2, 
            }}
        >
            {content}
        </Typography>;
}

export default CommentContentText;