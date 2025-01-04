import React from 'react';
import { Box, Divider } from '@mui/material';
import DetailedPostTitleText from '../../../texts/DetailedPostTitleText';
import PostRateBox from '../PostRateBox';
import SchoolMajorText from '../../../texts/SchoolMajorText';
import CreatedAtText from '../../../texts/CreatedAtText';
import BlogContentBox from '../BlogContentBox';


const StudyDetailBox = ({ title, subCategory, postId, school, major, rate, createdAt, blogContents }) => {
  return (
    <Box>
      <Box>
        <Box sx={{ pl: 1 }}>
            <DetailedPostTitleText subCategory={subCategory} title={title} />
            <PostRateBox rate={rate} px={0} />

            <SchoolMajorText school={school} major={major} />

            <Divider sx={{ my: 2.5 }} />

            <BlogContentBox blogContents={blogContents} />

            <CreatedAtText createdAt={createdAt} pl={0} />
        </Box>
      </Box>
    </Box>
  );
};

export default StudyDetailBox;