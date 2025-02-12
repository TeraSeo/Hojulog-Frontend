import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CategorySidebar from "../../components/bar/CategorySidebar";
import { getWholeOwnPosts } from "../../service/PostService";
import PostPaginationBox from "../../components/box/post/PostPaginationBox";
import CommonOwnSummarizedPostBoxByPost from "../../components/box/post/CommonOwnSummarizedPostBoxByPost";
import { CommonPagePaddingXSize } from "../../constant/PaddingResponsiveSize";
import { TitleResponsiveFontSize1 } from "../../constant/FontSizeResponsive";

function UploadedPostPage() {
    const [uploadedPostPageData, setUploadaedPostPageData] = useState({
        posts: [],
        pageSize: 1,
        currentPage: 1
    });

    useEffect(() => {
        fetchPageData(1);
    }, []);

    const fetchPageData = (page) => {
        getWholeOwnPosts(page)
            .then((data) => {
                setUploadaedPostPageData({
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
        <Box sx={{ py: "10px", px: CommonPagePaddingXSize }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
                    <CategorySidebar />
                </Grid>

                <Grid item xs={12} md={9}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1, fontSize: TitleResponsiveFontSize1 }}>
                        내가 올린 게시물
                    </Typography>

                    {uploadedPostPageData.posts.map((post, index) => (
                        <CommonOwnSummarizedPostBoxByPost post={post} />
                    ))}
                    
                    <PostPaginationBox totalPage={uploadedPostPageData.pageSize} currentPage={uploadedPostPageData.currentPage} handlePageChange={handlePageChange} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default UploadedPostPage;