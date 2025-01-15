import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { BoxTitleResponsiveFontSize, ComponentTextResponsiveFontSize1 } from "../../constant/FontSizeResponsive";
import { primaryColor } from "../../constant/Color";

const CommentLikeButton = ({ isLiked, handleLikeClicked, wholeLikesCount }) => {
    return <Box sx={{ justifyItems: "center", gap: 0.5 }}>
          <IconButton
            aria-label="favorite"
            sx={{
              color: isLiked ? "red" : primaryColor,
              padding: "4px"
            }}
            onClick={handleLikeClicked}
          >
            {isLiked ? (
              <FavoriteIcon sx={{ fontSize: BoxTitleResponsiveFontSize }} />
            ) : (
              <FavoriteBorderIcon sx={{ fontSize: BoxTitleResponsiveFontSize }} />
            )}
          </IconButton>

          <Typography
            sx={{
              fontSize: ComponentTextResponsiveFontSize1,
              color: "#666",
            }}
          >
            {wholeLikesCount}
          </Typography>
        </Box>;
}

export default CommentLikeButton;