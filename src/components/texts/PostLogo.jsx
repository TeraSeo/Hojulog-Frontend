import React from "react";
import { Box, CardMedia } from "@mui/material";

const PostLogo = ({ logoUrl }) => {
  return (
    logoUrl && (
      <Box sx={{ marginRight: 2 }}>
        <CardMedia
          component="img"
          sx={{ width: 60, height: 60, objectFit: "cover", borderRadius: 2 }}
          image={logoUrl}
          alt="Logo"
        />
      </Box>
    )
  );
};

export default PostLogo;
