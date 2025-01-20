import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import CategorySidebar from "../../../components/bar/CategorySidebar";
import { getSocietyPostsByPage } from "../../../service/PostService";
import SocietyPostBox from "../../../components/box/post/society/SocietyPostBox";
import PostPaginationBox from "../../../components/box/post/PostPaginationBox";
import PageTitleText from "../../../components/texts/PageTitleText";

function WholeSocietyPostPage() {
    const [societyPageData, setSocietyPageData] = useState({ 
        posts: [], 
        pageSize: 0, 
        currentPage: 0 
    });

    useEffect(() => {
        fetchPageData(1);
    }, []);

    const fetchPageData = (page) => {
        getSocietyPostsByPage(page)
            .then((data) => {
                setSocietyPageData({
                    posts: data.posts,
                    pageSize: data.pageSize,
                    currentPage: page
                });
            })
            .catch((error) => console.error("Error fetching posts:", error));
    };

    const handlePageChange = (value) => {
        fetchPageData(value);
    };

    return (
        <Box sx={{ py: "10px", px: {md: "120px", sm: "40px", xs: "0px"} }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
                    <CategorySidebar />
                </Grid>

                <Grid item xs={12} md={9}>
                    <PageTitleText title={"생활"} />

                    {societyPageData.posts.map((post, index) => (
                        <Box key={index}>
                            <SocietyPostBox post={post} />
                        </Box>
                    ))}

                    <PostPaginationBox totalPage={societyPageData.pageSize} currentPage={societyPageData.currentPage} handlePageChange={handlePageChange} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default WholeSocietyPostPage;