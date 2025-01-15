import React from "react";
import { Box, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

const ViewCountsText = ({ viewCounts, pl=1, width=25, height=25, fontSize=13 }) => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", pl: pl }}>
            <VisibilityIcon sx={{ color: "grey", pr: 0.3, width: width, height: height }} />
            <Typography variant="caption" sx={{ fontSize: fontSize, pl: 0.5 }} >
                { viewCounts }
            </Typography>
        </Box>
    );
}

export default ViewCountsText;