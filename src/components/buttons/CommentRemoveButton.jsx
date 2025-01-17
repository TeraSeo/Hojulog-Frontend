import { Box, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import React from "react";
import { removeCommentById } from "../../service/CommentService";

const CommentRemoveButton = ({ commentOwnerId, commentId }) => {
    const userId = Number(localStorage.getItem('userId')) || 0;

    const removeComment = async () => {
        const confirmDelete = window.confirm("댓글을 삭제하시겠습니까?");
        if (confirmDelete) {
            const isCommentRemoved = await removeCommentById(commentId);
            if (isCommentRemoved) {
                window.location.reload();
            }
        }
    }

    return Number(commentOwnerId) === userId ? (
        <Box>
            <IconButton color="error" aria-label="remove" onClick={removeComment}>
                <DeleteIcon />
            </IconButton>
        </Box>
    ) : (
        <Box></Box>
    );
}

export default CommentRemoveButton;