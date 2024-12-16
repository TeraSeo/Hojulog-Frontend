import React from "react";
import { Box, Grid } from "@mui/material";
import CategorySidebar from "../../components/bar/CategorySidebar";
import HomePropertyPosts from "../../components/box/home/HomePropertyPosts";
import HomeJobPosts from "../../components/box/home/HomeJobPosts";
import HomeTransactionPosts from "../../components/box/home/HomeTransactionPosts";

function HomePage() {

    return (
        <Box sx={{ py: "10px", px: {md: "120px", sm: "40px", xs: "0px"} }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
                    <CategorySidebar />
                </Grid>

                <Grid item xs={12} md={9}>
                    <Box sx={{ mb: 4 }}>
                        <HomePropertyPosts />
                    </Box>
                    
                    <Box sx={{ mb: 4 }}>
                        <HomeJobPosts />
                    </Box>

                    <Box sx={{ mb: 4 }}>
                        <HomeTransactionPosts />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default HomePage;
