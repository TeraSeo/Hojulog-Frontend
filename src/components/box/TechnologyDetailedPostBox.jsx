import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import PostMedia from "../media/PostMedia";
import DescriptionText from "../texts/DescriptionText";
import PostFooterText from "../texts/PostFooterText";
import TechnologyPostLinksButton from "../buttons/TechnologyPostLinksButton";
import PostActionsInDetailedPage from "../buttons/PostActionsInDetailedPage";
import PostHeader from "../header/PostHeader";

const TechnologyDetailedPostBox = ({ postData, wholeCommentsLength }) => {
    const [ wholeLikesCount, setWholeLikesCount ] = useState(postData.likedUserCount);
    const [ isLiked, setIsLiked ] = useState(postData.isCurrentUserLiked);

    return (
        <Box
            sx={{
                padding: 2,
                marginBottom: 2,
            }}
        >
            <Box display="flex" alignItems="center" justifyContent="space-between" marginBottom={2}>
                <PostHeader postData={postData} logoUrl={postData.logoUrl} />
                <TechnologyPostLinksButton mainInfoData={postData} />
            </Box>

            <Typography variant="h6" gutterBottom>
            What is {postData.title}?
            </Typography>
            <Box>
                <DescriptionText description={postData.description} />
            </Box>

            <Box marginTop={0}>
                <PostMedia postData={postData} />
            </Box>

            <Box marginTop={0}>
                <PostActionsInDetailedPage postData={postData} wholeLikesCount={wholeLikesCount} setWholeLikesCount={setWholeLikesCount} isLiked={isLiked} setIsLiked={setIsLiked} />
            </Box>

            <Box marginTop={2}>
                <PostFooterText
                    likesCnt={wholeLikesCount || 0}
                    commentsCnt={wholeCommentsLength || 0}
                    dayRank={postData.dayRank || 0}
                    weekRank={postData.weekRank || 0}
                />
            </Box>
        </Box>
    );
};

export default TechnologyDetailedPostBox;