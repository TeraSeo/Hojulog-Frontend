import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CategorySidebar from "../../components/bar/CategorySidebar";
import { getWholeOthersArticles, getWholeOthersPosts } from "../../service/PostService";
import PostPaginationBox from "../../components/box/post/PostPaginationBox";
import { useParams } from "react-router-dom";
import { CommonPagePaddingXSize } from "../../constant/PaddingResponsiveSize";
import CommonOthersSummarizedPostBoxByPost from "../../components/box/post/CommonOthersSummarizedPostBoxByPost";

function OthersUploadedArticlePage() {
    const { userId, username } = useParams();
    const [othersUploadedArticlePageData, setOthersUploadaedArticlePageData] = useState({
        posts: [],
        pageSize: 1,
        currentPage: 1
    });

    useEffect(() => {
        fetchPageData(1);
    }, []);

    const fetchPageData = (page) => {
        getWholeOthersArticles(page, userId)
            .then((data) => {
                setOthersUploadaedArticlePageData({
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
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                        {username}님이 올린 게시글
                    </Typography>

                    {othersUploadedArticlePageData.posts.map((post) => (
                        <CommonOthersSummarizedPostBoxByPost post={post} />
                    ))}
                    
                    <PostPaginationBox totalPage={othersUploadedArticlePageData.pageSize} currentPage={othersUploadedArticlePageData.currentPage} handlePageChange={handlePageChange} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default OthersUploadedArticlePage;