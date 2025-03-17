import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getSpecificTransactionPost } from '../../../service/PostService';
import { Box, Grid } from '@mui/material';
import CategorySidebar from '../../../components/bar/CategorySidebar';
import PostCommentBox from '../../../components/box/comment/PostCommentsBox';
import TransactionDetailBox from '../../../components/box/post/transaction/TransactionDetailBox';
import UpdatePostButton from '../../../components/buttons/UpdatePostButton';
import RemovePostButton from '../../../components/buttons/RemovePostButton';
import LikeCountsText from '../../../components/texts/LikeCountsText';
import CommentsCountsText from '../../../components/texts/CommentsCountsText';
import ViewCountsText from '../../../components/texts/ViewCountsText';
import { PostResponsiveFontSize2 } from '../../../constant/FontSizeResponsive';
import { DetailedPostIconResponsiveSize2 } from '../../../constant/IconSizeResponsive';
import { CommonPagePaddingXSize } from '../../../constant/PaddingResponsiveSize';

const OwnTransactionPostDetailPage = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId') || "";
  const { postId } = useParams();
  const [transactionPostData, setTransactionPostData] = useState();
  const commentBoxRef = useRef(null);

  useEffect(() => {
    fetchPostData(postId);
  }, []);

  const fetchPostData = (postId) => {
    getSpecificTransactionPost(postId)
      .then((data) => {
        setTransactionPostData(data);
        if (userId !== data.userId) { navigate("/"); }
      })
      .catch((error) => console.error("Error fetching posts:", error));
  };

  const handleScrollToComments = () => {
    commentBoxRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!transactionPostData) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{  px: CommonPagePaddingXSize }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
          <CategorySidebar />
        </Grid>

        <Grid item xs={12} md={9}>
            <TransactionDetailBox userId={transactionPostData.userId} imageUrls={transactionPostData.imageUrls} description={transactionPostData.description} title={transactionPostData.title} subCategory={transactionPostData.subCategory} contact={transactionPostData.contact} email={transactionPostData.email} createdAt={transactionPostData.createdAt} priceType={transactionPostData.priceType} price={transactionPostData.price} keywords={transactionPostData.keywords} />
        </Grid>
      </Grid>

      <Box sx={{ mt: 5, display: "flex", justifyContent: "end" }}>
          <LikeCountsText initialLikes={transactionPostData.likeCounts} initialIsLiked={transactionPostData.isUserLiked} pl={0} postId={transactionPostData.postId} width={DetailedPostIconResponsiveSize2} height={DetailedPostIconResponsiveSize2} fontSize={PostResponsiveFontSize2} />
          <Box sx={{ cursor: "pointer" }} onClick={handleScrollToComments}>
              <CommentsCountsText isCommentAllowed={transactionPostData.isCommentAllowed} commentsCounts={transactionPostData.commentCounts} width={DetailedPostIconResponsiveSize2} height={DetailedPostIconResponsiveSize2} fontSize={PostResponsiveFontSize2} />
          </Box>
          <ViewCountsText viewCounts={transactionPostData.viewCounts} width={DetailedPostIconResponsiveSize2} height={DetailedPostIconResponsiveSize2} fontSize={PostResponsiveFontSize2} />
      </Box>

      <Box sx={{ mt: 5, display: "flex", justifyContent: "end", gap: 1}}>
          <UpdatePostButton postId={transactionPostData.postId} />
          <RemovePostButton postId={transactionPostData.postId} />
      </Box>

      <Box sx={{ my: 5 }} ref={commentBoxRef}>
        {
          transactionPostData.isCommentAllowed ? 
          <PostCommentBox postId={postId} />
          :
          <Box />
        }
      </Box>
    </Box>
  );
};

export default OwnTransactionPostDetailPage;
