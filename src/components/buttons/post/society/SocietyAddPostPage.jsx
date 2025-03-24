import React, { useState } from "react";
import { Box, Fab, Zoom, Paper, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Diversity3Icon from "@mui/icons-material/Diversity3"; // 동호회
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople"; // 친목
import FavoriteIcon from "@mui/icons-material/Favorite"; // 라이프스타일
import { useNavigate } from "react-router-dom";

function SocietyAddPostButton() {
    const [openAddMenu, setOpenAddMenu] = useState(false);
    const navigate = useNavigate();

    const menuItems = [
        { label: "동호회", icon: <Diversity3Icon fontSize="inherit" /> },
        { label: "친목", icon: <EmojiPeopleIcon fontSize="inherit" /> },
        { label: "라이프스타일", icon: <FavoriteIcon fontSize="inherit" /> },
    ];

    const handleNavigate = (subCategory) => {
        navigate(`/launch/생활/${subCategory}`);
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
                                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                                "&:hover": {
                                    backgroundColor: "primary.light",
                                    color: "white",
                                },
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

export default SocietyAddPostButton;
