import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CategorySidebar from "../../components/bar/CategorySidebar";
import { getWholeOwnArticles } from "../../service/PostService";
import PostPaginationBox from "../../components/box/post/PostPaginationBox";
import { CommonPagePaddingXSize } from "../../constant/PaddingResponsiveSize";
import { TitleResponsiveFontSize1 } from "../../constant/FontSizeResponsive";
import CommonOwnSummarizedArticleBoxByPost from "../../components/box/post/CommonOwnSummarizedArticleBoxByPost";

function UploadArticlePage() {
    const [uploadedArticlePageData, setUploadaedArticlePageData] = useState({
        posts: [],
        pageSize: 1,
        currentPage: 1
    });

    useEffect(() => {
        fetchPageData(1);
    }, []);

    const fetchPageData = (page) => {
        getWholeOwnArticles(page)
            .then((data) => {
                setUploadaedArticlePageData({
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
                        내가 올린 게시글
                    </Typography>

                    {uploadedArticlePageData.posts.map((post, index) => (
                        <CommonOwnSummarizedArticleBoxByPost post={post} />
                    ))}
                    
                    <PostPaginationBox totalPage={uploadedArticlePageData.pageSize} currentPage={uploadedArticlePageData.currentPage} handlePageChange={handlePageChange} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default UploadArticlePage;