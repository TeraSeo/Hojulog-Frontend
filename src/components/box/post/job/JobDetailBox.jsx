import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import ScrollableImageGallery from '../ScrollableImageGallery';
import ContactText from '../../../texts/ContactText';
import CreatedAtText from '../../../texts/CreatedAtText';
import DetailedPostTitleText from '../../../texts/DetailedPostTitleText';

const JobDetailBox = ({ imageUrls, description, title, subCategory, postId, contact, email, jobType, createdAt }) => {
  return (
    <Box>
      <ScrollableImageGallery imageUrls={imageUrls} />

      <Box sx={{ mt: imageUrls.length > 0 ? 3 : 0 }}>

        <Box sx={{ pl: 1 }}>
            <DetailedPostTitleText subCategory={subCategory} title={title} />

            <ContactText contact={contact} email={email} />

            <Divider sx={{ my: 2.5 }} />

            <Typography
                variant="body2"
                sx={{
                    fontWeight: "600",
                    textAlign: "start",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    fontSize: "14px"
                }}
            >
              설명
            </Typography>
            
            <Typography
                variant="body2"
                sx={{
                    fontWeight: "400",
                    textAlign: "start",
                    pt: 1.5,
                    whiteSpace: "pre-line"
                }}
            >
              { description }
            </Typography>

            <CreatedAtText createdAt={createdAt} pl={0} />
        </Box>
      </Box>
    </Box>
  );
};

export default JobDetailBox;