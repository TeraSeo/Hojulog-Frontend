import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const LikeCountsText = ({ initialLikes=0, initialIsLiked=false, pl = 1 }) => {
  const [likeCounts, setLikeCounts] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(initialIsLiked);

  const handleToggleLike = () => {
    setIsLiked(!isLiked);
    setLikeCounts(isLiked ? likeCounts - 1 : likeCounts + 1);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", pl: pl }} onClick={handleToggleLike}>
      {isLiked ? (
        <FavoriteIcon sx={{ color: "red", pr: 0.3, width: "25px", height: "25px", cursor: "pointer" }} />
      ) : (
        <FavoriteBorderIcon sx={{ color: "red", pr: 0.3, width: "25px", height: "25px", cursor: "pointer" }} />
      )}
      <Typography variant="caption" sx={{ fontSize: "13px" }}>
        {likeCounts}
      </Typography>
    </Box>
  );
};

export default LikeCountsText;
