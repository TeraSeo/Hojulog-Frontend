import { Box, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CategorySidebar from "../../../components/bar/CategorySidebar";
import { getPropertyPostsByPage } from "../../../service/PostService";
import PropertyPostBox from "../../../components/box/post/property/PropertyPostBox";
import PostPaginationBox from "../../../components/box/post/PostPaginationBox";
import PageTitleText from "../../../components/texts/PageTitleText";
import { CommonPagePaddingXSize } from "../../../constant/PaddingResponsiveSize";
import PropertyFilter from "../../../components/box/post/property/PropertyFilter";
import PropertyAddPostButton from "../../../components/buttons/post/property/PropertyAddPostButton";

function WholePropertyPostPage() {
    const [propertyPageData, setPropertyPageData] = useState({
        posts: [],
        pageSize: 1,
        currentPage: 1
    });

    const [selectedSortOption, setSelectedSortOption] = useState("최신순");

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
        getPropertyPostsByPage(page, filters.minPrice ? Number(filters.minPrice) : -1, filters.maxPrice ? Number(filters.maxPrice) : -1, filters.period, selectedSortOption)
            .then((data) => {
                setPropertyPageData({
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
        if (priceError) {
            alert("가격 범위를 확인해주세요.");
            return;
        }

        getPropertyPostsByPage(1, filters.minPrice ? Number(filters.minPrice) : -1, filters.maxPrice ? Number(filters.maxPrice) : -1, filters.period, selectedSortOption)
            .then((data) => {
                setPropertyPageData({
                    posts: data.posts,
                    pageSize: data.pageSize,
                    currentPage: 1
                });
            })
            .catch((error) => console.error("Error fetching posts:", error));
    };

    return (
        <Box sx={{ px: CommonPagePaddingXSize }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
                    <CategorySidebar />
                </Grid>

                <Grid item xs={12} md={9}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", mb: 2 }}>
                        <PageTitleText title={"부동산"} />

                        <PropertyFilter filters={filters} setFilters={setFilters} selectedSortOption={selectedSortOption} setSelectedSortOption={setSelectedSortOption} applyFilters={applyFilters} priceError={priceError} setPriceError={setPriceError} />
                    </Box>

                    {/* Display Filtered Posts */}
                    {propertyPageData.posts.length > 0 ? (
                        propertyPageData.posts.map((post, index) => (
                            <React.Fragment key={index}>
                                <Box>
                                    <PropertyPostBox post={post} />
                                </Box>
                                {index < propertyPageData.posts.length - 1 && (
                                    <Divider sx={{ my: 2 }} />
                                )}
                            </React.Fragment>
                        ))
                    ) : (
                        <Typography variant="body1">조건에 맞는 게시물이 없습니다.</Typography>
                    )}

                    <PropertyAddPostButton />

                    <PostPaginationBox totalPage={propertyPageData.pageSize} currentPage={propertyPageData.currentPage} handlePageChange={handlePageChange} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default WholePropertyPostPage;
