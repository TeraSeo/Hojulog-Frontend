import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getUserPageData } from "../../service/AdminService";
import { CommonPagePaddingXSize } from "../../constant/PaddingResponsiveSize";
import CategorySidebar from "../../components/bar/CategorySidebar";
import PageTitleText from "../../components/texts/PageTitleText";
import PostPaginationBox from "../../components/box/post/PostPaginationBox";
import SingleUserBoxByData from "../../components/box/admin/SingleUserBoxByData";
import ThisWeekLogDividingButton from "../../components/buttons/ThisWeekLogDividingButton";

const AdminUserListPage = () => {
    const [userData, setUserData] = useState({
        users: [],
        pageSize: 1,
        currentPage: 1
    });

    useEffect(() => {
        fetchPageData(1);
    }, []);

    const fetchPageData = (page) => {
        getUserPageData(page)
            .then((data) => {
                setUserData({
                    users: data.users,
                    pageSize: data.pageSize,
                    currentPage: page
                });
            })
            .catch((error) => console.error("Error fetching posts:", error));
    };

    const handlePageChange = (value) => {
        fetchPageData(value);
    };

    if (!userData) {
        return <div>Loading...</div>;
    }

    return <Box sx={{ py: "10px", px: CommonPagePaddingXSize }}>
        <Grid container spacing={3}>
            <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
                <CategorySidebar />
            </Grid>

            <Grid item xs={12} md={9}>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                    <PageTitleText title={"유저 리스트"} />

                    <ThisWeekLogDividingButton />
                </Box>

                {userData.users.map((user, index) => (
                    <React.Fragment key={index}>
                        <Box>
                            <SingleUserBoxByData user={user} />
                        </Box>
                    </React.Fragment>
                ))}
                
                <PostPaginationBox totalPage={userData.pageSize} currentPage={userData.currentPage} handlePageChange={handlePageChange} />
            </Grid>
        </Grid>
    </Box>
}

export default AdminUserListPage;