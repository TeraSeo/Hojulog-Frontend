import { Box, Divider, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import CategorySidebar from "../../../components/bar/CategorySidebar";
import { getWorldCupPostsBySubCategoryNPage } from "../../../service/PostService";
import PostPaginationBox from "../../../components/box/post/PostPaginationBox";
import PageTitleText from "../../../components/texts/PageTitleText";
import { CommonPagePaddingXSize } from "../../../constant/PaddingResponsiveSize";
import WorldCupPostBox from "../../../components/box/post/world-cup/WorldCupPostBox";
import AussieChoiceNonOptionAddPostButton from "../../../components/buttons/post/aussie-choice/AussieChoiceNonOptionAddPostButton";

function WholeStudyWorldCupPostPage() {
    const [worldCupPageData, setWorldCupPageData] = useState({
        posts: [],
        pageSize: 1,
        currentPage: 1
    });

    useEffect(() => {
        fetchPageData(1);
    }, []);

    const fetchPageData = (page) => {
        getWorldCupPostsBySubCategoryNPage("유학", page)
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

    return (
        <Box sx={{ px: CommonPagePaddingXSize }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
                    <CategorySidebar />
                </Grid>

                <Grid item xs={12} md={9}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", mb: 2 }}>
                        <PageTitleText title={"유학 Aussie Choice"} />
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

                    <AussieChoiceNonOptionAddPostButton subCategory={"유학"} />

                    <PostPaginationBox totalPage={worldCupPageData.pageSize} currentPage={worldCupPageData.currentPage} handlePageChange={handlePageChange} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default WholeStudyWorldCupPostPage;
