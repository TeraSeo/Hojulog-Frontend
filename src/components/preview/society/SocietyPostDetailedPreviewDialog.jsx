import React from "react";
import { Dialog, DialogTitle, DialogContent, IconButton, Box, Divider, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DetailedPostTitleText from "../../texts/DetailedPostTitleText";
import CreatedAtText from "../../texts/CreatedAtText";
import PostKeywordText from "../../texts/PostKeywordText";
import PostProfileBox from "../../box/post/PostProfileBox";
import PreviewBlogContentBox from "../../box/post/PreviewBlogContentBox";

const SocietyPostDetailedPreviewDialog = ({ open, onClose, subCategory, post }) => {
  const userId = localStorage.getItem('userId') || "";
  
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
        <Box>
            <DetailedPostTitleText subCategory={subCategory} title={post.title} />

            <PostProfileBox userId={userId} />

            <Divider sx={{ my: { "md": 2.5, "sm": 2, "xs": 1.5} }} />

            <PreviewBlogContentBox blogContents={post.blogContents} />

            <CreatedAtText createdAt={post.createdDate} pl={0} />

            {post.selectedKeywords.length > 0 && (
            <Box>
                <Divider sx={{ my: 2.5 }} />
                <PostKeywordText keywords={post.selectedKeywords} />
            </Box>
            )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default SocietyPostDetailedPreviewDialog;