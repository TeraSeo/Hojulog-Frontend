import React from "react";
import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PreviewPropertyPostBox from "../../box/post/property/PreviewPropertyPostBox";

const PropertyPostPreviewDialog = ({ open, onClose, propertyPostData, mediaData, subCategory }) => {
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
        <PreviewPropertyPostBox post={propertyPostData} mediaData={mediaData} subCategory={subCategory} />
      </DialogContent>
    </Dialog>
  );
};

export default PropertyPostPreviewDialog;