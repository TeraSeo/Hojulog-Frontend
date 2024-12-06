import React from "react";
import { Box, Typography, Avatar, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { logoPrimaryColor } from "../../constant/Color";
import CreatedAtText from "../texts/CreatedAtText";

const SingleCommentBox = ({ comment }) => {
  const { username, profilePicture } = comment.summarizedUserDto;
  const { content, wholeLikedUserLength, createdAt } = comment;
  const profilePictureUrl = profilePicture || "";

  return (
    <Box sx={{ marginBottom: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mx: 2,
        }}
      >
    
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Avatar
            src={profilePictureUrl}
            alt={username}
            sx={{
              width: 40,
              height: 40,
            }}
          />
          <Box>
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "13px", 
                color: "#333",
              }}
            >
              {username}
            </Typography>
            <Typography
              sx={{
                color: "#555",
                lineHeight: 1.4,
                fontSize: "12px", 
              }}
            >
              {content}
            </Typography>

            <CreatedAtText createdAt={createdAt} />
          </Box>
        </Box>
    
        <Box sx={{ justifyItems: "center", gap: 0.5 }}>
          <IconButton
            aria-label="favorite"
            sx={{
              color: logoPrimaryColor,
              padding: "4px", 
            }}
          >
            <FavoriteBorderIcon sx={{ fontSize: "18px" }} />
          </IconButton>
          <Typography
            sx={{
              fontSize: "11px",
              color: "#666",
            }}
          >
            {wholeLikedUserLength}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SingleCommentBox;
