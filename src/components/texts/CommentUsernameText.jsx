import { Typography } from "@mui/material";
import React from "react";
import { PostResponsiveFontSize2 } from "../../constant/FontSizeResponsive";

const CommentUsernameText = ({ username }) => {
    return <Typography
        sx={{
            fontWeight: "600",
            fontSize: PostResponsiveFontSize2, 
            color: "#333",
        }}
        >
        {username}
        </Typography>;
}

export default CommentUsernameText;