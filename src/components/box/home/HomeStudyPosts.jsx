import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import HomeContainerBox from "./HomeContainerBox";
import { getRecent5StudyPosts } from "../../../service/PostService";
import HomeSummarizedStudyPostBox from "../post/study/HomeSummarizedStudyPostBox";

const HomeStudyPosts = () => {
    const [summarizedStudyPostData, setSummarizedStudyPostData] = useState([]);

    useEffect(() => {
        getRecent5StudyPosts()
            .then((data) => setSummarizedStudyPostData(data))
            .catch((error) => console.error("Error fetching posts:", error));
    }, []);

    return (
        <HomeContainerBox title="유학" onDetailClicked={() => {}}>
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
                {summarizedStudyPostData.map((post, index) => (
                    <Box key={index}>
                        <HomeSummarizedStudyPostBox post={post} />
                    </Box>
                ))}
            </Box>
        </HomeContainerBox>
    );
};

export default HomeStudyPosts;