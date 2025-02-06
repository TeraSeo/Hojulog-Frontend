import { Dialog, DialogContent, DialogTitle, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { getCommentsByPostId } from "../../service/CommentService";
import { TitleResponsiveFontSize1 } from "../../constant/FontSizeResponsive";
import DialogCommentBox from "../box/comment/DialogCommentBox";

const CommentsDialog = ({ open, postId, handleClose }) => {
    const [commentsData, setCommentsData] = useState([]);

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
      }, [open]);

    const summarizedComments = commentsData.summarizedCommentDtoList || [];
    const wholeCommentsLength = commentsData.wholeCommentsLength || 0;

    return <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>
            <Typography variant="h6" sx={{ mb: 2, fontSize: TitleResponsiveFontSize1 }}>
                댓글 {wholeCommentsLength}개
            </Typography>
            <IconButton onClick={handleClose} sx={{ position: "absolute", right: 8, top: 8 }}>
                <CloseIcon />
            </IconButton>
        </DialogTitle>
        <DialogContent>
            {summarizedComments.length === 0 ? (
                <Typography variant="body2" sx={{ color: "gray", textAlign: "center", marginY: 2 }}>
                </Typography>
            ) : (
                summarizedComments.map((comment, index) => (
                <DialogCommentBox key={index} comment={comment} />
                ))
            )}
        </DialogContent>
    </Dialog>
}

export default CommentsDialog;