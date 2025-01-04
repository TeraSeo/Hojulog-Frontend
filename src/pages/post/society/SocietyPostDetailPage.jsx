import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSpecificSocietyPost } from '../../../service/PostService';
import { Box, Grid } from '@mui/material';
import CategorySidebar from '../../../components/bar/CategorySidebar';
import EmbeddedMap from '../../../components/box/post/EmbeddedMap';
import LikeCountsText from '../../../components/texts/LikeCountsText';
import CommentsCountsText from '../../../components/texts/CommentsCountsText';
import ViewCountsText from '../../../components/texts/ViewCountsText';
import PostCommentBox from '../../../components/box/comment/PostCommentsBox';
import SoceityDetailBox from '../../../components/box/post/society/SocietyDetailBox';

const SocietyPostDetailPage = () => {
  const { postId } = useParams();
  const [societyPostData, setSocietyPostData] = useState();

  useEffect(() => {
    fetchPostData(postId);
  }, []);

  const fetchPostData = (postId) => {
    getSpecificSocietyPost(postId)
      .then((data) => {
        setSocietyPostData(data);
      })
      .catch((error) => console.error("Error fetching posts:", error));
  };

  if (!societyPostData) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{  px: { md: "120px", sm: "40px", xs: "0px" } }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
          <CategorySidebar />
        </Grid>

        <Grid item xs={12} md={9}>
            <SoceityDetailBox imageUrls={societyPostData.imageUrls} description={societyPostData.description} title={societyPostData.title} subCategory={societyPostData.subCategory} postId={societyPostData.postId} contact={societyPostData.contact} email={societyPostData.email} createdAt={societyPostData.createdAt} />
        </Grid>
      </Grid>

      <Box sx={{ mt: 5, display: "flex", justifyContent: "end" }}>
          <LikeCountsText initialLikes={societyPostData.likeCounts} initialIsLiked={societyPostData.isUserLiked} pl={0} postId={societyPostData.postId} />
          <Box sx={{ cursor: "pointer" }}>
              <CommentsCountsText commentsCounts={societyPostData.commentCounts} />
          </Box>
          <ViewCountsText viewCounts={societyPostData.viewCounts} />
      </Box>

      { societyPostData.location ? <EmbeddedMap mapUrl={societyPostData.location} /> : <></> }

      <Box sx={{ mt: 8, mb: 15 }}>
          <PostCommentBox postId={postId} />
      </Box>
    </Box>
  );
};

export default SocietyPostDetailPage;
