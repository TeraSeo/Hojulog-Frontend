import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import HomeContainerBox from "../../components/box/home/HomeContainerBox";
import { useNavigate } from "react-router-dom";
import { getAdminData } from "../../service/AdminService";
import { CommonPagePaddingXSize } from "../../constant/PaddingResponsiveSize";

const AdminPage = () => {
    const navigate = useNavigate();
    const [adminData, setAdminData] = useState();

    useEffect(() => {
        getAdminData()
            .then((data) => {
                setAdminData(data);
            })
            .catch((error) => console.error("Error fetching admin data:", error));
    }, []);

    if (!adminData) {
        return <div>Loading...</div>;
    }

    return (
        <Box sx={{ py: "0px", px: CommonPagePaddingXSize }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={12}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                        관리자 페이지
                    </Typography>

                    <Box sx={{ mb: 3 }}>
                        <HomeContainerBox title="유저 리스트" onDetailClicked={() => {  }}>
                            {adminData.userIds.map((userId, index) => (
                                <Box key={index}>
                                    { userId }
                                </Box>
                            ))}
                        </HomeContainerBox>
                    </Box>

                    <Box sx={{ my: 3 }}>
                        <HomeContainerBox title="문의 리스트" onDetailClicked={() => {  }}>
                            {adminData.inquiryIds.map((inquiryId, index) => (
                                <Box key={index}>
                                    { inquiryId }
                                </Box>
                            ))}
                        </HomeContainerBox>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default AdminPage;