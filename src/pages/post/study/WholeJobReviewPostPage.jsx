import { Box, Divider, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import CategorySidebar from "../../../components/bar/CategorySidebar";
import { getJobReviewPostsByPage } from "../../../service/PostService";
import PostPaginationBox from "../../../components/box/post/PostPaginationBox";
import StudyPostBox from "../../../components/box/post/study/StudyPostBox";
import PageTitleText from "../../../components/texts/PageTitleText";

const WholeJobReviewPostPage = () => {
    const [postPageData, setPostPageData] = useState({
        posts: [],
        pageSize: 1,
        currentPage: 1
    });

    useEffect(() => {
        fetchPageData(1);
    }, []);

    const fetchPageData = (page) => {
        getJobReviewPostsByPage(page)
            .then((data) => {
                setPostPageData({
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
                    <PageTitleText title={"취업후기"} />

                    {postPageData.posts.map((post, index) => (
                        <React.Fragment key={index}>
                            <Box>
                                <StudyPostBox post={post} />
                            </Box>
                            {index < postPageData.posts.length - 1 && (
                                <Divider sx={{ my: 2 }} />
                            )}
                        </React.Fragment>
                    ))}
                    
                    <PostPaginationBox totalPage={postPageData.pageSize} currentPage={postPageData.currentPage} handlePageChange={handlePageChange} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default WholeJobReviewPostPage;