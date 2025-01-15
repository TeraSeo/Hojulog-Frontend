import React from "react";
import ReceiptIcon from '@mui/icons-material/Receipt';
import { Box, Typography } from "@mui/material";
import { ComponentTextResponsiveFontSize1 } from "../../constant/FontSizeResponsive";
import { PropertyIconResponsiveSize } from "../../constant/IconSizeResponsive";

const BillIncludedText = ({ isBillIncluded, width=PropertyIconResponsiveSize, height=PropertyIconResponsiveSize, fontSize=ComponentTextResponsiveFontSize1 }) => {
    return <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
        <ReceiptIcon sx={{ color: isBillIncluded ? "green" : "grey", width: width, height: height }} />
        <Typography variant="caption" sx={{ fontSize: fontSize }}>
            {isBillIncluded ? '관리비 포함' : '관리비 미포함'}
        </Typography>
    </Box>;
}

export default BillIncludedText;