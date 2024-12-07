import React from "react";
import { Box } from "@mui/material";
import PostTitleText from "../../texts/PostTitleText";
import PostSubtitleText from "../../texts/PostSubtitleText";
import CreatedAtText from "../../texts/CreatedAtText";
import PostSingleMedia from "../../media/PostSingleMedia";

const SummarisePostBox = ({ post }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: 2,
        marginBottom: 1,
        padding: 2,
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
        overflow: "hidden"
      }}
    >
      <Box sx={{ flex: 1 }}>
        <PostTitleText title={post.title} />
        <PostSubtitleText subtitle={post.subTitle} />
        <CreatedAtText createdAt={post.createdAt} />
      </Box>

      <Box
        sx={{
          flexShrink: 0,
          width: "30%",
          maxWidth: "150px",
          aspectRatio: "16 / 9"
        }}
      >
        <PostSingleMedia
          youtubeUrl={post.youtubeUrl}
          imageUrls={post.imageUrls}
          isPortrait={post.isPortrait}
        />
      </Box>
    </Box>
  );
};

export default SummarisePostBox;
