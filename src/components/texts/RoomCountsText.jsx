import React from "react";
import { Box, Typography } from "@mui/material";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

const RoomCountsText = ({ roomCount }) => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <MeetingRoomIcon sx={{ color: roomCount==="방 쉐어" ? "grey" : "green", width: "20px", height: "20px" }} />
            <Typography variant="caption">
                {roomCount}
            </Typography>
        </Box>
    );
}

export default RoomCountsText;
