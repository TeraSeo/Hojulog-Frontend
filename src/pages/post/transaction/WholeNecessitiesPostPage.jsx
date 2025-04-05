import { Box, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CategorySidebar from "../../../components/bar/CategorySidebar";
import { getNecessitiesPostsByPage } from "../../../service/PostService";
import PostPaginationBox from "../../../components/box/post/PostPaginationBox";
import TransactionPostBox from "../../../components/box/post/transaction/TransactionPostBox";
import PageTitleText from "../../../components/texts/PageTitleText";
import { CommonPagePaddingXSize } from "../../../constant/PaddingResponsiveSize";
import TransactionFilter from "../../../components/box/post/transaction/TransactionFilter";
import TransactionNonOptionPostAddButton from "../../../components/buttons/post/transaction/TransactionNonOptionPostAddButton";

const WholeNecessitiesPostPage = () => {
    const [postPageData, setPostPageData] = useState({
        posts: [],
        pageSize: 1,
        currentPage: 1
    });

    const [selectedSortOption, setSelectedSortOption] = useState("최신순");

    const [filters, setFilters] = useState({
        transactionType: "전체",
        priceType: "전체"       
    });

    useEffect(() => {
        fetchPageData(1);
    }, []);

    const fetchPageData = (page) => {
        getNecessitiesPostsByPage(page, filters.transactionType, filters.priceType, selectedSortOption)
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
        getNecessitiesPostsByPage(1, filters.transactionType, filters.priceType, selectedSortOption)
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
        <Box sx={{ py: "10px", px: CommonPagePaddingXSize }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
                    <CategorySidebar />
                </Grid>

                <Grid item xs={12} md={9}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", mb: 2 }}>
                        <PageTitleText title={"생활용품"} />

                        <TransactionFilter filters={filters} setFilters={setFilters} selectedSortOption={selectedSortOption} setSelectedSortOption={setSelectedSortOption} applyFilters={applyFilters} />
                    </Box>

                    {postPageData.posts.length > 0 ? (
                        postPageData.posts.map((post, index) => (
                            <React.Fragment key={index}>
                                <Box>
                                    <TransactionPostBox post={post} />
                                </Box>
                                {index < postPageData.posts.length - 1 && (
                                    <Divider sx={{ my: 2 }} />
                                )}
                            </React.Fragment>
                        ))
                    ) : (
                        <Typography variant="body1">조건에 맞는 게시물이 없습니다.</Typography>
                    )}

                    <TransactionNonOptionPostAddButton subCategory={"생활용품"} />

                    <PostPaginationBox totalPage={postPageData.pageSize} currentPage={postPageData.currentPage} handlePageChange={handlePageChange} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default WholeNecessitiesPostPage;