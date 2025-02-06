import { Box, Typography } from "@mui/material";
import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { HomePostIconResponsiveSize1 } from "../../constant/IconSizeResponsive";
import { PostResponsiveFontSize3 } from "../../constant/FontSizeResponsive";

const HomePostViewCountsText = ({ viewCounts }) => {
    return <Box sx={{ display: "flex", alignItems: "center" }}>
        <VisibilityIcon sx={{ color: "grey", pr: 0.3, width: HomePostIconResponsiveSize1, height: HomePostIconResponsiveSize1 }} />
        <Typography variant="caption" sx={{ fontSize: PostResponsiveFontSize3, pl: 0.2 }} >
            { viewCounts }
        </Typography>
    </Box>;
}

export default HomePostViewCountsText;