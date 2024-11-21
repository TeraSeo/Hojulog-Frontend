import React from "react";
import { Box, IconButton, Button, Badge } from "@mui/material";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

function HeaderMenuItems({ isAuthenticated, handleLogout }) {
    const navigate = useNavigate();

    return (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {isAuthenticated ? (
                <>
                    {/* Authenticated User Menu */}
                    <IconButton size="large" color="default">
                        <Badge badgeContent={0} color="primary">
                            <NoteAltIcon />
                        </Badge>
                    </IconButton>
                    <IconButton size="large" color="default">
                        <Badge badgeContent={0} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton size="large" color="default">
                        <AccountCircle />
                    </IconButton>
                    <IconButton size="large" color="default" onClick={handleLogout}>
                        <LogoutIcon />
                    </IconButton>
                </>
            ) : (
                <Button variant="outlined" color="primary" onClick={() => navigate("/login")}>
                    Login
                </Button>
            )}
        </Box>
    );
}

export default HeaderMenuItems;
