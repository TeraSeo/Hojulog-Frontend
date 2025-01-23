import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getInquiryById } from "../../../service/CustomerCenterService";

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

    return <Box sx={{ my: 1 }}>
        { inquiryData.description }
    </Box>
}

export default CommonSummarizedInquiryBox;