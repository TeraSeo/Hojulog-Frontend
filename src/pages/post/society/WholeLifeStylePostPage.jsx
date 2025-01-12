import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CategorySidebar from "../../../components/bar/CategorySidebar";
import { getLifeStylePostsByPage } from "../../../service/PostService";
import { getPaginationRange } from "../../../service/PageService";
import PostPaginationBox from "../../../components/box/post/PostPaginationBox";
import SocietyPostBox from "../../../components/box/post/society/SocietyPostBox";

const WholeLifeStylePostPage = () => {
    const [postPageData, setPostPageData] = useState({
        posts: [],
        pageSize: 1,
        currentPage: 1
    });

    useEffect(() => {
        fetchPageData(1);
    }, []);

    const fetchPageData = (page) => {
        getLifeStylePostsByPage(page)
            .then((data) => {
                setPostPageData({
                    posts: data.posts,
                    pageSize: data.pageSize,
                    currentPage: page
                });
            })
            .catch((error) => console.error("Error fetching posts:", error));
    };

    const handlePageChange = (event, value) => {
        fetchPageData(value);
    };

    const [startPage, endPage] = getPaginationRange(postPageData.currentPage, postPageData.pageSize);

    return (
        <Box sx={{ py: "10px", px: { md: "120px", sm: "40px", xs: "0px" } }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
                    <CategorySidebar />
                </Grid>

                <Grid item xs={12} md={9}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                        라이프스타일
                    </Typography>

                    {postPageData.posts.map((post, index) => (
                        <Box key={index}>
                            <SocietyPostBox post={post} />
                        </Box>
                    ))}
                    
                    <PostPaginationBox totalPage={endPage - startPage + 1} currentPage={postPageData.currentPage} handlePageChange={handlePageChange} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default WholeLifeStylePostPage;