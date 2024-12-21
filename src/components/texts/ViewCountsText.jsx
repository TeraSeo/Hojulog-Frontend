import React from "react";
import { Box, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

const ViewCountsText = ({ viewCounts }) => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", pl: 1 }}>
            <VisibilityIcon sx={{ color: "grey", pr: 0.5, width: "20px", height: "20px" }} />
            <Typography variant="caption">
                { viewCounts + 5 }
            </Typography>
        </Box>
    );
}

export default ViewCountsText;