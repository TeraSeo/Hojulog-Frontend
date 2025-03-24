import React, { useState } from "react";
import { Box, Fab, Zoom, Paper, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import StorefrontIcon from "@mui/icons-material/Storefront";
import GroupIcon from "@mui/icons-material/Group";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import SchoolIcon from "@mui/icons-material/School";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useNavigate } from "react-router-dom";

function AussieChoiceAddPostButton() {
    const [openAddMenu, setOpenAddMenu] = useState(false);
    const navigate = useNavigate();

    const menuItems = [
        { label: "부동산", icon: <HomeIcon fontSize="inherit" /> },
        { label: "구인구직", icon: <WorkIcon fontSize="inherit" /> },
        { label: "사고팔기", icon: <StorefrontIcon fontSize="inherit" /> },
        { label: "생활", icon: <GroupIcon fontSize="inherit" /> },
        { label: "여행", icon: <FlightTakeoffIcon fontSize="inherit" /> },
        { label: "유학", icon: <SchoolIcon fontSize="inherit" /> },
        { label: "기타", icon: <MoreHorizIcon fontSize="inherit" /> },
    ];

    const handleNavigate = (subCategory) => {
        navigate(`/launch/이상형월드컵/${subCategory}`);
        setOpenAddMenu(false);
    };

    return (
        <Box
            sx={{
                position: "fixed",
                bottom: { xs: 12, sm: 24 },
                right: { xs: 12, sm: 24 },
                zIndex: 9999,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: 1,
            }}
        >
            <Zoom in={openAddMenu}>
                <Box sx={{ display: openAddMenu ? "flex" : "none", flexDirection: "column", gap: 1 }}>
                    {menuItems.map((item, index) => (
                        <Paper
                            key={index}
                            onClick={() => handleNavigate(item.label)}
                            elevation={4}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: { xs: 0.5, sm: 1 },
                                px: { xs: 1, sm: 2 },
                                py: { xs: 0.5, sm: 1 },
                                borderRadius: 2,
                                backgroundColor: "white",
                                cursor: "pointer",
                                transition: "all 0.2s ease",
                                "&:hover": {
                                    backgroundColor: "primary.light",
                                    color: "white",
                                },
                                fontSize: { xs: "0.75rem", sm: "0.875rem" }, // 아이콘과 텍스트에 적용됨
                            }}
                        >
                            {item.icon}
                            <Typography
                                variant="body2"
                                fontWeight="bold"
                                sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}
                            >
                                {item.label}
                            </Typography>
                        </Paper>
                    ))}
                </Box>
            </Zoom>

            <Fab
                color="primary"
                aria-label="add"
                onClick={() => setOpenAddMenu((prev) => !prev)}
                sx={{
                    width: { xs: 40, sm: 56 },
                    height: { xs: 40, sm: 56 },
                    minHeight: "unset",
                }}
            >
                <AddIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
            </Fab>
        </Box>
    );
}

export default AussieChoiceAddPostButton;