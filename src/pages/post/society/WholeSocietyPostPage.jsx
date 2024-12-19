import { Box, Grid } from "@mui/material";
import React from "react";
import CategorySidebar from "../../../components/bar/CategorySidebar";
import HomeSocietyPosts from "../../../components/box/home/HomeSocietyPosts";

function WholeSocietyPostPage() {
    return (
        <Box sx={{ py: "10px", px: {md: "120px", sm: "40px", xs: "0px"} }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
                    <CategorySidebar />
                </Grid>

                <Grid item xs={12} md={9}>
                    <Box sx={{ mb: 4 }}>
                        <HomeSocietyPosts />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default WholeSocietyPostPage;