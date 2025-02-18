import React from "react";
import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import StudyPostPreviewBox from "../../box/post/study/StudyPostPreviewBox";

const StudyPreviewDialog = ({ open, onClose, studyPostData, subCategory }) => {
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
        <StudyPostPreviewBox post={studyPostData} subCategory={subCategory} />
      </DialogContent>
    </Dialog>
  );
};

export default StudyPreviewDialog;