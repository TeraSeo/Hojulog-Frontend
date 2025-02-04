import React from 'react';
import { Box, Divider } from '@mui/material';
import DetailedPostTitleText from '../../../texts/DetailedPostTitleText';
import PostRateBox from '../PostRateBox';
import SchoolMajorText from '../../../texts/SchoolMajorText';
import CreatedAtText from '../../../texts/CreatedAtText';
import BlogContentBox from '../BlogContentBox';
import PostProfileBox from '../PostProfileBox';
import PostKeywordText from '../../../texts/PostKeywordText';


const StudyDetailBox = ({ userId, title, subCategory, school, major, rate, createdAt, blogContents=[], keywords=[] }) => {
  return (
    <Box>
      <Box>
        <Box sx={{ pl: 1 }}>
            <DetailedPostTitleText subCategory={subCategory} title={title} />

            <PostRateBox rate={rate} px={0} />

            <PostProfileBox userId={userId} />

            <SchoolMajorText school={school} major={major} />

            <Divider sx={{ my: 2.5 }} />

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
    </Box>
  );
};

export default StudyDetailBox;