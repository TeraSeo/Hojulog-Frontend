import React from "react";
import BathtubIcon from "@mui/icons-material/Bathtub";
import { Box, Typography } from "@mui/material";
import { ComponentTextResponsiveFontSize1 } from "../../constant/FontSizeResponsive";
import { PropertyIconResponsiveSize } from "../../constant/IconSizeResponsive";

const BathRoomTypeText = ({ bathroomType, width=PropertyIconResponsiveSize, height=PropertyIconResponsiveSize, fontSize=ComponentTextResponsiveFontSize1 }) => {
    return <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
        <BathtubIcon sx={{ color: bathroomType==="개인" ? "green" : "grey", width: width, height: height }} />
        <Typography variant="caption" sx={{ fontSize: fontSize }}>
            {bathroomType}
        </Typography>
    </Box>;
}

export default BathRoomTypeText;