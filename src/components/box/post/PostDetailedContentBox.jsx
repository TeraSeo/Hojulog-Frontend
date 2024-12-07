import { Box } from "@mui/material";
import React from "react";
import DescriptionText from "../../texts/DescriptionText";
import PostMedia from "../../media/PostMedia";
import PostActionsInDetailedPage from "../../buttons/PostActionsInDetailedPage";
import PostFooterText from "../../texts/PostFooterText";

const PostDetailedContentBox = ({postData, wholeLikesCount, setWholeLikesCount, isLiked, setIsLiked, isBookmarked, setIsBookmarked, wholeCommentsLength}) => {
    return <>
        <Box>
            <DescriptionText description={postData.description} />
        </Box>

        <Box marginTop={0}>
            <PostMedia postData={postData} />
        </Box>

        <Box marginTop={0}>
            <PostActionsInDetailedPage postData={postData} wholeLikesCount={wholeLikesCount} setWholeLikesCount={setWholeLikesCount} isLiked={isLiked} setIsLiked={setIsLiked} isBookmarked={isBookmarked} setIsBookmarked={setIsBookmarked} />
        </Box>

        <Box marginTop={2}>
            <PostFooterText
                likesCnt={wholeLikesCount || 0}
                commentsCnt={wholeCommentsLength || 0}
                dayRank={postData.dayRank || 0}
                weekRank={postData.weekRank || 0}
            />
        </Box>
    </>;
}

export default PostDetailedContentBox;