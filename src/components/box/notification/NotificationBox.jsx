import { Avatar, Badge, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import React from "react";
import { setNotificationAsRead } from "../../../service/NotificationService";

const NotificationBox = ({ notification, markAsRead }) => {
    const updateAsRead = async (notificationId) => {
        const isUpdated = await setNotificationAsRead(notificationId);
        if (isUpdated) {
            markAsRead(notification.id);
        }
    };

    return (
        <ListItem
            onClick={() => updateAsRead(notification.id)}
            key={notification.id}
            divider
            sx={{
                "&:hover": {
                    backgroundColor: "#f5f5f5",
                    cursor: "pointer"
                }
            }}
        >
            <ListItemAvatar>
                <Avatar sx={{ bgcolor: notification.isRead ? "grey.400" : "primary.main" }}>
                    <InfoIcon />
                </Avatar>
            </ListItemAvatar>

            <ListItemText
                primary={
                    <Badge color="secondary" variant="dot" invisible={notification.isRead}>
                        <Typography
                            variant="subtitle1"
                            fontWeight={notification.isRead ? "normal" : "bold"}
                            sx={{
                                wordBreak: "break-word",
                                maxWidth: "100%"
                            }}
                        >
                            {notification.title}
                        </Typography>
                    </Badge>
                }
                secondary={
                    <>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                                wordBreak: "break-word",
                                maxWidth: "100%"
                            }}
                        >
                            {notification.message}
                        </Typography>
                        <Typography variant="caption" color="text.disabled">
                            {new Date(notification.createdAt).toLocaleString()}
                        </Typography>
                    </>
                }
            />
        </ListItem>
    );
};

export default NotificationBox;