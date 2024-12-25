import { Box, Typography } from "@mui/material";
import React from "react";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

const ParkAvailabilityText = ({ isParkable }) => {
    return <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
        <DirectionsCarIcon sx={{ color: isParkable ? "green" : "grey", width: "20px", height: "20px" }} />
        <Typography variant="caption">
            {isParkable ? "가능" : "불가능"}
        </Typography>
    </Box>;
}

export default ParkAvailabilityText;