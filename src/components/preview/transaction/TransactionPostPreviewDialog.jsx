import React from "react";
import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import TransactionPostPreviewBox from "../../box/post/transaction/TransactionPostPreviewBox";

const TransactionPostPreviewDialog = ({ open, onClose, transactionPostData, mediaData, subCategory }) => {
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
        <TransactionPostPreviewBox post={transactionPostData} mediaData={mediaData} subCategory={subCategory} />
      </DialogContent>
    </Dialog>
  );
};

export default TransactionPostPreviewDialog;