import { Box, Divider, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import CategorySidebar from "../../../components/bar/CategorySidebar";
import { getPropertyPostsByPage } from "../../../service/PostService";
import PropertyPostBox from "../../../components/box/post/property/PropertyPostBox";
import PostPaginationBox from "../../../components/box/post/PostPaginationBox";
import PageTitleText from "../../../components/texts/PageTitleText";

function WholePropertyPostPage() {
    const [propertyPageData, setPropertyPageData] = useState({
        posts: [],
        pageSize: 1,
        currentPage: 1
    });

    useEffect(() => {
        fetchPageData(1);
    }, []);

    const fetchPageData = (page) => {
        getPropertyPostsByPage(page)
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

    return (
        <Box sx={{ px: { md: "120px", sm: "40px", xs: "0px" } }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
                    <CategorySidebar />
                </Grid>

                <Grid item xs={12} md={9}>
                    <PageTitleText title={"부동산"} />

                    {propertyPageData.posts.map((post, index) => (
                        <React.Fragment key={index}>
                            <Box>
                                <PropertyPostBox post={post} />
                            </Box>
                            {index < propertyPageData.posts.length - 1 && (
                                <Divider sx={{ my: 2 }} />
                            )}
                        </React.Fragment>
                    ))}
                    
                    <PostPaginationBox totalPage={propertyPageData.pageSize} currentPage={propertyPageData.currentPage} handlePageChange={handlePageChange} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default WholePropertyPostPage;
