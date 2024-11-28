import React, { useEffect, useState } from "react";
import { Box, Typography, Card, CardContent, CardMedia, Grid } from "@mui/material";
import { getWholePosts } from "../../service/PostService";

function HomePage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getWholePosts().then((data) => setPosts(data));
    }, []);

    return (
        <Box sx={{ padding: "20px" }}>
            <Typography variant="h4" gutterBottom>
                Posts
            </Typography>
            {posts.length === 0 ? (
                <Typography variant="body1">No posts available.</Typography>
            ) : (
                <Grid container spacing={3}>
                    {posts.map((post) => (
                        <Grid item xs={12} sm={6} md={4} key={post.id}>
                            <Card sx={{ height: "100%" }}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        {post.category}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {post.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Box>
    );
}

export default HomePage;
