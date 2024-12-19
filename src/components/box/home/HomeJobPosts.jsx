import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import HomeContainerBox from "./HomeContainerBox";
import { getRecent5JobPosts } from "../../../service/PostService";
import HomeSummarizedJobBox from "../post/job/HomeSummarizedJobBox";

const HomeJobPosts = () => {
    const [summarizedJobPostData, setSummarizedJobPostData] = useState([]);

    useEffect(() => {
        getRecent5JobPosts()
            .then((data) => setSummarizedJobPostData(data))
            .catch((error) => console.error("Error fetching posts:", error));
    }, []);

    return (
        <HomeContainerBox title="구인구직" onDetailClicked={() => {}}>
            <Box
                sx={{
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
                {summarizedJobPostData.map((post, index) => (
                    <Box key={index}>
                        <HomeSummarizedJobBox post={post} />
                    </Box>
                ))}
            </Box>
        </HomeContainerBox>
    );
};

export default HomeJobPosts;