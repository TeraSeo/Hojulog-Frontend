import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import ScrollableImageGallery from '../ScrollableImageGallery';
import CreatedAtText from '../../../texts/CreatedAtText';
import PostDescriptionText from '../../../texts/PostDescriptionText';
import PostProfileBox from '../PostProfileBox';
import { PostTitleFontSize } from '../../../../constant/FontSizeResponsive';

const BoardDetailBox = ({ userId, imageUrls, description, title, createdAt }) => {
  return (
    <Box>
      <ScrollableImageGallery imageUrls={imageUrls} />

      <Box sx={{ mt: imageUrls.length > 0 ? 3 : 0 }}>

        <Box sx={{ pl: 1 }}>
            <Typography variant="body2" sx={{
                fontSize: PostTitleFontSize,
                fontWeight: "400",
                textAlign: "start",
                whiteSpace: "normal", 
                wordBreak: "break-word", 
                overflow: "hidden",   
                width: "100%",        
            }}
            >
                {title || "No Title Available"}
            </Typography>

            <PostProfileBox userId={userId} />

            <Divider sx={{ my: 2.5 }} />
            
            <PostDescriptionText description={description} />

            <CreatedAtText createdAt={createdAt} pl={0} />
        </Box>
      </Box>
    </Box>
  );
};

export default BoardDetailBox;