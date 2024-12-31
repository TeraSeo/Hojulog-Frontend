import React from "react";
import ReceiptIcon from '@mui/icons-material/Receipt';
import { Box, Typography } from "@mui/material";

const BillIncludedText = ({ isBillIncluded, width=20, height=20, fontSize=11 }) => {
    return <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
        <ReceiptIcon sx={{ color: isBillIncluded ? "green" : "grey", width: {width}, height: {height} }} />
        <Typography variant="caption" sx={{ fontSize: {fontSize} }}>
            {isBillIncluded ? '관리비 포함' : '관리비 미포함'}
        </Typography>
    </Box>;
}

export default BillIncludedText;