import { Box, Divider, Grid, FormControl, InputLabel, Select, MenuItem, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import CategorySidebar from "../../../components/bar/CategorySidebar";
import { getTransactionEtcPostsByPage } from "../../../service/PostService";
import PostPaginationBox from "../../../components/box/post/PostPaginationBox";
import TransactionPostBox from "../../../components/box/post/transaction/TransactionPostBox";
import PageTitleText from "../../../components/texts/PageTitleText";
import { CommonPagePaddingXSize } from "../../../constant/PaddingResponsiveSize";
import { primaryColor } from "../../../constant/Color";

const WholeTransactionEtcPostPage = () => {
    const [postPageData, setPostPageData] = useState({
        posts: [],
        pageSize: 1,
        currentPage: 1
    });

    const [filteredPosts, setFilteredPosts] = useState([]);

    const [filters, setFilters] = useState({
        transactionType: "전체", // 구매, 판매, 전체
        priceType: "전체"        // 무료, 유료, 전체
    });

    useEffect(() => {
        fetchPageData(1);
    }, []);

    const fetchPageData = (page) => {
        getTransactionEtcPostsByPage(page)
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
            const transactionMatch = filters.transactionType === "전체" || post.transactionType === filters.transactionType;
            const priceMatch = filters.priceType === "전체" || 
                (filters.priceType === post.priceType) ||
                (filters.priceType === post.priceType);

            return transactionMatch && priceMatch;
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
                        <PageTitleText title={"기타"} />

                        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", alignItems: "center" }}>
                            {/* Transaction Type Filter */}
                            <FormControl size="small">
                                <InputLabel id="transaction-type-label">거래 유형</InputLabel>
                                <Select
                                    labelId="transaction-type-label"
                                    name="transactionType"
                                    value={filters.transactionType}
                                    onChange={handleFilterChange}
                                    label="거래 유형"
                                >
                                    <MenuItem value="전체">전체</MenuItem>
                                    <MenuItem value="구매">구매</MenuItem>
                                    <MenuItem value="판매">판매</MenuItem>
                                </Select>
                            </FormControl>

                            {/* Price Type Filter */}
                            <FormControl size="small">
                                <InputLabel id="price-type-label">가격 여부</InputLabel>
                                <Select
                                    labelId="price-type-label"
                                    name="priceType"
                                    value={filters.priceType}
                                    onChange={handleFilterChange}
                                    label="가격 여부"
                                >
                                    <MenuItem value="전체">전체</MenuItem>
                                    <MenuItem value="무료">무료</MenuItem>
                                    <MenuItem value="유료">유료</MenuItem>
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
                                    <TransactionPostBox post={post} />
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
}

export default WholeTransactionEtcPostPage;