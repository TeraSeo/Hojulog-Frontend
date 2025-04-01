import React from "react";
import { Box, Grid } from "@mui/material";
import CategorySidebar from "../../components/bar/CategorySidebar";
import HomePropertyPosts from "../../components/box/home/HomePropertyPosts";
import HomeJobPosts from "../../components/box/home/HomeJobPosts";
import HomeTransactionPosts from "../../components/box/home/HomeTransactionPosts";
import HomeSocietyPosts from "../../components/box/home/HomeSocietyPosts";
import HomeTravelPosts from "../../components/box/home/HomeTravelPosts";
import HomeStudyPosts from "../../components/box/home/HomeStudyPosts";
import { CommonPagePaddingXSize } from "../../constant/PaddingResponsiveSize";
import HomeWorldCupPosts from "../../components/box/home/HomeWorldCupPosts";
import DisplayAds from "../../components/ads/DisplayAds";

function HomePage() {
    return (
        <Box sx={{ py: "0px", px: CommonPagePaddingXSize }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
                    <CategorySidebar />
                </Grid>

                <Grid item xs={12} md={9}>
                    <Box sx={{ mb: 3 }}>
                        <HomeWorldCupPosts />
                    </Box>

                    <Box sx={{ mb: 3 }}>
                        <HomeTravelPosts />
                    </Box>

                    <Box sx={{ mb: 3 }}>
                        <HomeSocietyPosts />
                    </Box>

                    <Box sx={{ mb: 3 }}>
                        <HomeStudyPosts />
                    </Box>

                    <Box sx={{ mb: 3 }}>
                        <HomeTransactionPosts />
                    </Box>
                    
                    <Box sx={{ mb: 3 }}>
                        <HomePropertyPosts />
                    </Box>
                    
                    <Box sx={{ mb: 1 }}>
                        <HomeJobPosts />
                    </Box>
                </Grid>
            </Grid>
            
            <DisplayAds />
        </Box>
    );
}

export default HomePage;
