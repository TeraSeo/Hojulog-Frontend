import React, { useState } from "react";
import { Box, Card, CardMedia, Typography } from "@mui/material";

const PostMedia = ({ postData }) => {
  const mediaAspectRatio = postData.isPortrait
    ? { width: 180, height: 320 }
    : { width: 320, height: 180 };

  const images = postData.imageUrls || [];
  const youtubeUrl = postData.youtubeUrl;

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
      {embedUrl && !youtubeError && (
        <Card
          sx={{
            minWidth: mediaAspectRatio.width,
            height: mediaAspectRatio.height,
            borderRadius: "12px",
            overflow: "hidden",
            aspectRatio: postData.isPortrait ? "9 / 16" : "16 / 9",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <CardMedia
            component="iframe"
            src={embedUrl}
            sx={{
              width: "100%",
              height: "100%",
              border: 0,
            }}
            onError={() => setYoutubeError(true)}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube Video or Shorts"
          />
        </Card>
      )}

      {youtubeError && (
        <Typography variant="body2" color="error" sx={{ textAlign: "center" }}>
          Unable to load YouTube video. Please check your internet connection or URL.
        </Typography>
      )}

      {images.map((url, index) => (
        <Card
          key={`media-${index}`}
          sx={{
            minWidth: mediaAspectRatio.width,
            height: mediaAspectRatio.height,
            borderRadius: "12px",
            overflow: "hidden",
            aspectRatio: postData.isPortrait ? "9 / 16" : "16 / 9",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <CardMedia
            component="img"
            src={url}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              imageRendering: "auto",
            }}
            alt={`Media ${index + 1}`}
          />
        </Card>
      ))}

      {!embedUrl && images.length === 0 && (
        <Typography variant="body2" color="textSecondary" sx={{ textAlign: "center" }}>
          No media to display.
        </Typography>
      )}
    </Box>
  );
};

export default PostMedia;
