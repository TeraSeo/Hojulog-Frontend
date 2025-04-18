import { Box, Divider, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import CategorySidebar from "../../../components/bar/CategorySidebar";
import StudyPostBox from "../../../components/box/post/study/StudyPostBox";
import PostPaginationBox from "../../../components/box/post/PostPaginationBox";
import { getStudyPostsByPage } from "../../../service/PostService";
import PageTitleText from "../../../components/texts/PageTitleText";
import { CommonPagePaddingXSize } from "../../../constant/PaddingResponsiveSize";
import StudyAddPostButton from "../../../components/buttons/post/study/StudyAddPostButton";
import StudyFilter from "../../../components/box/post/study/StudyFilter";

function WholeStudyPostPage() {
    const [studyPageData, setStudyPageData] = useState({
        posts: [],
        pageSize: 1,
        currentPage: 1
    });

    const [selectedSortOption, setSelectedSortOption] = useState("최신순");

    useEffect(() => {
        fetchPageData(1);
    }, []);

    const fetchPageData = (page) => {
        getStudyPostsByPage(page, selectedSortOption)
            .then((data) => {
                setStudyPageData({
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
        getStudyPostsByPage(1, selectedSortOption)
            .then((data) => {
                setStudyPageData({
                    posts: data.posts,
                    pageSize: data.pageSize,
                    currentPage: 1
                });
            })
            .catch((error) => console.error("Error fetching posts:", error));
    };

    return (
        <Box sx={{ py: "10px", px: CommonPagePaddingXSize }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
                    <CategorySidebar />
                </Grid>

                <Grid item xs={12} md={9}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", mb: 2 }}>
                        <PageTitleText title={"유학"} />

                        <StudyFilter selectedSortOption={selectedSortOption} setSelectedSortOption={setSelectedSortOption} applyFilters={applyFilters} />
                    </Box>

                    {studyPageData.posts.map((post, index) => (
                        <React.Fragment key={index}>
                            <Box>
                                <StudyPostBox post={post} />
                            </Box>
                            {index < studyPageData.posts.length - 1 && (
                                <Divider sx={{ my: 2 }} />
                            )}
                        </React.Fragment>
                    ))}

                    <StudyAddPostButton />
                    
                    <PostPaginationBox totalPage={studyPageData.pageSize} currentPage={studyPageData.currentPage} handlePageChange={handlePageChange} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default WholeStudyPostPage;