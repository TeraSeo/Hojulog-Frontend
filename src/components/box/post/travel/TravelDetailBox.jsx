import React from 'react';
import { Box, Divider } from '@mui/material';
import DetailedPostTitleText from '../../../texts/DetailedPostTitleText';
import PostRateBox from '../PostRateBox';
import CreatedAtText from '../../../texts/CreatedAtText';
import BlogContentBox from '../BlogContentBox';

const TravelDetailBox = ({ title, subCategory, rate, createdDate, blogContents }) => {
  return (
    <Box>
      <Box>
        <Box sx={{ pl: 1 }}>
            <DetailedPostTitleText subCategory={subCategory} title={title} />

            <PostRateBox rate={rate} px={0} />
            
            <Divider sx={{ my: 2.5 }} />
            
            <BlogContentBox blogContents={blogContents} />

            <CreatedAtText createdAt={createdDate} pl={0} />
        </Box>
      </Box>
    </Box>
  );
};

export default TravelDetailBox;