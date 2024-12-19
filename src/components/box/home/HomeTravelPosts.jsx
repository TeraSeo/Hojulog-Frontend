import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import HomeContainerBox from "./HomeContainerBox";
import { getRecent5TravelPosts } from "../../../service/PostService";
import HomeSummarizedTravelPostBox from "../post/travel/HomeSummarizedTravelPostBox";

const HomeTravelPosts = () => {
    const [summarizedTravelPostData, setSummarizedTravelPostData] = useState([]);

    useEffect(() => {
        getRecent5TravelPosts()
            .then((data) => setSummarizedTravelPostData(data))
            .catch((error) => console.error("Error fetching posts:", error));
    }, []);

    return (
        <HomeContainerBox title="여행" onDetailClicked={() => {}}>
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
                    <Box key={index}>
                        <HomeSummarizedTravelPostBox post={post} />
                    </Box>
                ))}
            </Box>
        </HomeContainerBox>
    );
};

export default HomeTravelPosts;