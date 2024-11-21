import React from "react";
import { Box, Button, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import TagsText from "../texts/TagsText";
import { logoPrimaryColor } from "../../constant/Color";
import OwnerText from "../texts/OwnerText";

const PostPreviewActions = ({ mainInfoData, onViewDetailsClick }) => {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
        <TagsText tags={mainInfoData.tags} />
        <OwnerText ownerEmail={mainInfoData.ownerEmail} />
      </Box>
      <Box sx={{ display: 'flex', mt: 2 }}>
        <Button
          variant="outlined"
          sx={{ color: logoPrimaryColor, borderColor: logoPrimaryColor, marginRight: 'auto', height: 32 }}
          onClick={onViewDetailsClick}
        >
          View Details
        </Button>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <IconButton>
            <FavoriteBorderIcon sx={{ color: logoPrimaryColor }} />
          </IconButton>
          <IconButton>
            <BookmarkBorderIcon sx={{ color: logoPrimaryColor }} />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default PostPreviewActions;