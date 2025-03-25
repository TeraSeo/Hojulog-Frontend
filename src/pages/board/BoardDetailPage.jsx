import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSpecificArticlePost } from '../../service/PostService';
import { Box, Grid } from '@mui/material';
import CategorySidebar from '../../components/bar/CategorySidebar';
import LikeCountsText from '../../components/texts/LikeCountsText';
import CommentsCountsText from '../../components/texts/CommentsCountsText';
import ViewCountsText from '../../components/texts/ViewCountsText';
import PostCommentBox from '../../components/box/comment/PostCommentsBox';
import { CommonPagePaddingXSize } from '../../constant/PaddingResponsiveSize';
import { PostResponsiveFontSize2 } from '../../constant/FontSizeResponsive';
import { DetailedPostIconResponsiveSize2 } from '../../constant/IconSizeResponsive';
import BoardDetailBox from '../../components/box/post/board/BoardDetailBox';

const BoardDetailPage = () => {
  const { postId } = useParams();
  const [articlePostData, setArticlePostData] = useState();
  const commentBoxRef = useRef(null);

  useEffect(() => {
    fetchPostData(postId);
  }, []);

  const fetchPostData = (postId) => {
    getSpecificArticlePost(postId)
      .then((data) => {
        setArticlePostData(data);
      })
      .catch((error) => console.error("Error fetching posts:", error));
  };

  const handleScrollToComments = () => {
    commentBoxRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!articlePostData) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{  px: CommonPagePaddingXSize }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
          <CategorySidebar />
        </Grid>

        <Grid item xs={12} md={9}>
            <BoardDetailBox userId={articlePostData.userId} imageUrls={articlePostData.imageUrls} description={articlePostData.description} title={articlePostData.title} createdAt={articlePostData.createdAt} />
        </Grid>
      </Grid>

      <Box sx={{ mt: 5, display: "flex", justifyContent: "end" }}>
          <LikeCountsText initialLikes={articlePostData.likeCounts} initialIsLiked={articlePostData.isUserLiked} pl={0} postId={articlePostData.postId} width={DetailedPostIconResponsiveSize2} height={DetailedPostIconResponsiveSize2} fontSize={PostResponsiveFontSize2} />
          <Box sx={{ cursor: "pointer" }} onClick={handleScrollToComments}>
              <CommentsCountsText isCommentAllowed={articlePostData.isCommentAllowed} commentsCounts={articlePostData.commentCounts} width={DetailedPostIconResponsiveSize2} height={DetailedPostIconResponsiveSize2} fontSize={PostResponsiveFontSize2} />
          </Box>
          <ViewCountsText viewCounts={articlePostData.viewCounts} width={DetailedPostIconResponsiveSize2} height={DetailedPostIconResponsiveSize2} fontSize={PostResponsiveFontSize2} />
      </Box>

      <Box sx={{ my: 5 }} ref={commentBoxRef}>
        {
          articlePostData.isCommentAllowed ? 
          <PostCommentBox postId={postId} />
          :
          <Box />
        }
      </Box>
    </Box>
  );
};

export default BoardDetailPage;
