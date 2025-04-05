import { Box, Divider, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import CategorySidebar from "../../../components/bar/CategorySidebar";
import { getWorldCupPostsBySubCategoryNPage } from "../../../service/PostService";
import PostPaginationBox from "../../../components/box/post/PostPaginationBox";
import PageTitleText from "../../../components/texts/PageTitleText";
import { CommonPagePaddingXSize } from "../../../constant/PaddingResponsiveSize";
import WorldCupPostBox from "../../../components/box/post/world-cup/WorldCupPostBox";
import AussieChoiceNonOptionAddPostButton from "../../../components/buttons/post/aussie-choice/AussieChoiceNonOptionAddPostButton";
import WorldCupFilter from "../../../components/box/post/world-cup/WorldCupFilter";

function WholeSocietyWorldCupPostPage() {
    const [worldCupPageData, setWorldCupPageData] = useState({
        posts: [],
        pageSize: 1,
        currentPage: 1
    });

    const [selectedSortOption, setSelectedSortOption] = useState("최신순");

    useEffect(() => {
        fetchPageData(1);
    }, []);

    const fetchPageData = (page) => {
        getWorldCupPostsBySubCategoryNPage("생활", page, selectedSortOption)
            .then((data) => {
                setWorldCupPageData({
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
        getWorldCupPostsBySubCategoryNPage("생활", 1, selectedSortOption)
            .then((data) => {
                setWorldCupPageData({
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
                        <PageTitleText title={"생활 Aussie Choice"} />

                        <WorldCupFilter selectedSortOption={selectedSortOption} setSelectedSortOption={setSelectedSortOption} applyFilters={applyFilters} />
                    </Box>
                  
                    {worldCupPageData.posts.map((post, index) => (
                        <React.Fragment key={index}>
                            <Box>
                                <WorldCupPostBox post={post} />
                            </Box>
                            {index < worldCupPageData.posts.length - 1 && (
                                <Divider sx={{ my: 2 }} />
                            )}
                        </React.Fragment>
                    ))}

                    <AussieChoiceNonOptionAddPostButton subCategory={"생활"} />

                    <PostPaginationBox totalPage={worldCupPageData.pageSize} currentPage={worldCupPageData.currentPage} handlePageChange={handlePageChange} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default WholeSocietyWorldCupPostPage;