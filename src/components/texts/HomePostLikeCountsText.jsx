import { Box, Typography } from "@mui/material";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { HomePostIconResponsiveSize1 } from "../../constant/IconSizeResponsive";
import { PostResponsiveFontSize3 } from "../../constant/FontSizeResponsive";

const HomePostLikeCountsText = ({ likeCounts }) => {
    return <Box sx={{ display: "flex", alignItems: "center" }}>
        <FavoriteBorderIcon sx={{ color: "red", pr: 0.3, width: HomePostIconResponsiveSize1, height: HomePostIconResponsiveSize1 }} />
        <Typography variant="caption" sx={{ fontSize: PostResponsiveFontSize3, pl: 0.2 }}>
            {likeCounts}
        </Typography>
    </Box>
}

export default HomePostLikeCountsText;