import React, { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import NotesIcon from "@mui/icons-material/Notes";
import TagsText from "../texts/TagsText";
import { logoPrimaryColor } from "../../constant/Color";
import OwnerText from "../texts/OwnerText";
import { useNavigate } from "react-router-dom";
import { addPostLike, removePostLike } from "../../service/PostLikeService";
import { addPostBookmark, removePostBookmark } from "../../service/PostBookmarkService";

const  PostActions = ({ postData }) => {
  const [ wholeLikesCount, setWholeLikesCount ] = useState(postData.likedUserCount);
  const [ isLiked, setIsLiked ] = useState(postData.isCurrentUserLiked);
  const [ isBookmarked, setIsBookmarked ] = useState(postData.isCurrentUserBookmarked);

  const navigate = useNavigate();

  const handleNotesClick = () => {
    const formattedTitle = postData.title.replace(/\s+/g, "-");
    navigate(`/${postData.category}/${formattedTitle}/details`, { state: { postId: postData.postId } });
  };

  const handleLikeClicked = async () => {
    if (!isLiked) {
      const wholeLikes = await addPostLike(postData.postId);
      setWholeLikesCount(wholeLikes);
      setIsLiked(true);
    }
    else {
      const wholeLikes = await removePostLike(postData.postId);
      setWholeLikesCount(wholeLikes);
      setIsLiked(false);
    }
  }

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
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 2 }}>
        <TagsText tags={postData.tags} />
        <OwnerText ownerEmail={postData.ownerEmail} />
      </Box>

      <Box sx={{ display: "flex", mt: 2, alignItems: "center", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            sx={{
              color: isLiked ? "red" : logoPrimaryColor,
              padding: 0,
              fontSize: "24px",
              marginRight: "8px",
            }}
            onClick={handleLikeClicked}
          >
            {isLiked ? (
              <FavoriteIcon fontSize="medium" />
            ) : (
              <FavoriteBorderIcon fontSize="medium" />
            )}
          </IconButton>
          <Typography
            variant="body2"
            sx={{
              fontWeight: "bold",
              color: logoPrimaryColor,
              fontSize: "14px",
            }}
          >
            {wholeLikesCount} likes
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton
            sx={{
              color: logoPrimaryColor,
              padding: 0,
              fontSize: "24px",
            }}
            onClick={handleNotesClick}
          >
            <NotesIcon fontSize="medium" />
          </IconButton>

          <IconButton
            sx={{
              color: logoPrimaryColor,
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
      </Box>
    </>
  );
};

export default PostActions;
