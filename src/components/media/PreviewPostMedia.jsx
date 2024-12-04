import React, { useState } from "react";
import { Box, Card, CardMedia, Typography } from "@mui/material";

const PreviewPostMedia = ({ mediaData }) => {
  const mediaAspectRatio = mediaData.isPortrait
    ? { width: 180, height: 320 }
    : { width: 320, height: 180 };

  const selectedImages = mediaData.selectedImages || [];
  const youtubeUrl = mediaData.youtubeUrl;

  const [youtubeError, setYoutubeError] = useState(false);

  const getYoutubeEmbedUrl = (url) => {
    const videoIdMatch = url?.match(
      /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed|shorts)?)\/|\S*?[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/
    );
    return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}` : null;
  };

  const embedUrl = getYoutubeEmbedUrl(youtubeUrl);

  return (
    <Box
      sx={{
        overflowX: "auto",
        display: "flex",
        gap: 2,
        position: "relative",
      }}
    >
      {/* Display YouTube video or Shorts if embed URL is valid */}
      {embedUrl && !youtubeError && (
        <Card
          sx={{
            minWidth: mediaAspectRatio.width,
            height: mediaAspectRatio.height,
            borderRadius: 2,
            overflow: "hidden",
            aspectRatio: mediaData.isPortrait ? "9 / 16" : "16 / 9",
          }}
        >
          <CardMedia
            component="iframe"
            src={embedUrl}
            sx={{ width: "100%", height: "100%", border: 0 }}
            onError={() => setYoutubeError(true)}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube Video or Shorts"
          />
        </Card>
      )}

      {/* Fallback message for YouTube embedding errors */}
      {youtubeError && (
        <Typography variant="body2" color="error">
          Unable to load YouTube video. Please check your internet connection or URL.
        </Typography>
      )}

      {/* Display selected images */}
      {selectedImages.map((file, index) => (
        <Card
          key={`media-${index}`}
          sx={{
            minWidth: mediaAspectRatio.width,
            height: mediaAspectRatio.height,
            borderRadius: 2,
            overflow: "hidden",
            aspectRatio: mediaData.isPortrait ? "9 / 16" : "16 / 9",
          }}
        >
          <CardMedia
            component="img"
            src={URL.createObjectURL(file)}
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt={`Media ${index + 1}`}
          />
        </Card>
      ))}

      {/* If no media is present */}
      {!embedUrl && selectedImages.length === 0 && (
        <Typography variant="body2" color="textSecondary">
          No media to display.
        </Typography>
      )}
    </Box>
  );
};

export default PreviewPostMedia;