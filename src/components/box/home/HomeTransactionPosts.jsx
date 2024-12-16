import React, { useEffect, useState } from "react";
import HomeContainerBox from "./HomeContainerBox";
import { getRecent5SummarizedPostsByCategory } from "../../../service/PostService";
import { Box } from "@mui/material";
import HomeSummarizedTransactionPropertyBox from "../post/transaction/HomeSummarizedTransactionPropertyBox";

const HomeTransactionPosts = () => {
    const [summarizedTransactionPostData, setSummarizedTransactionPostData] = useState([]);

    useEffect(() => {
        getRecent5SummarizedPostsByCategory("사고팔기")
            .then((data) => setSummarizedTransactionPostData(data))
            .catch((error) => console.error("Error fetching posts:", error));
    }, []);

   return (
        <HomeContainerBox title="사고팔기" onDetailClicked={() => {}}>
            <Box
                sx={{
                    display: "flex",
                    gap: "16px",
                    flexWrap: "nowrap",
                    overflowX: "auto",
                    paddingBottom: "8px",
                    scrollbarWidth: "none",
                    "&::-webkit-scrollbar": {
                        display: "none",
                    },
                }}
            >
                {summarizedTransactionPostData.map((post, index) => (
                    <Box key={index}>
                        <HomeSummarizedTransactionPropertyBox post={post} />
                    </Box>
                ))}
            </Box>
        </HomeContainerBox>
   );
}

export default HomeTransactionPosts;