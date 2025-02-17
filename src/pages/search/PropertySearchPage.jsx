import { Box, Divider, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchPropertyPost } from "../../service/PostService";
import { CommonPagePaddingXSize } from "../../constant/PaddingResponsiveSize";
import CategorySidebar from "../../components/bar/CategorySidebar";
import PageTitleText from "../../components/texts/PageTitleText";
import PropertyPostBox from "../../components/box/post/property/PropertyPostBox";
import PostPaginationBox from "../../components/box/post/PostPaginationBox";

const PropertySearchPage = () => {
    const { title, suburb, subCategory, keywords } = useParams();

    const searchTitle = title !== "none" ? decodeURIComponent(title) : "";
    const searchSuburb = suburb !== "none" ? decodeURIComponent(suburb) : "";
    const searchSubCategory = subCategory !== "none" ? decodeURIComponent(subCategory) : "";
    const searchKeywords = keywords !== "none" ? keywords.split(",") : []; 

    const [propertyPageData, setPropertyPageData] = useState({
        posts: [],
        pageSize: 1,
        currentPage: 1
    });

    useEffect(() => {
        fetchPageData(1);
    }, [title, suburb, subCategory, keywords]);

    const fetchPageData = (page) => {
        searchPropertyPost(searchTitle, searchSubCategory, searchSuburb, searchKeywords, page)
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
        <Box sx={{ px: CommonPagePaddingXSize }}>
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

export default PropertySearchPage;