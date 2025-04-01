import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CategorySidebar from "../../../components/bar/CategorySidebar";
import TravelPostBox from "../../../components/box/post/travel/TravelPostBox";
import { getTravelPostsByPage } from "../../../service/PostService";
import PostPaginationBox from "../../../components/box/post/PostPaginationBox";
import PageTitleText from "../../../components/texts/PageTitleText";
import { CommonPagePaddingXSize } from "../../../constant/PaddingResponsiveSize";
import TravelFilter from "../../../components/box/post/travel/TravelFilter";
import TravelAddPostButton from "../../../components/buttons/post/travel/TravelAddPostButton";

function WholeTravelPostPage() {
    const [travelPageData, setTravelPageData] = useState({ 
        posts: [], 
        pageSize: 0, 
        currentPage: 0 
    });

    const [selectedTravelSuburb, setSelectedTravelSuburb] = useState("전체");

    useEffect(() => {
        fetchPageData(1);
    }, []);

    const fetchPageData = (page) => {
        getTravelPostsByPage(page, selectedTravelSuburb)
            .then((data) => {
                setTravelPageData({
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
        getTravelPostsByPage(1, selectedTravelSuburb)
            .then((data) => {
                setTravelPageData({
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
                        <PageTitleText title={"여행"} />

                        <TravelFilter selectedTravelSuburb={selectedTravelSuburb} setSelectedTravelSuburb={setSelectedTravelSuburb} applyFilters={applyFilters} />
                    </Box>

                    {travelPageData.posts.length > 0 ? (
                        travelPageData.posts.map((post, index) => (
                            <Box key={index}>
                                <TravelPostBox post={post} />
                            </Box>
                        ))
                    ) : (
                        <Typography variant="body1">조건에 맞는 게시물이 없습니다.</Typography>
                    )}

                    <TravelAddPostButton />

                    <PostPaginationBox totalPage={travelPageData.pageSize} currentPage={travelPageData.currentPage} handlePageChange={handlePageChange} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default WholeTravelPostPage;