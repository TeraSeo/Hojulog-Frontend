import React from "react";
import { Box, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

const ViewCountsText = ({ viewCounts, pl=1 }) => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", pl: pl }}>
            <VisibilityIcon sx={{ color: "grey", pr: 0.3, width: "25px", height: "25px" }} />
            <Typography variant="caption" sx={{ fontSize: "13px" }} >
                { viewCounts + 5 }
            </Typography>
        </Box>
    );
}

export default ViewCountsText;