import React from "react";
import { Box, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import TagsText from "../texts/TagsText";
import { logoPrimaryColor } from "../../constant/Color";
import OwnerText from "../texts/OwnerText";

const PostActionsInDetailedPreview = ({ mainInfoData }) => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 2 }}>
        <TagsText tags={mainInfoData.tags} />
        <OwnerText ownerEmail={mainInfoData.ownerEmail} />
      </Box>
      <Box sx={{ display: "flex", mt: 2, justifyContent: "end" }}>
        <Box sx={{ display: "flex", gap: 2 }}> {/* Space between icons */}
          <IconButton
            sx={{
              padding: 0, // Remove extra padding
              color: logoPrimaryColor,
            }}
          >
            <FavoriteBorderIcon fontSize="medium" /> {/* Adjust icon size */}
          </IconButton>
          <IconButton
            sx={{
              padding: 0, // Remove extra padding
              color: logoPrimaryColor,
            }}
          >
            <BookmarkBorderIcon fontSize="medium" /> {/* Adjust icon size */}
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default PostActionsInDetailedPreview;
