import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import CategorySidebar from "../../../components/bar/CategorySidebar";
import { getSocietyPostsByPage } from "../../../service/PostService";
import SocietyPostBox from "../../../components/box/post/society/SocietyPostBox";
import PostPaginationBox from "../../../components/box/post/PostPaginationBox";
import PageTitleText from "../../../components/texts/PageTitleText";
import { CommonPagePaddingXSize } from "../../../constant/PaddingResponsiveSize";
import SocietyAddPostButton from "../../../components/buttons/post/society/SocietyAddPostPage";
import SocietyFilter from "../../../components/box/post/society/SocietyFilter";

function WholeSocietyPostPage() {
    const [societyPageData, setSocietyPageData] = useState({ 
        posts: [], 
        pageSize: 0, 
        currentPage: 0 
    });

    const [selectedSortOption, setSelectedSortOption] = useState("최신순");

    useEffect(() => {
        fetchPageData(1);
    }, []);

    const fetchPageData = (page) => {
        getSocietyPostsByPage(page, selectedSortOption)
            .then((data) => {
                setSocietyPageData({
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
        getSocietyPostsByPage(1, selectedSortOption)
            .then((data) => {
                setSocietyPageData({
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
                        <PageTitleText title={"생활"} />

                        <SocietyFilter selectedSortOption={selectedSortOption} setSelectedSortOption={setSelectedSortOption} applyFilters={applyFilters} />
                    </Box>

                    {societyPageData.posts.map((post, index) => (
                        <Box key={index}>
                            <SocietyPostBox post={post} />
                        </Box>
                    ))}

                    <SocietyAddPostButton />

                    <PostPaginationBox totalPage={societyPageData.pageSize} currentPage={societyPageData.currentPage} handlePageChange={handlePageChange} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default WholeSocietyPostPage;