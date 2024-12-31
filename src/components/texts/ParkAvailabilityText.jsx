import { Box, Typography } from "@mui/material";
import React from "react";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

const ParkAvailabilityText = ({ isParkable, width=20, height=20, fontSize=11 }) => {
    return <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
        <DirectionsCarIcon sx={{ color: isParkable ? "green" : "grey", width: {width}, height: {height} }} />
        <Typography variant="caption" sx={{ fontSize: {fontSize}}} >
            {isParkable ? "가능" : "불가능"}
        </Typography>
    </Box>;
}

export default ParkAvailabilityText;