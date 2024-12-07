import React, { useEffect, useState } from "react";
import { Box, Typography, Divider } from "@mui/material";
import AddCommentBox from "./AddCommentBox";
import { createComment, getCommentsByPostId } from "../../../service/CommentService";
import SingleCommentBox from "./SingleCommentBox";

const PostCommentBox = ({ postId }) => {
  const [commentsData, setCommentsData] = useState([]);
  const [comment, setComment] = useState("");

  const fetchComments = () => {
    if (postId) {
      getCommentsByPostId(postId)
        .then((data) => setCommentsData(data || {}))
        .catch((error) => {
          console.error("Error fetching comments:", error);
          setCommentsData({});
        });
    }
  };

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const handleCommentSubmit = async () => {
    if (comment.trim()) {
      const isCreated = await createComment(comment, postId);
      if (isCreated) {
        setComment("");
        fetchComments();
      }
    }
  };

  const summarizedComments = commentsData.summarizedCommentDtoList || [];
  const wholeCommentsLength = commentsData.wholeCommentsLength || 0;

  return (
    <Box sx={{ px: 2 }}>
      <Typography variant="h6" gutterBottom>
        {wholeCommentsLength} Comments
      </Typography>

      {/* Show "No comments" message if there are no comments */}
      {summarizedComments.length === 0 ? (
        <Typography variant="body2" sx={{ color: "gray", textAlign: "center", marginY: 2 }}>
          There are no comments yet. Be the first to comment!
        </Typography>
      ) : (
        summarizedComments.map((comment, index) => (
          <SingleCommentBox key={index} comment={comment} />
        ))
      )}

      <Divider sx={{ marginY: 4 }} />

      <AddCommentBox comment={comment} setComment={setComment} handleCommentSubmit={handleCommentSubmit} />
    </Box>
  );
};

export default PostCommentBox;
