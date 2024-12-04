import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import TagsText from "../texts/TagsText";
import { logoPrimaryColor } from "../../constant/Color";
import OwnerText from "../texts/OwnerText";
import NotesIcon from "@mui/icons-material/Notes";

const PostActionsInPreview = ({ mainInfoData, onViewDetailsClick }) => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 2 }}>
        <TagsText tags={mainInfoData.tags} />
        <OwnerText ownerEmail={mainInfoData.ownerEmail} />
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
            1222 likes
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}> {/* Space between icons */}
          <IconButton
            sx={{
              color: logoPrimaryColor,
              padding: 0, // Remove extra padding
            }}
            onClick={onViewDetailsClick}
          >
            <NotesIcon fontSize="medium" /> {/* Adjust icon size */}
          </IconButton>

          <IconButton
            sx={{
              color: logoPrimaryColor,
              padding: 0, // Remove extra padding
            }}
          >
            <BookmarkBorderIcon fontSize="medium" /> {/* Adjust icon size */}
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default PostActionsInPreview;
