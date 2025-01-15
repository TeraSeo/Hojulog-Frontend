import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import HomeContainerBox from "./HomeContainerBox";
import { getRecent5StudyPosts } from "../../../service/PostService";
import HomeSummarizedStudyPostBox from "../post/study/HomeSummarizedStudyPostBox";
import { useNavigate } from "react-router-dom";

const HomeStudyPosts = () => {
const navigate = useNavigate();
    const [summarizedStudyPostData, setSummarizedStudyPostData] = useState([]);

    useEffect(() => {
        getRecent5StudyPosts()
            .then((data) => setSummarizedStudyPostData(data))
            .catch((error) => console.error("Error fetching posts:", error));
    }, []);

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <HomeContainerBox title="유학" onDetailClicked={() => { handleNavigate("/유학") }}>
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
                    <Box key={index} sx={{ mb: 2 }} >
                        <HomeSummarizedStudyPostBox post={post} />
                    </Box>
                ))}
            </Box>
        </HomeContainerBox>
    );
};

export default HomeStudyPosts;