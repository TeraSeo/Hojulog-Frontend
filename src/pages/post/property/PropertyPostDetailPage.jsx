import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSpecificPropertyPost } from '../../../service/PostService';
import { Box, Grid } from '@mui/material';
import CategorySidebar from '../../../components/bar/CategorySidebar';
import PropertyDetailBox from '../../../components/box/post/property/PropertyDetailBox';
import EmbeddedMap from '../../../components/box/post/EmbeddedMap';
import LikeCountsText from '../../../components/texts/LikeCountsText';
import CommentsCountsText from '../../../components/texts/CommentsCountsText';
import ViewCountsText from '../../../components/texts/ViewCountsText';
import PostCommentBox from '../../../components/box/comment/PostCommentsBox';
import { PostResponsiveFontSize2 } from '../../../constant/FontSizeResponsive';
import { DetailedPostIconResponsiveSize2 } from '../../../constant/IconSizeResponsive';
import { CommonPagePaddingXSize } from '../../../constant/PaddingResponsiveSize';

const PropertyPostDetailPage = () => {
  const { postId } = useParams();
  const [propertyPostData, setPropertyPostData] = useState();
  const commentBoxRef = useRef(null);

  useEffect(() => {
    fetchPostData(postId);
  }, []);

  const fetchPostData = (postId) => {
    getSpecificPropertyPost(postId)
      .then((data) => {
        setPropertyPostData(data);
      })
      .catch((error) => console.error("Error fetching posts:", error));
  };

  const handleScrollToComments = () => {
    commentBoxRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!propertyPostData) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{  px: CommonPagePaddingXSize }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
          <CategorySidebar />
        </Grid>

        <Grid item xs={12} md={9}>
            <PropertyDetailBox userId={propertyPostData.userId} imageUrls={propertyPostData.imageUrls} description={propertyPostData.description} price={propertyPostData.price} period={propertyPostData.period} roomCount={propertyPostData.roomCount} bathroomType={propertyPostData.bathroomType} isParkable={propertyPostData.isParkable} title={propertyPostData.title} subCategory={propertyPostData.subCategory} postId={propertyPostData.postId} contact={propertyPostData.contact} email={propertyPostData.email} isBillIncluded={propertyPostData.isBillIncluded} availableTime={propertyPostData.availableTime} createdAt={propertyPostData.createdAt} keywords={propertyPostData.keywords} />
        </Grid>
      </Grid>

      <Box sx={{ mt: 5, display: "flex", justifyContent: "end" }}>
          <LikeCountsText initialLikes={propertyPostData.likeCounts} initialIsLiked={propertyPostData.isUserLiked} pl={0} postId={propertyPostData.postId} width={DetailedPostIconResponsiveSize2} height={DetailedPostIconResponsiveSize2} fontSize={PostResponsiveFontSize2} />
          <Box sx={{ cursor: "pointer" }} onClick={handleScrollToComments}>
              <CommentsCountsText isCommentAllowed={propertyPostData.isCommentAllowed} commentsCounts={propertyPostData.commentCounts} width={DetailedPostIconResponsiveSize2} height={DetailedPostIconResponsiveSize2} fontSize={PostResponsiveFontSize2} />
          </Box>
          <ViewCountsText viewCounts={propertyPostData.viewCounts} width={DetailedPostIconResponsiveSize2} height={DetailedPostIconResponsiveSize2} fontSize={PostResponsiveFontSize2} />
      </Box>

      { propertyPostData.location ? <EmbeddedMap mapUrl={propertyPostData.location} /> : <></> }

      <Box sx={{ my: 5 }} ref={commentBoxRef}>
        {
          propertyPostData.isCommentAllowed ? 
          <PostCommentBox postId={postId} />
          :
          <Box />
        }
      </Box>
    </Box>
  );
};

export default PropertyPostDetailPage;
