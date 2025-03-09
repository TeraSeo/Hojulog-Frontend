import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import InquiryDetailBox from "../../components/box/customer_center/InquiryDetailBox";
import { getDetailedInquiryInfo } from "../../service/InquiryServie";

const InquiryDetailPage = () => {
    const { inquiryId } = useParams();
    const [inquiryData, setInquiryData] = useState(null);

    useEffect(() => {
        fetchInquiryData(inquiryId);
    }, [inquiryId]);

    const fetchInquiryData = async (inquiryId) => {
        try {
            const data = await getDetailedInquiryInfo(inquiryId);
            setInquiryData(data);
        } catch (error) {
            console.error("Error fetching inquiry data:", error);
        }
    };

    if (!inquiryData) {
        return <Typography>Loading...</Typography>;
    }

    return <InquiryDetailBox inquiryData={inquiryData} />
}

export default InquiryDetailPage;