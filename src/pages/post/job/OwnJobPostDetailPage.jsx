import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSpecificJobPost } from '../../../service/PostService';
import { Box, Grid } from '@mui/material';
import CategorySidebar from '../../../components/bar/CategorySidebar';
import JobDetailBox from '../../../components/box/post/job/JobDetailBox';
import EmbeddedMap from '../../../components/box/post/EmbeddedMap';
import PostCommentBox from '../../../components/box/comment/PostCommentsBox';
import UpdatePostButton from '../../../components/buttons/UpdatePostButton';
import RemovePostButton from '../../../components/buttons/RemovePostButton';
import LikeCountsText from '../../../components/texts/LikeCountsText';
import CommentsCountsText from '../../../components/texts/CommentsCountsText';
import ViewCountsText from '../../../components/texts/ViewCountsText';
import { DetailedPostIconResponsiveSize2 } from '../../../constant/IconSizeResponsive';
import { PostResponsiveFontSize2 } from '../../../constant/FontSizeResponsive';

const OwnJobPostDetailPage = () => {
  const { postId } = useParams();
  const [jobPostData, setJobPostData] = useState();
  const commentBoxRef = useRef(null);

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

  const handleScrollToComments = () => {
    commentBoxRef.current?.scrollIntoView({ behavior: 'smooth' });
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
            <JobDetailBox userId={jobPostData.userId} imageUrls={jobPostData.imageUrls} description={jobPostData.description} title={jobPostData.title} subCategory={jobPostData.subCategory} postId={jobPostData.postId} contact={jobPostData.contact} email={jobPostData.email} jobType={jobPostData.jobType} createdAt={jobPostData.createdAt} keywords={jobPostData.keywords} />
        </Grid>
      </Grid>

      <Box sx={{ mt: 5, display: "flex", justifyContent: "end" }}>
          <LikeCountsText initialLikes={jobPostData.likeCounts} initialIsLiked={jobPostData.isUserLiked} pl={0} postId={jobPostData.postId} width={DetailedPostIconResponsiveSize2} height={DetailedPostIconResponsiveSize2} fontSize={PostResponsiveFontSize2} />
          <Box sx={{ cursor: "pointer" }} onClick={handleScrollToComments}>
              <CommentsCountsText isCommentAllowed={jobPostData.isCommentAllowed} commentsCounts={jobPostData.commentCounts}width={DetailedPostIconResponsiveSize2} height={DetailedPostIconResponsiveSize2} fontSize={PostResponsiveFontSize2} />
          </Box>
          <ViewCountsText viewCounts={jobPostData.viewCounts} width={DetailedPostIconResponsiveSize2} height={DetailedPostIconResponsiveSize2} fontSize={PostResponsiveFontSize2} />
      </Box>

      <Box sx={{ mt: 5, display: "flex", justifyContent: "end", gap: 1 }}>
          <UpdatePostButton postId={jobPostData.postId} />
          <RemovePostButton postId={jobPostData.postId} />
      </Box> 

      { jobPostData.location ? <EmbeddedMap mapUrl={jobPostData.location} /> : <></> }

      <Box sx={{ my: 5 }} ref={commentBoxRef}>
        {
          jobPostData.isCommentAllowed ? 
          <PostCommentBox postId={postId} />
          :
          <Box />
        }
      </Box>
    </Box>
  );
};

export default OwnJobPostDetailPage;