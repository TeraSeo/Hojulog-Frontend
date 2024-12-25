import React from "react";
import BathtubIcon from "@mui/icons-material/Bathtub";
import { Box, Typography } from "@mui/material";

const BathRoomTypeText = ({ bathroomType }) => {
    return <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
        <BathtubIcon sx={{ color: bathroomType==="개인" ? "green" : "grey", width: "20px", height: "20px" }} />
        <Typography variant="caption">
            {bathroomType}
        </Typography>
    </Box>;
}

export default BathRoomTypeText;