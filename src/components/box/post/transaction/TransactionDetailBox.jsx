import React from 'react';
import { Box, Divider } from '@mui/material';
import ScrollableImageGallery from '../ScrollableImageGallery';
import ContactText from '../../../texts/ContactText';
import CreatedAtText from '../../../texts/CreatedAtText';
import DetailedPostTitleText from '../../../texts/DetailedPostTitleText';
import TransactionPriceText from '../../../texts/TransactionPriceText';
import PostDescriptionText from '../../../texts/PostDescriptionText';
import PostProfileBox from '../PostProfileBox';

const TransactionDetailBox = ({ userId, imageUrls, description, title, subCategory, postId, contact, email, price, createdAt }) => {
  return (
    <Box>
      <ScrollableImageGallery imageUrls={imageUrls} />

      <Box sx={{ mt: imageUrls.length > 0 ? 3 : 0 }}>
        <Box sx={{ pl: 1, position: "relative" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "start",
              mb: 1,
            }}
          >
            <DetailedPostTitleText subCategory={subCategory} title={title} />

            <TransactionPriceText price={price} />
        </Box>

        <PostProfileBox userId={userId} />

          <ContactText contact={contact} email={email} />

          <Divider sx={{ my: 2.5 }} />

          <PostDescriptionText description={description} />
          
          <CreatedAtText createdAt={createdAt} pl={0} />
        </Box>
      </Box>
    </Box>
  );
};

export default TransactionDetailBox;
