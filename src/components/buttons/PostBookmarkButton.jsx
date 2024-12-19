import { Box, IconButton } from "@mui/material";
import React from "react";
import { primaryColor } from "../../constant/Color";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { addPostBookmark, removePostBookmark } from "../../service/PostBookmarkService";

const PostBookmarkButton = ({ postData, isBookmarked, setIsBookmarked }) => {

    const handleBookmarkClicked = async () => {
        if (!isBookmarked) {
          const isCreated = await addPostBookmark(postData.postId);
          if (isCreated) setIsBookmarked(true);
        }
        else {
          const isDeleted = await removePostBookmark(postData.postId);
          if (isDeleted) setIsBookmarked(false);
        }
      }

    return (
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton
                sx={{
                color: primaryColor,
                padding: 0,
                fontSize: "24px",
                }}
                onClick={handleBookmarkClicked}
            >
                {isBookmarked ? (
                <BookmarkIcon fontSize="medium" />
                ) : (
                <BookmarkBorderIcon fontSize="medium" />
                )}
            </IconButton>
        </Box>
    );
}

export default PostBookmarkButton;