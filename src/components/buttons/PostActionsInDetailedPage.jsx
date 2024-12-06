import React from "react";
import { Box } from "@mui/material";
import TagsText from "../texts/TagsText";
import OwnerText from "../texts/OwnerText";
import PostLikeButton from "./PostLikeButton";
import PostBookmarkButton from "./PostBookmarkButton";

const PostActionsInDetailedPage = ({ postData, wholeLikesCount, setWholeLikesCount, isLiked, setIsLiked, isBookmarked, setIsBookmarked }) => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 2 }}>
        <TagsText tags={postData.tags} />
        <OwnerText ownerEmail={postData.ownerEmail} />
      </Box>

      <Box sx={{ display: "flex", mt: 2, alignItems: "center", justifyContent: "space-between" }}>
        <PostLikeButton postId={postData.postId} wholeLikesCount={wholeLikesCount} setWholeLikesCount={setWholeLikesCount} isLiked={isLiked} setIsLiked={setIsLiked} />

        <PostBookmarkButton postData={postData} isBookmarked={isBookmarked} setIsBookmarked={setIsBookmarked} />
      </Box>
    </>
  );
};

export default PostActionsInDetailedPage;
