import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import TopRankingBox from "../../components/box/ranking/TopRankingBox";
import RankInfoSidebar from "../../components/bar/RankInfoSidebar";
import RankListBox from "../../components/box/ranking/RankListBox";
import { CommonPagePaddingXSize } from "../../constant/PaddingResponsiveSize";
import { getTopRanks } from "../../service/UserService";

const RankingPage = () => {
    const [ topRanks, setTopRanks ] = useState(null);
    const [ otherRanks, setOtherRanks ] = useState(null);

    useEffect(() => {
        fetchUserRanks();
    }, []);

    const fetchUserRanks = () => {
        getTopRanks()
            .then((data) => {
                if (data && data.length) {
                    const topThree = data.slice(0, 3);
                    setTopRanks(topThree);
    
                    if (data.length > 3) {
                        const others = data.slice(3, data.length);
                        setOtherRanks(others);
                    } else {
                        setOtherRanks([]);
                    }
                }
            })
            .catch((error) => console.error("Error fetching posts:", error));
    };
    
    if (topRanks === null || otherRanks === null) {
        return <div>Loading...</div>;
    }

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