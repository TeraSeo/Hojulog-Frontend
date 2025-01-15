import React, { useEffect, useState } from "react";
import HomeContainerBox from "./HomeContainerBox";
import { getRecent5TransactionPosts } from "../../../service/PostService";
import { Box } from "@mui/material";
import HomeSummarizedTransactionPropertyBox from "../post/transaction/HomeSummarizedTransactionPropertyBox";
import { useNavigate } from "react-router-dom";

const HomeTransactionPosts = () => {
    const navigate = useNavigate();
    const [summarizedTransactionPostData, setSummarizedTransactionPostData] = useState([]);

    useEffect(() => {
        getRecent5TransactionPosts()
            .then((data) => setSummarizedTransactionPostData(data))
            .catch((error) => console.error("Error fetching posts:", error));
    }, []);

    const handleNavigate = (path) => {
        navigate(path);
    };

   return (
        <HomeContainerBox title="사고팔기" onDetailClicked={() => { handleNavigate("/사고팔기") }}>
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