import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CategorySidebar from "../../../components/bar/CategorySidebar";
import { getJobPostsByPage } from "../../../service/PostService";
import JobPostBox from "../../../components/box/post/job/JobPostBox";
import PostPaginationBox from "../../../components/box/post/PostPaginationBox";
import PageTitleText from "../../../components/texts/PageTitleText";
import { CommonPagePaddingXSize } from "../../../constant/PaddingResponsiveSize";
import JobFilter from "../../../components/box/post/job/JobFilter";

function WholeJobPostPage() {
    const [jobPageData, setJobPageData] = useState({ 
        posts: [], 
        pageSize: 1, 
        currentPage: 1 
    });

    const [filteredPosts, setFilteredPosts] = useState([]);

    const [filters, setFilters] = useState({
        jobType: "전체" // Default to 전체 (All)
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
                setFilteredPosts(data.posts); // Initialize filtered posts
            })
            .catch((error) => console.error("Error fetching posts:", error));
    };

    const handlePageChange = (value) => {
        fetchPageData(value);
    };

    const applyFilters = () => {
        const filtered = jobPageData.posts.filter((post) => {
            const jobTypeMatch = filters.jobType === "전체" || post.jobType === filters.jobType;
            return jobTypeMatch;
        });

        setFilteredPosts(filtered);
    };

    return (
        <Box sx={{ px: CommonPagePaddingXSize }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
                    <CategorySidebar />
                </Grid>

                <Grid item xs={12} md={9}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", mb: 2 }}>
                        <PageTitleText title={"구인구직"} />

                        <JobFilter filters={filters} setFilters={setFilters} applyFilters={applyFilters} />
                    </Box>

                    {/* Display Filtered Posts */}
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map((post, index) => (
                            <Box key={index}>
                                <JobPostBox post={post} />
                            </Box>
                        ))
                    ) : (
                        <Typography variant="body1">조건에 맞는 게시물이 없습니다.</Typography>
                    )}

                    <PostPaginationBox totalPage={jobPageData.pageSize} currentPage={jobPageData.currentPage} handlePageChange={handlePageChange} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default WholeJobPostPage;