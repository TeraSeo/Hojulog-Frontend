import React from "react";
import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import TravelPostBox from "../box/post/travel/TravelPostBox";

const TravelPostPreviewDialog = ({ open, onClose, travelPostData }) => {
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
        <TravelPostBox post={travelPostData} />
      </DialogContent>
    </Dialog>
  );
};

export default TravelPostPreviewDialog;