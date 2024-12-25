import { Box, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CategorySidebar from "../../../components/bar/CategorySidebar";
import { getPropertyPostsByPage } from "../../../service/PostService";
import PropertyPostBox from "../../../components/box/post/property/PropertyPostBox";
import { getPaginationRange } from "../../../service/PageService";
import PostPaginationBox from "../../../components/box/post/PostPaginationBox";

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

    const handlePageChange = (event, value) => {
        fetchPageData(value);
    };

    const [startPage, endPage] = getPaginationRange(propertyPageData.currentPage, propertyPageData.pageSize);

    return (
        <Box sx={{ py: "10px", px: { md: "120px", sm: "40px", xs: "0px" } }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
                    <CategorySidebar />
                </Grid>

                <Grid item xs={12} md={9}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                        부동산
                    </Typography>

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
                    
                    <PostPaginationBox totalPage={endPage - startPage + 1} currentPage={propertyPageData.currentPage} handlePageChange={handlePageChange} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default WholePropertyPostPage;
