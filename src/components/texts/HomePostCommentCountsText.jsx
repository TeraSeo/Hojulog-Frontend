import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import { primaryColor } from "../../constant/Color";
import { HomePostIconResponsiveSize1 } from "../../constant/IconSizeResponsive";
import { PostResponsiveFontSize3 } from "../../constant/FontSizeResponsive";
import CommentsDialog from "../dialog/CommentsDialog";

const HomePostCommentCountsText = ({ isCommentAllowed, commentsCounts, postId }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        if (isCommentAllowed) setOpen(true);
    };

    const handleClose = () => setOpen(false);

    return (
        <>
            <Box 
                sx={{ 
                    display: "flex", 
                    alignItems: "center", 
                    cursor: isCommentAllowed ? "pointer" : "default",
                    opacity: isCommentAllowed ? 1 : 0.5,  // Make it look inactive
                }} 
                onClick={handleOpen}
            >
                <CommentIcon 
                    sx={{ 
                        color: isCommentAllowed ? primaryColor : "gray", 
                        pr: 0.3, 
                        width: HomePostIconResponsiveSize1, 
                        height: HomePostIconResponsiveSize1 
                    }} 
                />
                <Typography 
                    variant="caption" 
                    sx={{ 
                        fontSize: PostResponsiveFontSize3, 
                        pl: 0.2, 
                        color: isCommentAllowed ? "inherit" : "gray"
                    }}
                >
                    {commentsCounts}
                </Typography>
            </Box>

            {isCommentAllowed && (
                <CommentsDialog open={open} postId={postId} handleClose={handleClose} />
            )}
        </>
    );
};

export default HomePostCommentCountsText;