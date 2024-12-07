import React from "react";
import { Avatar, Box, Typography } from "@mui/material";

const CommentProfileBox = ({ user }) => {
  const { username, email, profilePicture } = user;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        padding: "8px 0",
      }}
    >
      {/* User Avatar */}
      <Avatar
        src={profilePicture}
        alt={username}
        sx={{
          width: 40,
          height: 40,
        }}
      />

      {/* Name and Subtitle */}
      <Box>
        <Typography
          variant="body1"
          sx={{
            fontWeight: "bold",
            fontSize: "16px",
            color: "#333",
          }}
        >
          {username}
        </Typography>
      </Box>
    </Box>
  );
};

export default CommentProfileBox;
