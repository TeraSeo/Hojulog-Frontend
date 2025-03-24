import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import HomeContainerBox from "./HomeContainerBox";
import { getRecent5WorldCupPosts } from "../../../service/PostService";
import { useNavigate } from "react-router-dom";
import HomeSummarizedWorldCupPostBox from "../post/world-cup/HomeSummarizedWorldCupPostBox";

const HomeWorldCupPosts = () => {
    const navigate = useNavigate();
    const [summarizedWorldCupPostData, setSummarizedWorldCupData] = useState([]);

    useEffect(() => {
        getRecent5WorldCupPosts()
            .then((data) => setSummarizedWorldCupData(data))
            .catch((error) => console.error("Error fetching posts:", error));
    }, []);

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <HomeContainerBox title="Aussie Choice" onDetailClicked={() => { handleNavigate("/이상형월드컵") }}>
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
                {summarizedWorldCupPostData.map((post, index) => (
                    <Box key={index}>
                        <HomeSummarizedWorldCupPostBox post={post} />
                    </Box>
                ))}
            </Box>
        </HomeContainerBox>
    );
}

export default HomeWorldCupPosts;