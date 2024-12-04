import React from "react";
import { Box } from "@mui/material";
import PostMedia from "../media/PostMedia";
import DescriptionText from "../texts/DescriptionText";
import PostActions from "../buttons/PostActions";
import PostTab from "../buttons/PostTab";
import PostHeader from "../header/PostHeader";

const TechnologyPostBox = ({ technologyPostData }) => {
    const handleTabChange = (selectedTab) => {
        console.log(`Tab selected: ${selectedTab}`);
        switch (selectedTab) {
            case 0:
                console.log("Overview tab clicked");
                break;
            case 1:
                console.log("Reviews tab clicked");
                break;
            case 2:
                console.log("Launches tab clicked");
                break;
            case 3:
                console.log("Publisher tab clicked");
                break;
            default:
                break;
        }
    };

    return (
        <Box
            sx={{
                padding: 2,
                marginBottom: 2,
            }}
        >
            <PostHeader postData={technologyPostData} />

            <PostTab onTabChange={handleTabChange} />
            <DescriptionText description={technologyPostData.description} />
            <PostMedia postData={technologyPostData} />
            <PostActions postData={technologyPostData} />
        </Box>
    );
};

export default TechnologyPostBox;