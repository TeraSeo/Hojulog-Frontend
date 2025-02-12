import React from 'react';
import { Box, Divider } from '@mui/material';
import DetailedPostTitleText from '../../../texts/DetailedPostTitleText';
import CreatedAtText from '../../../texts/CreatedAtText';
import BlogContentBox from '../BlogContentBox';
import PostProfileBox from '../PostProfileBox';
import PostKeywordText from '../../../texts/PostKeywordText';

const TravelDetailBox = ({ userId, title, subCategory, rate, createdDate, blogContents=[], keywords=[] }) => {
  return (
        <Box sx={{ pl: 1 }}>
            <DetailedPostTitleText subCategory={subCategory} title={title} />

            <PostProfileBox userId={userId} />
            
            <Divider sx={{ my: { "md": 2.5, "sm": 2, "xs": 1.5} }} />
            
            <BlogContentBox blogContents={blogContents} />

            <CreatedAtText createdAt={createdDate} pl={0} />

            {keywords.length > 0 && (
              <Box>
                <Divider sx={{ my: 2.5 }} />
                <PostKeywordText keywords={keywords} />
              </Box>
            )}
        </Box>
  );
};

export default TravelDetailBox;