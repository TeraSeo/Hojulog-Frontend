import React, { useState } from "react";
import { Box, Typography, Divider } from "@mui/material";
import AddCommentBox from "./AddCommentBox";
import { createComment } from "../../service/CommentService";
import SingleCommentBox from "./SingleCommentBox";

const PostCommentBox = ({ comments = {}, postId, fetchComments }) => {
  const [comment, setComment] = useState("");

  const handleCommentSubmit = async () => {
    if (comment.trim()) {
      const isCreated = await createComment(comment, postId);
      if (isCreated) {
        setComment("");
        fetchComments();
      }
    }
  };

  const summarizedComments = comments.summarizedCommentDtoList || [];
  const wholeCommentsLength = comments.wholeCommentsLength || 0;

  return (
    <Box sx={{ padding: 2, marginTop: 4 }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 3 }}>
        {wholeCommentsLength} Comments
      </Typography>

      {summarizedComments.map((comment) => (
        <SingleCommentBox comment={comment} />
      ))}

      <Divider sx={{ marginY: 4 }} />

      <AddCommentBox comment={comment} setComment={setComment} handleCommentSubmit={handleCommentSubmit} />
    </Box>
  );
};

export default PostCommentBox;