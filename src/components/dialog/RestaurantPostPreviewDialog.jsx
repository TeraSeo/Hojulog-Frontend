import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, IconButton, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PreviewPostMedia from "../media/PreviewPostMedia";
import PostPreviewTab from "../buttons/PostPreviewTab";
import DescriptionText from "../texts/DescriptionText";
import RestaurantDetailedPostDialog from "./RestaurantDetailedPostDialog";
import LocationButton from "../buttons/LocationButton";
import PostActionsInPreview from "../buttons/PostActionsInPreview";
import PreviewPostHeader from "../header/PreviewPostHeader";

const RestaurantPostPreviewDialog = ({ open, onClose, mainInfoData, mediaData = {} }) => {
  const [detailedDialogOpen, setDetailedDialogOpen] = useState(false);

  const handleViewDetailsClick = () => {
    setDetailedDialogOpen(true);
  };

  const handleDetailedDialogClose = () => {
    setDetailedDialogOpen(false);
  };

  return (
    <>
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
        <DialogTitle>
          Preview Your Post
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{ position: 'absolute', right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
            <PreviewPostHeader mainInfoData={mainInfoData} mediaData={mediaData} />
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LocationButton location={mainInfoData.location} />
            </Box>
          </Box>

          <PostPreviewTab />
          <DescriptionText description={mainInfoData.description} />
          <PreviewPostMedia mediaData={mediaData} />
          <PostActionsInPreview mainInfoData={mainInfoData} onViewDetailsClick={handleViewDetailsClick} />
        </DialogContent>
      </Dialog>
      <RestaurantDetailedPostDialog
        open={detailedDialogOpen}
        onClose={handleDetailedDialogClose}
        mainInfoData={mainInfoData}
        mediaData={mediaData}
      />
    </>
  );
};

export default RestaurantPostPreviewDialog;