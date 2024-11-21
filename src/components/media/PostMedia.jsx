import React from "react";
import { Box, Card, CardMedia } from "@mui/material";

const PostMedia = ({ mediaData }) => {
  const mediaAspectRatio = mediaData.isPortrait
    ? { width: 180, height: 320 }
    : { width: 320, height: 180 };

  const selectedVideos = mediaData.selectedVideos || [];
  const selectedImages = mediaData.selectedImages || [];

  const visibleMediaItems = [...selectedVideos, ...selectedImages];

  return (
    <Box
      sx={{
        overflowX: 'auto',
        display: 'flex',
        gap: 2,
        position: 'relative',
      }}
    >
      {visibleMediaItems.map((file, index) => (
        <Card
          key={`media-${index}`}
          sx={{
            minWidth: mediaAspectRatio.width,
            height: mediaAspectRatio.height,
            borderRadius: 2,
            overflow: 'hidden',
            aspectRatio: mediaData.isPortrait ? "9 / 16" : "16 / 9",
          }}
        >
          <CardMedia
            component={file.type?.startsWith('video/') ? "video" : "img"}
            controls={file.type?.startsWith('video/') || undefined}
            src={URL.createObjectURL(file)}
            sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
            alt={`Media ${index + 1}`}
          />
        </Card>
      ))}
    </Box>
  );
};

export default PostMedia;