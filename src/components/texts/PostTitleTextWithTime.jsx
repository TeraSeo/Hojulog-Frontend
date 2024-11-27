import React from "react";
import { Box, CardMedia, Typography } from "@mui/material";

const PostTitleTextWithTime = ({ mainInfoData, mediaData }) => {
  const logoPrimaryColor = "#001f5b";
  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, marginBottom: 1 }}>
      {mediaData.logoImage && (
        <Box sx={{ marginRight: 2 }}>
          <CardMedia
            component="img"
            sx={{ width: 60, height: 60, objectFit: 'cover', borderRadius: 2 }}
            image={URL.createObjectURL(mediaData.logoImage)}
            alt="Logo"
          />
        </Box>
      )}
      <Box sx={{ flexGrow: 1 }}>
        {/* Title */}
        <Typography variant="h6" sx={{ color: logoPrimaryColor }}>
          {mainInfoData.title || "Product Title"}
        </Typography>
        
        {/* Subtitle */}
        <Typography variant="subtitle2" color="textSecondary">
          {mainInfoData.subTitle || "Product Subtitle"}
        </Typography>

        {/* Start and End Time */}
        <Box sx={{ marginTop: 0.5 }}>
          <Typography variant="caption" color="textSecondary">
            {mainInfoData.startDateTime ? `Start: ${mainInfoData.startDateTime}` : "Start: N/A"}
          </Typography>
          <Typography variant="caption" color="textSecondary" sx={{ marginLeft: 1 }}>
            {mainInfoData.endDateTime ? `End: ${mainInfoData.endDateTime}` : "End: N/A"}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PostTitleTextWithTime;