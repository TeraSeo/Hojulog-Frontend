import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CategorySidebar from "../../../components/bar/CategorySidebar";
import { getCoursePostsByPage } from "../../../service/PostService";
import PostPaginationBox from "../../../components/box/post/PostPaginationBox";
import TravelPostBox from "../../../components/box/post/travel/TravelPostBox";
import PageTitleText from "../../../components/texts/PageTitleText";
import { CommonPagePaddingXSize } from "../../../constant/PaddingResponsiveSize";
import TravelFilter from "../../../components/box/post/travel/TravelFilter";

const WholeCoursePostPage = () => {
    const [postPageData, setPostPageData] = useState({
        posts: [],
        pageSize: 1,
        currentPage: 1
    });

    const [filteredPosts, setFilteredPosts] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("전체");

    useEffect(() => {
        fetchPageData(1);
    }, []);

    const fetchPageData = (page) => {
        getCoursePostsByPage(page)
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

    const applyFilters = () => {
        const filtered = postPageData.posts.filter((post) => {
            return selectedCountry === "전체" || post.country === selectedCountry;
        });

        setFilteredPosts(filtered);
    };

    return (
        <Box sx={{ py: "10px", px: CommonPagePaddingXSize }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
                    <CategorySidebar />
                </Grid>

                <Grid item xs={12} md={9}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", mb: 2 }}>
                        <PageTitleText title={"코스"} />

                        <TravelFilter selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} applyFilters={applyFilters} />
                    </Box>

                    {/* Display Filtered Posts */}
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map((post, index) => (
                            <Box key={index}>
                                <TravelPostBox post={post} />
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

export default WholeCoursePostPage;