import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import PostHeader from "../../header/PostHeader";
import PostDetailedContentBox from "./PostDetailedContentBox";
import RestaurantPostLinksButton from "../../buttons/RestaurantPostLinksButton";

const RestaurantDetailedPostBox = ({ postData, wholeCommentsLength }) => {
    const [ wholeLikesCount, setWholeLikesCount ] = useState(postData.likedUserCount);
    const [ isLiked, setIsLiked ] = useState(postData.isCurrentUserLiked);
    const [ isBookmarked, setIsBookmarked ] = useState(postData.isCurrentUserBookmarked);

    return (
        <Box
            sx={{
                padding: 2,
                marginBottom: 2,
            }}
        >
            <Box display="flex" alignItems="center" justifyContent="space-between" marginBottom={2}>
                <PostHeader postData={postData} logoUrl={postData.logoUrl} />
                <RestaurantPostLinksButton postData={postData} />
            </Box>

            <Typography variant="h6" gutterBottom>
            What is {postData.title}?
            </Typography>

            <PostDetailedContentBox postData={postData} wholeLikesCount={wholeLikesCount} setWholeLikesCount={setWholeLikesCount} isLiked={isLiked} setIsLiked={setIsLiked} isBookmarked={isBookmarked} setIsBookmarked={setIsBookmarked} wholeCommentsLength={wholeCommentsLength} />
        </Box>
    );
};

export default RestaurantDetailedPostBox;