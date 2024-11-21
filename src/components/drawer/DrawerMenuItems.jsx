import React from "react";
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import CampaignIcon from "@mui/icons-material/Campaign";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";

function DrawerMenuItems({ isAuthenticated, handleClose }) {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
        handleClose(); // Close the drawer
    };

    return (
        <Box>
            <Typography variant="subtitle1" sx={{ color: "#ff5757", fontWeight: "bold", mb: 2 }}>
                Main
            </Typography>
            <List>
                <ListItem button onClick={() => handleNavigate("/")}>
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                    <ListItemText primary="Home" secondary="Discover latest projects and updates" />
                </ListItem>
                <ListItem button onClick={() => handleNavigate("/launch")}>
                    <ListItemIcon><CampaignIcon /></ListItemIcon>
                    <ListItemText 
                        primary="Launch Your Advertisement" 
                        secondary="Promote your project to reach a wider audience" 
                    />
                </ListItem>
                <ListItem button onClick={() => handleNavigate("/about")}>
                    <ListItemIcon><InfoIcon /></ListItemIcon>
                    <ListItemText primary="About" secondary="Learn more about our mission" />
                </ListItem>
                <ListItem button onClick={() => handleNavigate("/contact")}>
                    <ListItemIcon><ContactMailIcon /></ListItemIcon>
                    <ListItemText primary="Contact" secondary="Get in touch with us" />
                </ListItem>
            </List>

            <Divider sx={{ my: 2 }} />

            {isAuthenticated && (
                <List>
                    <ListItem button onClick={() => handleNavigate("/myposts")}>
                        <ListItemIcon><NoteAltIcon /></ListItemIcon>
                        <ListItemText primary="My Posts" />
                    </ListItem>
                    <ListItem button onClick={() => handleNavigate("/notifications")}>
                        <ListItemIcon><NotificationsIcon /></ListItemIcon>
                        <ListItemText primary="Notifications" />
                    </ListItem>
                    <ListItem button onClick={() => handleNavigate("/profile")}>
                        <ListItemIcon><AccountCircle /></ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItem>
                </List>
            )}
        </Box>
    );
}

export default DrawerMenuItems;
