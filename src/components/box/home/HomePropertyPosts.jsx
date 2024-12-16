import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import HomeSummarizedPropertyPostBox from "../post/property/HomeSummarizedPropertyPostBox";
import HomeContainerBox from "./HomeContainerBox";
import { getRecent5SummarizedPostsByCategory } from "../../../service/PostService";

const HomePropertyPosts = () => {
    const [summarizedPropertyPostData, setSummarizedPropertyPostData] = useState([]);

    useEffect(() => {
        getRecent5SummarizedPostsByCategory("부동산")
            .then((data) => setSummarizedPropertyPostData(data))
            .catch((error) => console.error("Error fetching posts:", error));
    }, []);

    return (
        <HomeContainerBox title="부동산" onDetailClicked={() => {}}>
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
                {summarizedPropertyPostData.map((post, index) => (
                    <Box key={index}>
                        <HomeSummarizedPropertyPostBox post={post} />
                    </Box>
                ))}
            </Box>
        </HomeContainerBox>
    );
}

export default HomePropertyPosts;