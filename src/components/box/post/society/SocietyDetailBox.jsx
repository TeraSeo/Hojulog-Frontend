import React from 'react';
import { Box, Divider } from '@mui/material';
import DetailedPostTitleText from '../../../texts/DetailedPostTitleText';
import CreatedAtText from '../../../texts/CreatedAtText';
import PostProfileBox from '../PostProfileBox';
import PostKeywordText from '../../../texts/PostKeywordText';
import BlogContentBox from '../BlogContentBox';

const SoceityDetailBox = ({ userId, title, subCategory, createdAt, blogContents=[], keywords=[] }) => {
  return (
    <Box>
      <Box sx={{ pl: 1 }}>
          <DetailedPostTitleText subCategory={subCategory} title={title} />

          <PostProfileBox userId={userId} />
          
          <Divider sx={{ my: { "md": 2.5, "sm": 2, "xs": 1.5} }} />
          
          <BlogContentBox blogContents={blogContents} />

          <CreatedAtText createdAt={createdAt} pl={0} />

          {keywords.length > 0 && (
            <Box>
              <Divider sx={{ my: 2.5 }} />
              <PostKeywordText keywords={keywords} />
            </Box>
          )}
      </Box>
    </Box>
  );
};

export default SoceityDetailBox;