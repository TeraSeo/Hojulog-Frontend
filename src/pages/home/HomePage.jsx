import React, { useEffect, useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { getPostsByPageNCondition } from "../../service/PostService";
import TechnologyPostBox from "../../components/box/TechnologyPostBox";
import CategorySidebar from "../../components/bar/CategorySidebar";

function HomePage() {
    const [pageData, setPageData] = useState({ posts: [], pageSize: 0, currentPage: 0, currentPagePostsCount: 0 });

    useEffect(() => {
        getPostsByPageNCondition(1, "Latest")
            .then((data) => setPageData(data))
            .catch((error) => console.error("Error fetching posts:", error));
    }, []);

    return (
        <Box sx={{ padding: "20px" }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={9}>
                    {pageData.posts.length === 0 ? (
                        <Typography variant="body1">No posts available.</Typography>
                    ) : (
                        <Grid container spacing={3}>
                            {pageData.posts.map((post, index) => (
                                <Grid item xs={12} key={index}>
                                    {post.category === "Technology" ? (
                                        <TechnologyPostBox postData={post} />
                                    ) : (
                                        <Box
                                            sx={{
                                                border: "1px solid #ddd",
                                                borderRadius: "8px",
                                                padding: 2,
                                                marginBottom: 2,
                                            }}
                                        >
                                            <Typography variant="h6" gutterBottom>
                                                {post.category}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                {post.description}
                                            </Typography>
                                        </Box>
                                    )}
                                </Grid>
                            ))}
                        </Grid>
                    )}
                </Grid>

                <Grid item xs={12} md={3} sx={{display: { xs: "none", md: "block" }}}>
                    <CategorySidebar />
                </Grid>
            </Grid>
        </Box>
    );
}

export default HomePage;