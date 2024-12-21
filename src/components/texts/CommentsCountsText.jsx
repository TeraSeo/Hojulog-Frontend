import React from "react";
import { Box, Typography } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";

const CommentsCountsText = ({ commentsCounts }) => {
    return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <CommentIcon sx={{ color: "grey", pr: 0.5, width: "20px", height: "20px" }} />
            <Typography variant="caption">
                { commentsCounts + 3 }
            </Typography>
        </Box>
    );
}

export default CommentsCountsText;
