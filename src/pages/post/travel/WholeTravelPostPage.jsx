import { Box, Grid, FormControl, InputLabel, Select, MenuItem, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import CategorySidebar from "../../../components/bar/CategorySidebar";
import TravelPostBox from "../../../components/box/post/travel/TravelPostBox";
import { getTravelPostsByPage } from "../../../service/PostService";
import PostPaginationBox from "../../../components/box/post/PostPaginationBox";
import PageTitleText from "../../../components/texts/PageTitleText";
import { CommonPagePaddingXSize } from "../../../constant/PaddingResponsiveSize";
import { primaryColor } from "../../../constant/Color";
import countries from "../../../constant/Countries";

function WholeTravelPostPage() {
    const [travelPageData, setTravelPageData] = useState({ 
        posts: [], 
        pageSize: 0, 
        currentPage: 0 
    });

    const [filteredPosts, setFilteredPosts] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("전체");

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
                setFilteredPosts(data.posts); // Initialize filtered posts
            })
            .catch((error) => console.error("Error fetching posts:", error));
    };

    const handlePageChange = (value) => {
        fetchPageData(value);
    };

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
    };

    const applyFilters = () => {
        const filtered = travelPageData.posts.filter((post) => {
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
                        <PageTitleText title={"여행"} />

                        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", alignItems: "center" }}>
                            {/* Country Filter */}
                            <FormControl size="small" sx={{ minWidth: 150 }}>
                                <InputLabel id="country-label">국가</InputLabel>
                                <Select
                                    labelId="country-label"
                                    value={selectedCountry}
                                    onChange={handleCountryChange}
                                    label="국가"
                                >
                                    <MenuItem value="전체">전체</MenuItem>
                                    {countries.map((country, index) => (
                                        <MenuItem key={index} value={country}>{country}</MenuItem>
                                    ))}
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
                                <TravelPostBox post={post} />
                            </Box>
                        ))
                    ) : (
                        <Typography variant="body1">조건에 맞는 게시물이 없습니다.</Typography>
                    )}

                    <PostPaginationBox totalPage={travelPageData.pageSize} currentPage={travelPageData.currentPage} handlePageChange={handlePageChange} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default WholeTravelPostPage;