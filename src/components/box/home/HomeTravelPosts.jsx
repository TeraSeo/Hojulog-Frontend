import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import HomeContainerBox from "./HomeContainerBox";
import { getRecent5TravelPosts } from "../../../service/PostService";
import HomeSummarizedTravelPostBox from "../post/travel/HomeSummarizedTravelPostBox";
import { useNavigate } from "react-router-dom";

const HomeTravelPosts = () => {
    const navigate = useNavigate();
    const [summarizedTravelPostData, setSummarizedTravelPostData] = useState([]);

    useEffect(() => {
        getRecent5TravelPosts()
            .then((data) => setSummarizedTravelPostData(data))
            .catch((error) => console.error("Error fetching posts:", error));
    }, []);

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <HomeContainerBox title="여행" onDetailClicked={() => { handleNavigate("/travel") }}>
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
                {summarizedTravelPostData.map((post, index) => (
                    <Box key={index} sx={{ mb: 2 }} >
                        <HomeSummarizedTravelPostBox post={post} />
                    </Box>
                ))}
            </Box>
        </HomeContainerBox>
    );
};

export default HomeTravelPosts;