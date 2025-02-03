import { Typography } from "@mui/material";
import React from "react";
import { ComponentTextResponsiveFontSize1 } from "../../constant/FontSizeResponsive";

const InquiryStatusText = ({ isInquiryRead }) => {
    return (
        <Typography 
            sx={{ color: isInquiryRead ? "green" : "red", fontSize: ComponentTextResponsiveFontSize1 }}
        >
            {isInquiryRead ? "해결됨" : "대기중"}
        </Typography>
    );
};

export default InquiryStatusText;