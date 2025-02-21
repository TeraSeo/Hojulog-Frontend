import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const SingleUserBoxByData = ({ user }) => {
    const navigate = useNavigate();
    return (
        <Box
            onClick = {() => {navigate(`/update/admin/user/${user.id}`)}}
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
            <Box sx={{ display: "flex", flexGrow: 1, alignItems: "center", justifyContent: "space-between" }}>
                <Typography variant="body2" sx={{ width: "150px", fontWeight: "bold" }}>
                    {user.username}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="body2" sx={{ fontWeight: "bold", width: "80px" }}>포인트:</Typography>
                    <Typography variant="body2">{user.log}</Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="body2" sx={{ fontWeight: "bold", width: "100px" }}>이주의 좋아요:</Typography>
                    <Typography variant="body2">{user.likeCountThisWeek}</Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="body2" sx={{ fontWeight: "bold", width: "50px" }}>역할:</Typography>
                    <Typography variant="body2">{user.role}</Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="body2" sx={{ fontWeight: "bold", width: "80px" }}>계정 상태:</Typography>
                    <Typography variant="body2" color={user.isLocked ? "error" : "primary"}>
                        {user.isLocked ? "잠김" : "활성"}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default SingleUserBoxByData;
