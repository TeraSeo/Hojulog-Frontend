import { Box, Typography } from "@mui/material";
import React from "react";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { ComponentTextResponsiveFontSize1 } from "../../constant/FontSizeResponsive";
import { PropertyIconResponsiveSize } from "../../constant/IconSizeResponsive";

const ParkAvailabilityText = ({ isParkable, width=PropertyIconResponsiveSize, height=PropertyIconResponsiveSize, fontSize=ComponentTextResponsiveFontSize1 }) => {
    return <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
        <DirectionsCarIcon sx={{ color: isParkable ? "green" : "grey", width: width, height: height }} />
        <Typography variant="caption" sx={{ fontSize: fontSize }} >
            {isParkable ? "가능" : "불가능"}
        </Typography>
    </Box>;
}

export default ParkAvailabilityText;