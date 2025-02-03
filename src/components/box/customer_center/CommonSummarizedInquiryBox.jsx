import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getInquiryById } from "../../../service/CustomerCenterService";
import SummarizedInquiryTitleText from "../../texts/SummarizedInquiryTitleText";
import InquiryStatusText from "../../texts/InquiryStatusText";

const CommonSummarizedInquiryBox = ({ inquiryId }) => {
    const [inquiryData, setInquiryData] = useState();

    useEffect(() => {
        getInquiryById(inquiryId)
            .then((data) => {
                setInquiryData(data);
            })
            .catch((error) => console.error("Error fetching posts:", error));
    }, []);

    if (!inquiryData) {
        return <div>Loading...</div>;
    }

    return <Box sx={{ pl: 1, my: 1, display: "flex", justifyContent: "space-between" }}>
        <Box sx={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            <SummarizedInquiryTitleText inquiryText={inquiryData.title} inquiryId={inquiryId} />
        </Box>
        <Box sx={{ display: "flex", pr: 1, pt: 1, flexShrink: 0 }}>
            <InquiryStatusText isInquiryRead={inquiryData.isSolved} />
        </Box>
    </Box>;
}

export default CommonSummarizedInquiryBox;