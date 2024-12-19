import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import HomeContainerBox from "./HomeContainerBox";
import { getRecent5SocietyPosts } from "../../../service/PostService";
import HomeSummarizedSocietyPostBox from "../post/society/HomeSummarizedSocietyPostBox";

const HomeSocietyPosts = () => {
    const [summarizedSocietyPostData, setSummarizedSocietyPostData] = useState([]);

    useEffect(() => {
        getRecent5SocietyPosts()
            .then((data) => setSummarizedSocietyPostData(data))
            .catch((error) => console.error("Error fetching posts:", error));
    }, []);

    return (
        <HomeContainerBox title="동호회" onDetailClicked={() => {}}>
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
                    <Box key={index}>
                        <HomeSummarizedSocietyPostBox post={post} />
                    </Box>
                ))}
            </Box>
        </HomeContainerBox>
    );
};

export default HomeSocietyPosts;