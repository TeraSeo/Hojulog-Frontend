import React, { useEffect, useState } from "react";
import { getUserInfo } from "../../service/AdminService";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import AdminUserEditBox from "../../components/box/admin/AdminUserEditBox";

const AdminUserEditPage = () => {
    const { userId } = useParams();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetchUserData(userId);
    }, [userId]);

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

    return <AdminUserEditBox userData={userData} />
}

export default AdminUserEditPage;