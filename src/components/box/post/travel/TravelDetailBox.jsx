import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import ScrollableImageGallery from '../ScrollableImageGallery';
import ContactText from '../../../texts/ContactText';
import DetailedPostTitleText from '../../../texts/DetailedPostTitleText';
import PostRateBox from '../PostRateBox';
import CreatedAtText from '../../../texts/CreatedAtText';

const TravelDetailBox = ({ imageUrls, description, title, subCategory, postId, contact, email, rate, createdDate }) => {
  return (
    <Box>
      <ScrollableImageGallery imageUrls={imageUrls} />

      <Box sx={{ mt: imageUrls.length > 0 ? 3 : 0 }}>

        <Box sx={{ pl: 1 }}>
            <DetailedPostTitleText subCategory={subCategory} title={title} />

            <PostRateBox rate={rate} px={0} />
            
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

            <CreatedAtText createdAt={createdDate} pl={0} />
        </Box>
      </Box>
    </Box>
  );
};

export default TravelDetailBox;