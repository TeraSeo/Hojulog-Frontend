import React from "react";
import { Dialog, DialogTitle, DialogContent, IconButton, Typography, Box, Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PostTitleText from "../texts/PostTitleText";
import PostMedia from "../media/PostMedia";
import PostDetailedPreviewActions from "../buttons/PostDetailedPreviewActions";
import PostPreviewTab from "../buttons/PostPreviewTab";
import DescriptionText from "../texts/DescriptionText";
import PostFooterText from "../texts/PostFooterText";
import EducationLinksButton from "../buttons/EducationLinksButton";

const EducationDetailedPostDialog = ({ open, onClose, mainInfoData, mediaData }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>
        Detailed View
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 2, marginBottom: 2 }}>
          <PostTitleText mainInfoData={mainInfoData} mediaData={mediaData} />
          <Box sx={{ display: 'flex' }}>
            <EducationLinksButton mainInfoData={mainInfoData} />
          </Box>
        </Box>

        <PostPreviewTab />

        <Typography variant="h6" gutterBottom>
          What is {mainInfoData.title}?
        </Typography>

        <DescriptionText description={mainInfoData.description} />

        <PostMedia mediaData={mediaData} />

        <PostDetailedPreviewActions mainInfoData={mainInfoData} />

        <PostFooterText likesCnt={938} commentsCnt={141} dayRank={1} weekRank={3} />
      </DialogContent>
    </Dialog>
  );
};

export default EducationDetailedPostDialog;
