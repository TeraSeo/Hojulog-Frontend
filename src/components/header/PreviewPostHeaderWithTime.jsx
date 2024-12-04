import React from "react";
import { Box } from "@mui/material";
import PreviewPostLogo from "../texts/PreviewPostLogo";
import PostTitleText from "../texts/PostTitleText";
import PostSubtitleText from "../texts/PostSubtitleText";
import PostStartEndTimeText from "../texts/PostStartEndTimeText";

const PreviewPostHeaderWithTime = ({ mainInfoData, mediaData }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1, marginBottom: 1, marginRight: 2 }}>
      <PreviewPostLogo logoImage={mediaData.logoImage} />
      <Box sx={{ flexGrow: 1 }}>
        <PostTitleText title={mainInfoData.title} />
        <PostSubtitleText subtitle={mainInfoData.subTitle} />
        <PostStartEndTimeText
          startDateTime={mainInfoData.startDateTime}
          endDateTime={mainInfoData.endDateTime}
        />
      </Box>
    </Box>
  );
};

export default PreviewPostHeaderWithTime;