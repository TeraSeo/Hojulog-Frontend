import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSpecificJobPost, getSpecificPropertyPost } from '../../../service/PostService';
import { Box, Grid } from '@mui/material';
import CategorySidebar from '../../../components/bar/CategorySidebar';
import JobDetailBox from '../../../components/box/post/job/JobDetailBox';
import EmbeddedMap from '../../../components/box/post/EmbeddedMap';
import PostCommentBox from '../../../components/box/comment/PostCommentsBox';
import LikeCountsText from '../../../components/texts/LikeCountsText';
import CommentsCountsText from '../../../components/texts/CommentsCountsText';
import ViewCountsText from '../../../components/texts/ViewCountsText';

const JobPostDetailPage = () => {
  const { postId } = useParams();
  const [jobPostData, setJobPostData] = useState();

  useEffect(() => {
    fetchPostData(postId);
  }, []);

  const fetchPostData = (postId) => {
    getSpecificJobPost(postId)
      .then((data) => {
        setJobPostData(data);
      })
      .catch((error) => console.error("Error fetching posts:", error));
  };

  if (!jobPostData) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ py: "0px", px: { md: "120px", sm: "40px", xs: "0px" } }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
          <CategorySidebar />
        </Grid>

        <Grid item xs={12} md={9}>
            <JobDetailBox imageUrls={jobPostData.imageUrls} description={jobPostData.description} title={jobPostData.title} subCategory={jobPostData.subCategory} postId={jobPostData.postId} contact={jobPostData.contact} email={jobPostData.email} jobType={jobPostData.jobType} createdAt={jobPostData.createdAt} />
        </Grid>
      </Grid>

      <Box sx={{ mt: 5, display: "flex", justifyContent: "end" }}>
          <LikeCountsText initialLikes={jobPostData.likeCounts} initialIsLiked={jobPostData.isUserLiked} pl={0} postId={jobPostData.postId} />
          <Box sx={{ cursor: "pointer" }}>
              <CommentsCountsText commentsCounts={jobPostData.commentCounts} />
          </Box>
          <ViewCountsText viewCounts={jobPostData.viewCounts} />
      </Box>

      { jobPostData.location ? <EmbeddedMap mapUrl={jobPostData.location} /> : <></> }

      <Box sx={{ mt: 8, mb: 15 }}>
          <PostCommentBox postId={postId} />
      </Box>
    </Box>
  );
};

export default JobPostDetailPage;