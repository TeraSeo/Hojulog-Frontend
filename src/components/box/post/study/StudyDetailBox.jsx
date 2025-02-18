import React from 'react';
import { Box, Divider } from '@mui/material';
import DetailedPostTitleText from '../../../texts/DetailedPostTitleText';
import SchoolMajorText from '../../../texts/SchoolMajorText';
import CreatedAtText from '../../../texts/CreatedAtText';
import BlogContentBox from '../BlogContentBox';
import PostProfileBox from '../PostProfileBox';
import PostKeywordText from '../../../texts/PostKeywordText';


const StudyDetailBox = ({ userId, title, subCategory, school, createdAt, blogContents=[], keywords=[] }) => {
  return (
        <Box sx={{ pl: 1 }}>
            <DetailedPostTitleText subCategory={subCategory} title={title} />

            <PostProfileBox userId={userId} />

            <SchoolMajorText school={school} />

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
  );
};

export default StudyDetailBox;