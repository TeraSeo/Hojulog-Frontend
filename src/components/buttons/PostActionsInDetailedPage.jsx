import React from "react";
import { Box, IconButton } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import TagsText from "../texts/TagsText";
import { logoPrimaryColor } from "../../constant/Color";
import OwnerText from "../texts/OwnerText";
import PostLikeButton from "./PostLikeButton";

const PostActionsInDetailedPage = ({ postData, wholeLikesCount, setWholeLikesCount, isLiked, setIsLiked }) => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 2 }}>
        <TagsText tags={postData.tags} />
        <OwnerText ownerEmail={postData.ownerEmail} />
      </Box>

      <Box sx={{ display: "flex", mt: 2, alignItems: "center", justifyContent: "space-between" }}>
        <PostLikeButton postId={postData.postId} wholeLikesCount={wholeLikesCount} setWholeLikesCount={setWholeLikesCount} isLiked={isLiked} setIsLiked={setIsLiked} />

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton
            sx={{
              padding: 0, 
            }}
          >
            <BookmarkBorderIcon fontSize="medium" sx={{ color: logoPrimaryColor }} />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default PostActionsInDetailedPage;
