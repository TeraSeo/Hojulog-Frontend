import React from "react";
import { Box } from "@mui/material";
import PreviewPostLogo from "../texts/PreviewPostLogo";
import PostSubtitleText from "../texts/PostSubtitleText";
import PostTitleText from "../texts/PostTitleText";

const PreviewPostHeader = ({ mainInfoData, mediaData }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1, marginBottom: 1, marginRight: 2 }}>
      <PreviewPostLogo logoImage={mediaData.logoImage} />
      <Box sx={{ flexGrow: 1 }}>
        <PostTitleText title={mainInfoData.title} />
        <PostSubtitleText subtitle={mainInfoData.subTitle} />
      </Box>
    </Box>
  );
};

export default PreviewPostHeader;