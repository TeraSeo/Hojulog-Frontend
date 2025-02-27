import { Box, Grid, FormControl, InputLabel, Select, MenuItem, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import CategorySidebar from "../../../components/bar/CategorySidebar";
import { getJobSeekingPostsByPage } from "../../../service/PostService";
import PostPaginationBox from "../../../components/box/post/PostPaginationBox";
import JobPostBox from "../../../components/box/post/job/JobPostBox";
import PageTitleText from "../../../components/texts/PageTitleText";
import { CommonPagePaddingXSize } from "../../../constant/PaddingResponsiveSize";
import { primaryColor } from "../../../constant/Color";

const WholeJobSeekingPostPage = () => {
    const [postPageData, setPostPageData] = useState({
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
        getJobSeekingPostsByPage(page)
            .then((data) => {
                setPostPageData({
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

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value
        }));
    };

    const applyFilters = () => {
        const filtered = postPageData.posts.filter((post) => {
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
                        <PageTitleText title={"구직"} />

                        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", alignItems: "center" }}>
                            {/* Job Type Filter */}
                            <FormControl size="small">
                                <InputLabel id="job-type-label">근무 형태</InputLabel>
                                <Select
                                    labelId="job-type-label"
                                    name="jobType"
                                    value={filters.jobType}
                                    onChange={handleFilterChange}
                                    label="근무 형태"
                                >
                                    <MenuItem value="전체">전체</MenuItem>
                                    <MenuItem value="단기알바">단기알바</MenuItem>
                                    <MenuItem value="파트타임">파트타임</MenuItem>
                                    <MenuItem value="풀타임">풀타임</MenuItem>
                                </Select>
                            </FormControl>

                            {/* Apply Filters Button */}
                            <Button variant="contained" sx={{ background: primaryColor }} onClick={applyFilters}>
                                필터 적용
                            </Button>
                        </Box>
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

                    <PostPaginationBox totalPage={postPageData.pageSize} currentPage={postPageData.currentPage} handlePageChange={handlePageChange} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default WholeJobSeekingPostPage;