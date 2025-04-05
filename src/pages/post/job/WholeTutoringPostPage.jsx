import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CategorySidebar from "../../../components/bar/CategorySidebar";
import { getJobTutoringPostsByPage } from "../../../service/PostService";
import PostPaginationBox from "../../../components/box/post/PostPaginationBox";
import JobPostBox from "../../../components/box/post/job/JobPostBox";
import PageTitleText from "../../../components/texts/PageTitleText";
import { CommonPagePaddingXSize } from "../../../constant/PaddingResponsiveSize";
import JobFilter from "../../../components/box/post/job/JobFilter";
import JobNonOptionPostAddButton from "../../../components/buttons/post/job/JobNonOptionPostAddButton";

const WholeTutoringPostPage = () => {
    const [postPageData, setPostPageData] = useState({
        posts: [],
        pageSize: 1,
        currentPage: 1
    });

    const [selectedSortOption, setSelectedSortOption] = useState("최신순"); 

    const [filters, setFilters] = useState({
        jobType: "전체"
    });

    useEffect(() => {
        fetchPageData(1);
    }, []);

    const fetchPageData = (page) => {
        getJobTutoringPostsByPage(page, filters.jobType, selectedSortOption)
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

    const applyFilters = () => {
        getJobTutoringPostsByPage(1, filters.jobType, selectedSortOption)
            .then((data) => {
                setPostPageData({
                    posts: data.posts,
                    pageSize: data.pageSize,
                    currentPage: 1
                });
            })
            .catch((error) => console.error("Error fetching posts:", error));
    };

    return (
        <Box sx={{ px: CommonPagePaddingXSize }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
                    <CategorySidebar />
                </Grid>

                <Grid item xs={12} md={9}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", mb: 2 }}>
                        <PageTitleText title={"과외"} />

                        <JobFilter filters={filters} setFilters={setFilters} selectedSortOption={selectedSortOption} setSelectedSortOption={setSelectedSortOption} applyFilters={applyFilters} />
                    </Box>

                    {/* Display Filtered Posts */}
                    {postPageData.posts.length > 0 ? (
                        postPageData.posts.map((post, index) => (
                            <Box key={index}>
                                <JobPostBox post={post} />
                            </Box>
                        ))
                    ) : (
                        <Typography variant="body1">조건에 맞는 게시물이 없습니다.</Typography>
                    )}

                    <JobNonOptionPostAddButton subCategory={"과외"} />

                    <PostPaginationBox totalPage={postPageData.pageSize} currentPage={postPageData.currentPage} handlePageChange={handlePageChange} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default WholeTutoringPostPage;