import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import CreatedAtText from "../../texts/CreatedAtText";
import { addCommentLike, removeCommentLike } from "../../../service/CommentLikeService";
import ResponseCommentsBox from "./ResponseCommentsBox";
import { ComponentTextResponsiveFontSize1 } from "../../../constant/FontSizeResponsive";
import CommentUsernameText from "../../texts/CommentUsernameText";
import CommentContentText from "../../texts/CommentContentText";
import CommentLikeButton from "../../buttons/CommentLikeButton";
import CommentProfileBox from "./CommentProfileBox";

const SingleCommentBox = ({ comment, setIsResponseCommentOn, setParentCommentId, setParentCommentUsername }) => {
  const { id, username, profilePicture } = comment.summarizedUserDto;
  const { commentId, content, wholeLikedUserLength, isCurrentUserLiked, responseCommentIds, createdAt } = comment;
  const profilePictureUrl = profilePicture || ""; 

  const [ wholeLikesCount, setWholeLikesCount ] = useState(wholeLikedUserLength);
  const [ isLiked, setIsLiked ] = useState(isCurrentUserLiked);

  const handleLikeClicked = async () => {
    if (!isLiked) {
      const wholeLikes = await addCommentLike(commentId);
      setWholeLikesCount(wholeLikes);
      setIsLiked(true);
    }
    else {
      const wholeLikes = await removeCommentLike(commentId);
      setWholeLikesCount(wholeLikes);
      setIsLiked(false);
    }
  }

  const setResponseComment = () => {
    setIsResponseCommentOn(true);
    setParentCommentId(commentId);
    setParentCommentUsername(username);
  }

  return (
    <Box sx={{ marginBottom: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <CommentProfileBox userId={id} profilePictureUrl={profilePictureUrl} username={username} />
          <Box>
            <CommentUsernameText username={username} />
            <CommentContentText content={content} />

            <CreatedAtText createdAt={createdAt} pl={0} />
          </Box>
        </Box>
        
        <CommentLikeButton isLiked={isLiked} handleLikeClicked={handleLikeClicked} wholeLikesCount={wholeLikesCount} />
      </Box>

      <Box sx={{ mt: 1, marginLeft: "55px" }} onClick={() => { setResponseComment(); }}>
        <Typography
          sx={{
            fontSize: ComponentTextResponsiveFontSize1,
            color: "#888",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          답글쓰기
        </Typography>
      </Box>

      {responseCommentIds.length > 0 && (
          <ResponseCommentsBox responseCommentIds={ responseCommentIds } />
      )}
    </Box>
  );
};

export default SingleCommentBox;
