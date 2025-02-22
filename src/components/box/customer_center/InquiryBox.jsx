import { Box } from "@mui/material";
import React from "react";
import SummarizedInquiryTitleText from "../../texts/SummarizedInquiryTitleText";
import InquiryStatusText from "../../texts/InquiryStatusText";

const InquiryBox = ({ inquiry }) => {
    return <Box sx={{
        mt: 1.5,
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        px: { md: 2, sm: 1.5, xs: 1 },
        py: 2
    }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                <SummarizedInquiryTitleText inquiryText={inquiry.title} inquiryId={inquiry.inquiryId} pt={0} />
            </Box>
            <Box sx={{ display: "flex", pr: 1, flexShrink: 0 }}>
                <InquiryStatusText isInquiryRead={inquiry.isSolved} />
            </Box>
        </Box>
    </Box>
}

export default InquiryBox;