import React from "react";
import { Box } from "@mui/material";
import PostLogo from "../texts/PostLogo";
import PostTitleText from "../texts/PostTitleText";
import PostSubtitleText from "../texts/PostSubtitleText";
import CreatedAtText from "../texts/CreatedAtText";

const PostHeader = ({ postData }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1, marginBottom: 1, marginRight: 2 }}>
      <PostLogo logoUrl={postData.logoUrl} />
      <Box sx={{ flexGrow: 1 }}>
        <PostTitleText title={postData.title} />
        <PostSubtitleText subtitle={postData.subTitle} />
        <CreatedAtText createdAt={postData.createdAt} />
      </Box>
    </Box>
  );
};

export default PostHeader;
