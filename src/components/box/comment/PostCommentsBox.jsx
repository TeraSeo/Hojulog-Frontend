import React, { useEffect, useState } from "react";
import { Box, Typography, Divider } from "@mui/material";
import AddCommentBox from "./AddCommentBox";
import { createComment, createResponseComment, getCommentsByPostId } from "../../../service/CommentService";
import SingleCommentBox from "./SingleCommentBox";
import AddResponseCommentBox from "./AddResponseCommentBox";
import { TitleResponsiveFontSize1 } from "../../../constant/FontSizeResponsive";

const PostCommentBox = ({ postId }) => {
  const [commentsData, setCommentsData] = useState([]);
  const [comment, setComment] = useState("");
  const [isResponseCommentOn, setIsResponseCommentOn] = useState(false);
  const [parentCommentId, setParentCommentId] = useState();
  const [parentCommentUsername, setParentCommentUsername] = useState();

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

  const handleResponseCommentSubmit = async () => {
    if (comment.trim() && isResponseCommentOn && parentCommentId !== null) {
      const isCreated = await createResponseComment(comment, parentCommentId);
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
      <Typography variant="h6" sx={{ mb: 2, fontSize: TitleResponsiveFontSize1 }}>
        댓글 {wholeCommentsLength}개
      </Typography>

      {summarizedComments.length === 0 ? (
        <Typography variant="body2" sx={{ color: "gray", textAlign: "center", marginY: 2 }}>
        </Typography>
      ) : (
        summarizedComments.map((comment, index) => (
          <SingleCommentBox key={index} comment={comment} setIsResponseCommentOn={setIsResponseCommentOn} setParentCommentId={setParentCommentId} setParentCommentUsername={setParentCommentUsername} />
        ))
      )}

      <Divider sx={{ marginY: 4 }} />

      {isResponseCommentOn ? 
        <AddResponseCommentBox comment={comment} setComment={setComment} resonseCommentUsername={parentCommentUsername} handleCommentSubmit={handleResponseCommentSubmit} setIsResponseCommentOn={setIsResponseCommentOn} setParentCommentId={setParentCommentId} setParentCommentUsername={setParentCommentUsername} /> :
        <AddCommentBox comment={comment} setComment={setComment} handleCommentSubmit={handleCommentSubmit} /> 
      }
    </Box>
  );
};

export default PostCommentBox;
