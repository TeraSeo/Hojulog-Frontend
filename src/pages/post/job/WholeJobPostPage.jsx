import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CategorySidebar from "../../../components/bar/CategorySidebar";
import { getJobPostsByPage } from "../../../service/PostService";
import JobPostBox from "../../../components/box/post/job/JobPostBox";
import PostPaginationBox from "../../../components/box/post/PostPaginationBox";
import { getPaginationRange } from "../../../service/PageService";

function WholeJobPostPage() {
    const [jobPageData, setJobPageData] = useState({ 
        posts: [], 
        pageSize: 1, 
        currentPage: 1 
    });

    useEffect(() => {
        fetchPageData(1);
    }, []);

    const fetchPageData = (page) => {
        getJobPostsByPage(page)
            .then((data) => {
                setJobPageData({
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

    const [startPage, endPage] = getPaginationRange(jobPageData.currentPage, jobPageData.pageSize);

    return (
        <Box sx={{ py: "10px", px: {md: "120px", sm: "40px", xs: "0px"} }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
                    <CategorySidebar />
                </Grid>

                <Grid item xs={12} md={9}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                        구인구직
                    </Typography>
                    
                    {jobPageData.posts.map((post, index) => (
                        <Box key={index}>
                            <JobPostBox post={post} />
                        </Box>
                    ))}

                    <PostPaginationBox totalPage={endPage - startPage + 1} currentPage={jobPageData.currentPage} handlePageChange={handlePageChange} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default WholeJobPostPage;