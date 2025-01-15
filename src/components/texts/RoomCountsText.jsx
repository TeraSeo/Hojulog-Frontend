import React from "react";
import { Box, Typography } from "@mui/material";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import { ComponentTextResponsiveFontSize1 } from "../../constant/FontSizeResponsive";
import { PropertyIconResponsiveSize } from "../../constant/IconSizeResponsive";

const RoomCountsText = ({ roomCount, width=PropertyIconResponsiveSize, height=PropertyIconResponsiveSize, fontSize=ComponentTextResponsiveFontSize1 }) => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <MeetingRoomIcon sx={{ color: roomCount==="방 쉐어" ? "grey" : "green", width: width, height: height }} />
            <Typography variant="caption" sx={{ fontSize: fontSize }}>
                {roomCount}
            </Typography>
        </Box>
    );
}

export default RoomCountsText;
