import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CategorySidebar from "../../components/bar/CategorySidebar";
import { getWholeOthersPosts } from "../../service/PostService";
import PostPaginationBox from "../../components/box/post/PostPaginationBox";
import CommonOwnSummarizedPostBoxByPost from "../../components/box/post/CommonOwnSummarizedPostBoxByPost";
import { useParams } from "react-router-dom";

function OthersUploadedPostPage() {
    const { userId, username } = useParams();
    const [othersUploadedPostPageData, setOthersUploadaedPostPageData] = useState({
        posts: [],
        pageSize: 1,
        currentPage: 1
    });

    useEffect(() => {
        fetchPageData(1);
    }, []);

    const fetchPageData = (page) => {
        getWholeOthersPosts(page, userId)
            .then((data) => {
                setOthersUploadaedPostPageData({
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
        <Box sx={{ py: "10px", px: { md: "120px", sm: "40px", xs: "0px" } }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
                    <CategorySidebar />
                </Grid>

                <Grid item xs={12} md={9}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                        {username}님이 올린 게시물
                    </Typography>

                    {othersUploadedPostPageData.posts.map((post, index) => (
                        <CommonOwnSummarizedPostBoxByPost post={post} />
                    ))}
                    
                    <PostPaginationBox totalPage={othersUploadedPostPageData.pageSize} currentPage={othersUploadedPostPageData.currentPage} handlePageChange={handlePageChange} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default OthersUploadedPostPage;