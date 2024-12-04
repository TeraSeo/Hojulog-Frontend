import React from "react";
import { Box } from "@mui/material";
import PostTitleText from "../texts/PostTitleText";
import PostSubtitleText from "../texts/PostSubtitleText";
import PostStartEndTimeText from "../texts/PostStartEndTimeText";
import PostLogo from "../texts/PostLogo";

const PostHeaderWithTime = ({ postData }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1, marginBottom: 1, marginRight: 2 }}>
      <PostLogo logoUrl={postData.logoUrl} />
      <Box sx={{ flexGrow: 1 }}>
        <PostTitleText title={postData.title} />
        <PostSubtitleText subtitle={postData.subTitle} />
        <PostStartEndTimeText
          startDateTime={postData.startDateTime}
          endDateTime={postData.endDateTime}
        />
      </Box>
    </Box>
  );
};

export default PostHeaderWithTime;