import { Badge, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React, { useEffect, useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { getNotificationCount } from "../../service/NotificationService";
import NotificationDialog from "../dialog/NotificationDialog";

const NotificationButton = () => {
    const userId = localStorage.getItem('userId') || "";
    const [newNotifications, setNewNotifications] = useState(0);
    const [openDialog, setOpenDialog] = useState(false);

    useEffect(() => {
        fetchNotificationCount(userId);
    }, [userId]);

    const fetchNotificationCount = async (userId) => {
        try {
            const notificationCount = await getNotificationCount(userId);
            setNewNotifications(notificationCount);
        } catch (error) {
            console.error("Error fetching notification count:", error);
        }
    };

    const handleDialogOpen = () => {
        setOpenDialog(true);
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
    };

    return (
        <>
            <ListItem button onClick={handleDialogOpen}>
                <ListItemIcon>
                    <Badge badgeContent={newNotifications} color="error">
                        <NotificationsIcon sx={{ color: "#666" }} />
                    </Badge>
                </ListItemIcon>
                <ListItemText primary="알림" sx={{ color: "#666", fontWeight: "bold" }} />
            </ListItem>

            <NotificationDialog openDialog={openDialog} handleDialogClose={handleDialogClose} newNotifications={newNotifications} />
        </>
    );
};

export default NotificationButton;
