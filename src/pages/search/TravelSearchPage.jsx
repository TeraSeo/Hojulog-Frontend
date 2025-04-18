import { Box, Divider, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchTravelPost } from "../../service/PostService";
import { CommonPagePaddingXSize } from "../../constant/PaddingResponsiveSize";
import CategorySidebar from "../../components/bar/CategorySidebar";
import PageTitleText from "../../components/texts/PageTitleText";
import PostPaginationBox from "../../components/box/post/PostPaginationBox";
import TravelPostBox from "../../components/box/post/travel/TravelPostBox";

const TravelSearchPage = () => {
    const { title, subCategory, keywords } = useParams();

    const searchTitle = title !== "none" ? decodeURIComponent(title) : "";
    const searchSubCategory = subCategory !== "none" ? decodeURIComponent(subCategory) : "";
    const searchKeywords = keywords !== "none" ? keywords.split(",") : []; 

    const [travelPageData, setTravelPageData] = useState({
        posts: [],
        pageSize: 1,
        currentPage: 1
    });

    useEffect(() => {
        fetchPageData(1);
    }, [title, subCategory, keywords]);

    const fetchPageData = (page) => {
        searchTravelPost(searchTitle, searchSubCategory, searchKeywords, page)
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

    return (
        <Box sx={{ px: CommonPagePaddingXSize }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
                    <CategorySidebar />
                </Grid>

                <Grid item xs={12} md={9}>
                    <PageTitleText title={"여행"} />

                    {travelPageData.posts.map((post, index) => (
                        <React.Fragment key={index}>
                            <Box>
                                <TravelPostBox post={post} />
                            </Box>
                            {index < travelPageData.posts.length - 1 && (
                                <Divider sx={{ my: 2 }} />
                            )}
                        </React.Fragment>
                    ))}
                    
                    <PostPaginationBox totalPage={travelPageData.pageSize} currentPage={travelPageData.currentPage} handlePageChange={handlePageChange} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default TravelSearchPage;