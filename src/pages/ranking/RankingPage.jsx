import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import TopRankingBox from "../../components/box/ranking/TopRankingBox";
import RankInfoSidebar from "../../components/bar/RankInfoSidebar";
import RankListBox from "../../components/box/ranking/RankListBox";
import { CommonPagePaddingXSize } from "../../constant/PaddingResponsiveSize";

const RankingPage = () => {
    const topRanks = [
        { rank: 1, username: "Ann Vitviskaya", points: 256, profileUrl: "https://hojulog.s3.ap-northeast-2.amazonaws.com/taejun050413%40gmail.com/profile/1738909639435_097ee5c7-281f-4372-a19e-7e248cc80f89_sydney.jpg" },
        { rank: 2, username: "Ashley Moody", points: 245, profileUrl: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" },
        { rank: 3, username: "John Loreth", points: 236, profileUrl: "" },
    ];
    
    const otherRanks = [
        { rank: 4, username: "Theresa Butler", points: 230, profileUrl: "" },
        { rank: 5, username: "Zachary Boyd", points: 183, profileUrl: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D" },
        { rank: 6, username: "Harriet Hopkins", points: 177, profileUrl: "https://images.unsplash.com/photo-1574169207511-e21a21c8075a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGltYWdlfGVufDB8fDB8fHww" },
        { rank: 6, username: "Harriet Hopkins", points: 167, profileUrl: "" },
        { rank: 7, username: "Harriet Hopkins", points: 152, profileUrl: "" },
        { rank: 8, username: "Harriet Hopkins", points: 130, profileUrl: "" },
        { rank: 9, username: "Harriet Hopkins", points: 122, profileUrl: "" },
        { rank: 10, username: "Harriet Hopkins", points: 111, profileUrl: "" },
    ];

    return <Box sx={{ py: "10px", px: CommonPagePaddingXSize }}>
        <Grid container spacing={3.5}>
            <Grid item xs={12} md={9}>
                <Box
                    sx={{
                        borderRadius: "20px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                        backgroundColor: "white",
                        overflow: "hidden"
                    }}
                >
                    <Typography 
                        sx={{ 
                            fontWeight: "bold", 
                            mb: { md: 2, sm: 1.5, xs: 1 }, 
                            padding: { md: "30px", sm: "25px", xs: "20px" }, 
                            fontSize: { md: "20px", sm: "18px", xs: "16px" },
                        }}
                    >
                        이주의 순위
                    </Typography>

                    <TopRankingBox topRanks={topRanks} />

                    <RankListBox otherRanks={otherRanks} />
                </Box>
            </Grid>
            <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
                <RankInfoSidebar />
            </Grid>
        </Grid>
    </Box>
}

export default RankingPage;