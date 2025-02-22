import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getInquiryInfo } from "../../../service/AdminService";
import { useNavigate } from "react-router-dom";

const SingleInquiryBox = ({ inquiryId }) => {
    const navigate = useNavigate();
    const [inquiryData, setInquiryData] = useState(null);

    useEffect(() => {
        fetchInquiryData(inquiryId);
    }, []);

    const fetchInquiryData = async (inquiryId) => {
        try {
            const data = await getInquiryInfo(inquiryId);
            setInquiryData(data);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    if (!inquiryData) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <Box
            onClick = {() => {navigate(`/update/admin/inquiry/${inquiryId}`)}}
            sx={{
                display: "flex",
                alignItems: "center",
                p: 1,
                border: "1px solid #ccc",
                borderRadius: "8px",
                boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
                backgroundColor: "#f9f9f9",
                mb: 1
            }}
        >

            <Box sx={{ display: "flex", flexGrow: 1, alignItems: "center" }}>
                <Typography variant="body2" sx={{  fontWeight: "bold", width: "10px" }}>
                    {inquiryData.inquiryId}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="body2" sx={{ fontWeight: "bold", width: "50px" }}>제목:</Typography>
                    <Typography variant="body2" sx={{ pr: 5, width: "350px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{inquiryData.title}</Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="body2" sx={{ fontWeight: "bold", width: "50px" }}>설명:</Typography>
                    <Typography variant="body2" sx={{ pr: 5, width: "600px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{inquiryData.description}</Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="body2" sx={{ fontWeight: "bold", width: "50px" }}>상태:</Typography>
                    <Typography variant="body2" sx={{ color: inquiryData.isSolved ? "green" : "red" }}>
                        {inquiryData.isSolved ? "해결됨" : "대기중"}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default SingleInquiryBox;
