import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import CategorySidebar from "../../../components/bar/CategorySidebar";
import { getPaginationRange } from "../../../service/PageService";
import TravelPostBox from "../../../components/box/post/travel/TravelPostBox";
import { getTravelPostsByPage } from "../../../service/PostService";
import PostPaginationBox from "../../../components/box/post/PostPaginationBox";
import PageTitleText from "../../../components/texts/PageTitleText";

function WholeTravelPostPage() {
    const [travelPageData, setTravelPageData] = useState({ 
        posts: [], 
        pageSize: 0, 
        currentPage: 0 
    });

    useEffect(() => {
        fetchPageData(1);
    }, []);

    const fetchPageData = (page) => {
        getTravelPostsByPage(page)
            .then((data) => {
                setTravelPageData({
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

    const [startPage, endPage] = getPaginationRange(travelPageData.currentPage, travelPageData.pageSize);

    return (
        <Box sx={{ py: "10px", px: {md: "120px", sm: "40px", xs: "0px"} }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
                    <CategorySidebar />
                </Grid>

                <Grid item xs={12} md={9}>
                    <PageTitleText title={"여행"} />

                    {travelPageData.posts.map((post, index) => (
                        <Box key={index}>
                            <TravelPostBox post={post} />
                        </Box>
                    ))}

                    <PostPaginationBox totalPage={endPage - startPage + 1} currentPage={travelPageData.currentPage} handlePageChange={handlePageChange} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default WholeTravelPostPage;