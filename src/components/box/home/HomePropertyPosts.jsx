import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import HomeSummarizedPropertyPostBox from "../post/property/HomeSummarizedPropertyPostBox";
import HomeContainerBox from "./HomeContainerBox";
import { getRecent5PropertyPosts } from "../../../service/PostService";
import { useNavigate } from "react-router-dom";

const HomePropertyPosts = () => {
    const navigate = useNavigate();
    const [summarizedPropertyPostData, setSummarizedPropertyPostData] = useState([]);

    useEffect(() => {
        getRecent5PropertyPosts()
            .then((data) => setSummarizedPropertyPostData(data))
            .catch((error) => console.error("Error fetching posts:", error));
    }, []);

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <HomeContainerBox title="부동산" onDetailClicked={() => { handleNavigate("/부동산") }}>
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