import React from "react";
import { Box, Typography } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import { primaryColor } from "../../constant/Color";

const CommentsCountsText = ({ commentsCounts, pl = 1, width=25, height=25, fontSize=13 }) => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", pl: pl }}>
            <CommentIcon sx={{ color: primaryColor, pr: 0.3, width: width, height: height }} />
            <Typography variant="caption" sx={{ fontSize: fontSize, pl: 0.5 }} >
                { commentsCounts }
            </Typography>
        </Box>
    );
}

export default CommentsCountsText;
