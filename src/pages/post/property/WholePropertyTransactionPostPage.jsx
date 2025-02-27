import { Box, Divider, Grid, TextField, MenuItem, Select, InputLabel, FormControl, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import CategorySidebar from "../../../components/bar/CategorySidebar";
import { getPropertyTransactionPostsByPage } from "../../../service/PostService";
import PropertyPostBox from "../../../components/box/post/property/PropertyPostBox";
import PostPaginationBox from "../../../components/box/post/PostPaginationBox";
import PageTitleText from "../../../components/texts/PageTitleText";
import { CommonPagePaddingXSize } from "../../../constant/PaddingResponsiveSize";
import { primaryColor } from "../../../constant/Color";

const WholePropertyTransactionPostPage = () => {
    const [postPageData, setPostPageData] = useState({
        posts: [],
        pageSize: 1,
        currentPage: 1
    });

    const [filteredPosts, setFilteredPosts] = useState([]);

    const [filters, setFilters] = useState({
        minPrice: "",
        maxPrice: "",
        period: "전체" 
    });

    const [priceError, setPriceError] = useState(""); 

    useEffect(() => {
        fetchPageData(1);
    }, []);

    const fetchPageData = (page) => {
        getPropertyTransactionPostsByPage(page)
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

        let updatedFilters = { ...filters, [name]: value };

        // Validate Price Range
        if (name === "minPrice" && updatedFilters.maxPrice !== "" && Number(value) > Number(updatedFilters.maxPrice)) {
            setPriceError("최소 가격은 최대 가격보다 클 수 없습니다.");
        } else if (name === "maxPrice" && updatedFilters.minPrice !== "" && Number(value) < Number(updatedFilters.minPrice)) {
            setPriceError("최대 가격은 최소 가격보다 작을 수 없습니다.");
        } else {
            setPriceError("");
        }

        setFilters(updatedFilters);
    };

    const applyFilters = () => {
        if (priceError) {
            alert("가격 범위를 확인해주세요.");
            return;
        }

        const filtered = postPageData.posts.filter((post) => {
            const price = Number(post.price);
            const minPrice = filters.minPrice ? Number(filters.minPrice) : 0;
            const maxPrice = filters.maxPrice ? Number(filters.maxPrice) : Infinity;
            const periodMatch = filters.period === "전체" || post.period === filters.period;

            return price >= minPrice && price <= maxPrice && periodMatch;
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
                        <PageTitleText title={"매매"} />

                        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", alignItems: "center" }}>
                            {/* Price Range Filter */}
                            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                                <TextField
                                    label="최소 가격"
                                    variant="outlined"
                                    size="small"
                                    name="minPrice"
                                    value={filters.minPrice}
                                    onChange={handleFilterChange}
                                    type="number"
                                    error={Boolean(priceError)}
                                    helperText={priceError && filters.minPrice ? priceError : ""}
                                />
                                <Typography>~</Typography>
                                <TextField
                                    label="최대 가격"
                                    variant="outlined"
                                    size="small"
                                    name="maxPrice"
                                    value={filters.maxPrice}
                                    onChange={handleFilterChange}
                                    type="number"
                                    error={Boolean(priceError)}
                                    helperText={priceError && filters.maxPrice ? priceError : ""}
                                />
                            </Box>

                            {/* Period Filter */}
                            <FormControl size="small">
                                <InputLabel id="period-label">기간</InputLabel>
                                <Select
                                    labelId="period-label"
                                    name="period"
                                    value={filters.period}
                                    onChange={handleFilterChange}
                                    label="기간"
                                >
                                    <MenuItem value="전체">전체</MenuItem>
                                    <MenuItem value="주">주</MenuItem>
                                    <MenuItem value="월">월</MenuItem>
                                    <MenuItem value="년">년</MenuItem>
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
                            <React.Fragment key={index}>
                                <Box>
                                    <PropertyPostBox post={post} />
                                </Box>
                                {index < filteredPosts.length - 1 && (
                                    <Divider sx={{ my: 2 }} />
                                )}
                            </React.Fragment>
                        ))
                    ) : (
                        <Typography variant="body1">조건에 맞는 게시물이 없습니다.</Typography>
                    )}

                    <PostPaginationBox totalPage={postPageData.pageSize} currentPage={postPageData.currentPage} handlePageChange={handlePageChange} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default WholePropertyTransactionPostPage;