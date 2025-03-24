import React, { useState } from "react";
import { Box, Fab, Zoom, Paper, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import HotelIcon from "@mui/icons-material/Hotel";
import HouseIcon from "@mui/icons-material/House";
import { useNavigate } from "react-router-dom";

function PropertyAddPostButton() {
    const [openAddMenu, setOpenAddMenu] = useState(false);
    const navigate = useNavigate();

    const menuItems = [
        { label: "쉐어", icon: <HotelIcon fontSize="inherit" />, path: "쉐어" },
        { label: "렌트", icon: <HouseIcon fontSize="inherit" />, path: "렌트" },
        { label: "매매", icon: <HomeIcon fontSize="inherit" />, path: "매매" }
    ];

    const handleNavigate = (path) => {
        navigate(`/launch/부동산/${path}`);
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
                            onClick={() => handleNavigate(item.path)}
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

export default PropertyAddPostButton;
