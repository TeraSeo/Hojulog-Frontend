import React from "react";
import { Box, CardMedia } from "@mui/material";

const PreviewPostLogo = ({ logoImage }) => {
  if (!logoImage) return null;

  return (
    <Box sx={{ marginRight: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 60, height: 60, objectFit: "cover", borderRadius: 2 }}
        image={URL.createObjectURL(logoImage)}
        alt="Logo"
      />
    </Box>
  );
};

export default PreviewPostLogo;
