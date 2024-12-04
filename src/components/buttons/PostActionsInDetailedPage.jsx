import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import TagsText from "../texts/TagsText";
import { logoPrimaryColor } from "../../constant/Color";
import OwnerText from "../texts/OwnerText";

const PostActionsInDetailedPage = ({ postData }) => {
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
              padding: 0, // Remove extra padding
              marginRight: "8px", // Add spacing between icon and text
            }}
          >
            <FavoriteBorderIcon fontSize="medium" /> {/* Adjust icon size */}
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

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}> {/* Space between icons */}
          <IconButton
            sx={{
              padding: 0, // Remove extra padding
            }}
          >
            <BookmarkBorderIcon fontSize="medium" sx={{ color: logoPrimaryColor }} /> {/* Adjust icon size */}
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default PostActionsInDetailedPage;
