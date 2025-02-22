import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const SingleInquiryBoxByData = ({ inquiry }) => {
    const navigate = useNavigate();
    return (
        <Box
            onClick = {() => {navigate(`/update/admin/inquiry/${inquiry.inquiryId}`)}}
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
                    {inquiry.inquiryId}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="body2" sx={{ fontWeight: "bold", width: "50px" }}>제목:</Typography>
                    <Typography variant="body2" sx={{ pr: 5, width: "230px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{inquiry.title}</Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="body2" sx={{ fontWeight: "bold", width: "50px" }}>설명:</Typography>
                    <Typography variant="body2" sx={{ pr: 5, width: "480px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{inquiry.description}</Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="body2" sx={{ fontWeight: "bold", width: "50px" }}>상태:</Typography>
                    <Typography variant="body2" sx={{ color: inquiry.isSolved ? "green" : "red" }}>
                        {inquiry.isSolved ? "해결됨" : "대기중"}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default SingleInquiryBoxByData;
