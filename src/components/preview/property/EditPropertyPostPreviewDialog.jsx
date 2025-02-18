import React from "react";
import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EditPreviewPropertyPostBox from "../../box/post/property/EditPreviewPropertyPostBox";

const EditPropertyPostPreviewDialog = ({ open, onClose, propertyPostData, mediaData, existingImages=[], subCategory }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>
        미리보기
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <EditPreviewPropertyPostBox post={propertyPostData} mediaData={mediaData} subCategory={subCategory} existingImages={existingImages} />
      </DialogContent>
    </Dialog>
  );
};

export default EditPropertyPostPreviewDialog;