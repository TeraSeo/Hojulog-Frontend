import React from "react";
import NoImageAvailable from "../../assets/images/no_image_available.jpeg";
import { Box, Card, CardMedia } from "@mui/material";

const EditPreviewImageBox = ({ images = [], existingImages=[], title }) => {
  let firstImageUrl =
    images.length > 0 && images[0] instanceof File
      ? URL.createObjectURL(images[0])
      : NoImageAvailable;
  
  firstImageUrl = existingImages.length > 0 ? existingImages[0] : firstImageUrl;

  return (
    <Card
      sx={{
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        "&:hover": { boxShadow: "0 4px 8px rgba(0,0,0,0.2)" },
        transition: "box-shadow 0.2s ease-in-out",
        width: "100%",
        maxWidth: "200px",
        "@media (max-width: 600px)": {
          maxWidth: "150px",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "0",
          paddingTop: "75%",
          position: "relative",
        }}
      >
        <CardMedia
          component="img"
          image={firstImageUrl}
          alt={title || "No Image Available"}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
    </Card>
  );
};

export default EditPreviewImageBox;
