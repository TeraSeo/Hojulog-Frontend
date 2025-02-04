import React from 'react';
import { Box, Divider } from '@mui/material';
import ScrollableImageGallery from '../ScrollableImageGallery';
import ContactText from '../../../texts/ContactText';
import CreatedAtText from '../../../texts/CreatedAtText';
import DetailedPostTitleText from '../../../texts/DetailedPostTitleText';
import PostDescriptionText from '../../../texts/PostDescriptionText';
import PostProfileBox from '../PostProfileBox';
import PostKeywordText from '../../../texts/PostKeywordText';

const JobDetailBox = ({ userId, imageUrls, description, title, subCategory, contact, email, jobType, createdAt, keywords=[] }) => {
  return (
    <Box>
      <ScrollableImageGallery imageUrls={imageUrls} />

      <Box sx={{ mt: imageUrls.length > 0 ? 3 : 0 }}>

        <Box sx={{ pl: 1 }}>
            <DetailedPostTitleText subCategory={subCategory} title={title} />

            <PostProfileBox userId={userId} />

            <ContactText contact={contact} email={email} />

            <Divider sx={{ my: 2.5 }} />
            
            <PostDescriptionText description={description} />

            <CreatedAtText createdAt={createdAt} pl={0} />

            {keywords.length > 0 && (
              <Box>
                <Divider sx={{ my: 2.5 }} />
                <PostKeywordText keywords={keywords} />
              </Box>
            )}
        </Box>
      </Box>
    </Box>
  );
};

export default JobDetailBox;