import React from "react";
import { Box, Typography } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import { primaryColor } from "../../constant/Color";

const CommentsCountsText = ({ commentsCounts, pl = 1 }) => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", pl: pl }}>
            <CommentIcon sx={{ color: primaryColor, pr: 0.3, width: "25px", height: "25px" }} />
            <Typography variant="caption" sx={{ fontSize: "13px" }} >
                { commentsCounts }
            </Typography>
        </Box>
    );
}

export default CommentsCountsText;
