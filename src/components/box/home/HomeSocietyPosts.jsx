import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import HomeContainerBox from "./HomeContainerBox";
import { getRecent5SocietyPosts } from "../../../service/PostService";
import HomeSummarizedSocietyPostBox from "../post/society/HomeSummarizedSocietyPostBox";
import { useNavigate } from "react-router-dom";

const HomeSocietyPosts = () => {
    const navigate = useNavigate();
    const [summarizedSocietyPostData, setSummarizedSocietyPostData] = useState([]);

    useEffect(() => {
        getRecent5SocietyPosts()
            .then((data) => setSummarizedSocietyPostData(data))
            .catch((error) => console.error("Error fetching posts:", error));
    }, []);

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <HomeContainerBox title="생활" onDetailClicked={() => { handleNavigate("/community") }}>
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
                {summarizedSocietyPostData.map((post, index) => (
                    <Box key={index} sx={{ mb: 2 }} >
                        <HomeSummarizedSocietyPostBox post={post} />
                    </Box>
                ))}
            </Box>
        </HomeContainerBox>
    );
};

export default HomeSocietyPosts;