import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSpecificSocietyPost } from '../../../service/PostService';
import { Box, Grid } from '@mui/material';
import CategorySidebar from '../../../components/bar/CategorySidebar';
import EmbeddedMap from '../../../components/box/post/EmbeddedMap';
import PostCommentBox from '../../../components/box/comment/PostCommentsBox';
import SoceityDetailBox from '../../../components/box/post/society/SocietyDetailBox';
import UpdatePostButton from '../../../components/buttons/UpdatePostButton';
import RemovePostButton from '../../../components/buttons/RemovePostButton';
import LikeCountsText from '../../../components/texts/LikeCountsText';
import CommentsCountsText from '../../../components/texts/CommentsCountsText';
import ViewCountsText from '../../../components/texts/ViewCountsText';
import { PostResponsiveFontSize2 } from '../../../constant/FontSizeResponsive';
import { DetailedPostIconResponsiveSize2 } from '../../../constant/IconSizeResponsive';

const OwnSocietyPostDetailPage = () => {
  const { postId } = useParams();
  const [societyPostData, setSocietyPostData] = useState();
  const commentBoxRef = useRef(null);

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

  const handleScrollToComments = () => {
    commentBoxRef.current?.scrollIntoView({ behavior: 'smooth' });
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
            <SoceityDetailBox userId={societyPostData.userId} imageUrls={societyPostData.imageUrls} description={societyPostData.description} title={societyPostData.title} subCategory={societyPostData.subCategory} postId={societyPostData.postId} contact={societyPostData.contact} email={societyPostData.email} createdAt={societyPostData.createdAt} />
        </Grid>
      </Grid>

      <Box sx={{ mt: 5, display: "flex", justifyContent: "end" }}>
          <LikeCountsText initialLikes={societyPostData.likeCounts} initialIsLiked={societyPostData.isUserLiked} pl={0} postId={societyPostData.postId} width={DetailedPostIconResponsiveSize2} height={DetailedPostIconResponsiveSize2} fontSize={PostResponsiveFontSize2} />
          <Box sx={{ cursor: "pointer" }} onClick={handleScrollToComments}>
              <CommentsCountsText commentsCounts={societyPostData.commentCounts} width={DetailedPostIconResponsiveSize2} height={DetailedPostIconResponsiveSize2} fontSize={PostResponsiveFontSize2} />
          </Box>
          <ViewCountsText viewCounts={societyPostData.viewCounts} width={DetailedPostIconResponsiveSize2} height={DetailedPostIconResponsiveSize2} fontSize={PostResponsiveFontSize2} />
      </Box>

      <Box sx={{ mt: 5, display: "flex", justifyContent: "end", gap: 1 }}>
        <UpdatePostButton postId={societyPostData.postId} />
        <RemovePostButton postId={societyPostData.postId} />
      </Box>

      { societyPostData.location ? <EmbeddedMap mapUrl={societyPostData.location} /> : <></> }

      <Box sx={{ my: 5 }} ref={commentBoxRef}>
          <PostCommentBox postId={postId} />
      </Box>
    </Box>
  );
};

export default OwnSocietyPostDetailPage;