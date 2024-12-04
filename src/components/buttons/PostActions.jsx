import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import NotesIcon from "@mui/icons-material/Notes";
import TagsText from "../texts/TagsText";
import { logoPrimaryColor } from "../../constant/Color";
import OwnerText from "../texts/OwnerText";
import { useNavigate } from "react-router-dom";

const PostActions = ({ postData }) => {
  const navigate = useNavigate();

  const handleNotesClick = () => {
    const formattedTitle = postData.title.replace(/\s+/g, "-");
    navigate(`/${postData.category}/${formattedTitle}/details`, { state: { post: postData } });
  };

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
              color: logoPrimaryColor,
              padding: 0, 
              fontSize: "24px", 
              marginRight: "8px", 
            }}
          >
            <FavoriteBorderIcon fontSize="medium" />
          </IconButton>
          <Typography
            variant="body2"
            sx={{
              fontWeight: "bold",
              color: logoPrimaryColor,
              fontSize: "14px",
            }}
          >
            {postData.likedUserCount} likes
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
          >
            <BookmarkBorderIcon fontSize="medium" />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default PostActions;