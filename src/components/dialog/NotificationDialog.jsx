import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography,
    List,
    Box
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import React, { useEffect, useState } from "react";
import { getNotifications } from "../../service/NotificationService";
import NotificationBox from "../box/notification/NotificationBox";

const NotificationDialog = ({ openDialog, handleDialogClose }) => {
    const userId = localStorage.getItem('userId') || "";
    const [notificationData, setNotificationData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (openDialog) {
            fetchNotifications(userId);
        }
    }, [userId, openDialog]);

    const fetchNotifications = async (userId) => {
        try {
            setLoading(true);
            const notifications = await getNotifications(userId);
            setNotificationData(notifications);
        } catch (error) {
            console.error("Error fetching notification data:", error);
        } finally {
            setLoading(false);
        }
    };

    const markNotificationAsRead = (notificationId) => {
        setNotificationData(prevNotifications =>
            prevNotifications.map(notification =>
                notification.id === notificationId
                    ? { ...notification, isRead: true }
                    : notification
            )
        );
    };

    return (
        <Dialog open={openDialog} onClose={handleDialogClose} maxWidth="sm" fullWidth>
            <DialogTitle>
                <Box display="flex" alignItems="center" gap={1}>
                    <NotificationsIcon color="primary" />
                    <Typography variant="h6">알림</Typography>
                </Box>
            </DialogTitle>

            <DialogContent dividers>
                {loading ? (
                    <Typography align="center">Loading...</Typography>
                ) : notificationData.length > 0 ? (
                    <List>
                        {notificationData.map((notification) => (
                            <NotificationBox notification={notification} markAsRead={markNotificationAsRead} />
                        ))}
                    </List>
                ) : (
                    <Box textAlign="center" py={5}>
                        <NotificationsIcon color="disabled" sx={{ fontSize: 60 }} />
                        <Typography variant="h6" color="text.secondary">
                            새로운 알림이 없습니다.
                        </Typography>
                    </Box>
                )}
            </DialogContent>

            <DialogActions>
                <Button onClick={handleDialogClose} color="primary" variant="contained">
                    닫기
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default NotificationDialog;