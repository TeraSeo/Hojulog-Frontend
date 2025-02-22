import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSpecificInquiryInfo } from "../../service/AdminService";
import AdminInquiryEditBox from "../../components/box/admin/AdminInquiryEditBox";
import { Typography } from "@mui/material";

const AdminInquiryEditPage = () => {
    const { inquiryId } = useParams();
    const [inquiryData, setInquiryData] = useState(null);

    useEffect(() => {
        fetchInquiryData(inquiryId);
    }, [inquiryId]);

    const fetchInquiryData = async (inquiryId) => {
        try {
            const data = await getSpecificInquiryInfo(inquiryId);
            setInquiryData(data);
        } catch (error) {
            console.error("Error fetching inquiry data:", error);
        }
    };

    if (!inquiryData) {
        return <Typography>Loading...</Typography>;
    }

    return <AdminInquiryEditBox inquiryData={inquiryData} />
}

export default AdminInquiryEditPage;