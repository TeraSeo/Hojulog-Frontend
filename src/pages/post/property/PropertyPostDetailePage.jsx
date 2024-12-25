import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSpecificPropertyPost } from '../../../service/PostService';
import { Box, Grid } from '@mui/material';
import CategorySidebar from '../../../components/bar/CategorySidebar';
import PropertyDetailBox from '../../../components/box/post/property/PropertyDetailBox';

const PropertyPostDetailePage = () => {
  const { postId } = useParams();
  const [propertyPostData, setPropertyPostData] = useState();

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

  if (!propertyPostData) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ py: "10px", px: { md: "120px", sm: "40px", xs: "0px" } }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
          <CategorySidebar />
        </Grid>

        <Grid item xs={12} md={9}>
            <PropertyDetailBox imageUrls={propertyPostData.imageUrls} description={propertyPostData.description} price={propertyPostData.price} period={propertyPostData.period} roomCount={propertyPostData.roomCount} bathroomType={propertyPostData.bathroomType} location={propertyPostData.location} title={propertyPostData.title} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PropertyPostDetailePage;
