import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getUserInfo } from "../../../service/AdminService";
import { useNavigate } from "react-router-dom";

const SingleUserBox = ({ userId }) => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetchUserData(userId);
    }, []);

    const fetchUserData = async (userId) => {
        try {
            const data = await getUserInfo(userId);
            setUserData(data);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    if (!userData) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <Box
            onClick = {() => {navigate(`/update/admin/user/${userId}`)}}
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
                    {userData.username}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="body2" sx={{ fontWeight: "bold", width: "80px" }}>포인트:</Typography>
                    <Typography variant="body2">{userData.log}</Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="body2" sx={{ fontWeight: "bold", width: "100px" }}>이주의 좋아요:</Typography>
                    <Typography variant="body2">{userData.likeCountThisWeek}</Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="body2" sx={{ fontWeight: "bold", width: "50px" }}>역할:</Typography>
                    <Typography variant="body2">{userData.role}</Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="body2" sx={{ fontWeight: "bold", width: "80px" }}>계정 상태:</Typography>
                    <Typography variant="body2" color={userData.isLocked ? "error" : "primary"}>
                        {userData.isLocked ? "잠김" : "활성"}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default SingleUserBox;
