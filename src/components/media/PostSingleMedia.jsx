import React, { useState } from "react";
import { Box, Card, CardMedia, Typography } from "@mui/material";

const PostSingleMedia = ({ youtubeUrl, imageUrls, isPortrait = false }) => {
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
        position: "relative",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        width: "100%",
        maxWidth: "320px", // Maximum width for the media
        aspectRatio: isPortrait ? "9 / 16" : "16 / 9", // Maintain aspect ratio
      }}
    >
      {/* Show YouTube video if available */}
      {embedUrl && !youtubeError && (
        <Card
          sx={{
            width: "100%",
            height: "100%",
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
            title="YouTube Video"
          />
        </Card>
      )}

      {/* Show first image if no YouTube video exists or if there's an error */}
      {(!embedUrl || youtubeError) && imageUrls && imageUrls.length > 0 && (
        <Card
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <CardMedia
            component="img"
            src={imageUrls[0]} // Show only the first image
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            alt="Post Media"
          />
        </Card>
      )}

      {/* Fallback message if no media exists */}
      {(!embedUrl && (!imageUrls || imageUrls.length === 0)) && (
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ textAlign: "center", padding: 2 }}
        >
          No media to display.
        </Typography>
      )}
    </Box>
  );
};

export default PostSingleMedia;
