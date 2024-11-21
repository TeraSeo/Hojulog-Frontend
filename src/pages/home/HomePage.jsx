import React from "react";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";

function HomePage() {
    return (
        <Box sx={{ padding: "20px" }}>
            {/* Welcome Section */}
            <Box sx={{ textAlign: "center", mb: 4 }}>
                <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
                    Welcome to Our Platform!
                </Typography>
                <Typography variant="body1" sx={{ color: "text.secondary", maxWidth: "600px", margin: "auto" }}>
                    Our platform helps beginners promote their apps, websites, and projects to gain visibility and connect with a larger audience.
                    Join us to showcase your work and grow your reach.
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 3 }}>
                    Get Started
                </Button>
            </Box>

            {/* Features Section */}
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3, textAlign: "center" }}>
                What We Offer
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Paper elevation={3} sx={{ padding: "20px", textAlign: "center" }}>
                        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                            Easy Project Setup
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Create your project profile in just a few steps and start attracting visitors.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper elevation={3} sx={{ padding: "20px", textAlign: "center" }}>
                        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                            Wide Audience Reach
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Get your projects in front of a wide audience interested in new and exciting projects.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper elevation={3} sx={{ padding: "20px", textAlign: "center" }}>
                        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                            Community Support
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Join a community of like-minded individuals and get feedback on your work.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>

            {/* Call-to-Action Section */}
            <Box sx={{ textAlign: "center", mt: 5, padding: "40px 20px", backgroundColor: "#f7f7f7", borderRadius: "8px" }}>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                    Ready to Showcase Your Project?
                </Typography>
                <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
                    Sign up today to create your project profile and start attracting users and customers.
                </Typography>
                <Button variant="contained" color="primary" size="large">
                    Sign Up Now
                </Button>
            </Box>
        </Box>
    );
}

export default HomePage;
