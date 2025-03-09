import { Box, Grid, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CategorySidebar from "../../../components/bar/CategorySidebar";
import { getTransactionPostsByPage } from "../../../service/PostService";
import TransactionPostBox from "../../../components/box/post/transaction/TransactionPostBox";
import PostPaginationBox from "../../../components/box/post/PostPaginationBox";
import PageTitleText from "../../../components/texts/PageTitleText";
import { CommonPagePaddingXSize } from "../../../constant/PaddingResponsiveSize";
import TransactionFilter from "../../../components/box/post/transaction/TransactionFilter";

function WholeTransactionPostPage() {
    const [transactionPageData, setTransactionPageData] = useState({
        posts: [],
        pageSize: 0,
        currentPage: 0
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
        getTransactionPostsByPage(page)
            .then((data) => {
                setTransactionPageData({
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
        const filtered = transactionPageData.posts.filter((post) => {
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
                        <PageTitleText title={"사고팔기"} />

                        <TransactionFilter filters={filters} setFilters={setFilters} applyFilters={applyFilters} />
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

                    <PostPaginationBox totalPage={transactionPageData.pageSize} currentPage={transactionPageData.currentPage} handlePageChange={handlePageChange} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default WholeTransactionPostPage;