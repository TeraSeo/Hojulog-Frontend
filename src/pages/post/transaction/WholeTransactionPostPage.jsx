import { Box, Grid, Typography, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import CategorySidebar from "../../../components/bar/CategorySidebar";
import { getTransactionPostsByPage } from "../../../service/PostService";
import TransactionPostBox from "../../../components/box/post/transaction/TransactionPostBox";

function WholeTransactionPostPage() {
    const [transactionPageData, setTransactionPageData] = useState({
        posts: [],
        pageSize: 0,
        currentPage: 0,
        currentPagePostsCount: 0
    });

    useEffect(() => {
        getTransactionPostsByPage(1)
            .then((data) => setTransactionPageData(data))
            .catch((error) => console.error("Error fetching posts:", error));
    }, []);

    return (
        <Box sx={{ py: "10px", px: { md: "120px", sm: "40px", xs: "0px" } }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
                    <CategorySidebar />
                </Grid>

                <Grid item xs={12} md={9}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                        사고팔기
                    </Typography>

                    {transactionPageData.posts.map((post, index) => (
                        <React.Fragment key={index}>
                            <Box>
                                <TransactionPostBox post={post} />
                            </Box>
                            {index < transactionPageData.posts.length - 1 && (
                                <Divider sx={{ my: 2 }} />
                            )}
                        </React.Fragment>
                    ))}
                </Grid>
            </Grid>
        </Box>
    );
}

export default WholeTransactionPostPage;
