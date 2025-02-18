import React from "react";
import { Dialog, DialogTitle, DialogContent, IconButton, Box, Divider, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DetailedPostTitleText from "../../texts/DetailedPostTitleText";
import ContactText from "../../texts/ContactText";
import PriceCard from "../../texts/PriceCard";
import RoomCountsText from "../../texts/RoomCountsText";
import BathRoomTypeText from "../../texts/BathRoomTypeText";
import ParkAvailabilityText from "../../texts/ParkAvailabilityText";
import CreatedAtText from "../../texts/CreatedAtText";
import PropertyDetailText from "../../texts/PropertyDetailText";
import PreviewScrollableImageGallery from "../PreviewScrollableImageGallery";
import EmbeddedMap from "../../box/post/EmbeddedMap";
import PostKeywordText from "../../texts/PostKeywordText";
import PostProfileBox from "../../box/post/PostProfileBox";

const PropertyDetailedPreviewDialog = ({ open, onClose, subCategory, post, mediaData }) => {
  const userId = localStorage.getItem('userId') || "";

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>
        미리보기
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Box>
            <PreviewScrollableImageGallery imageUrls={mediaData.selectedImages} />

            <Box sx={{ mt: mediaData.selectedImages.length > 0 ? 3 : 0 }}>

                <Box sx={{ pl: 1 }}>
                    <DetailedPostTitleText subCategory={subCategory} title={post.title} />

                    <PostProfileBox userId={userId} />
                    
                    <ContactText contact={post.contact} email={post.email} />

                    <Divider sx={{ my: 2.5 }} />

                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <Box sx={{ display: "flex", gap: 2 }}>
                        <PriceCard price={post.price} period={post.period} isBillIncluded={post.isBillIncluded} />
                        <RoomCountsText roomCount={post.roomCount} width={25} height={25} fontSize={11} />
                        <BathRoomTypeText bathroomType={post.bathroomType} width={25} height={25} fontSize={11} />
                        <ParkAvailabilityText isParkable={post.isParkable} width={25} height={25} fontSize={11} />
                        </Box>

                    </Box>

                    <Divider sx={{ my: 2.5 }} />

                    <Typography
                        variant="body2"
                        sx={{
                            fontWeight: "600",
                            textAlign: "start",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            fontSize: "14px"
                        }}
                    >
                    설명
                    </Typography>
                    
                    <Typography
                        variant="body2"
                        sx={{
                            fontWeight: "400",
                            textAlign: "start",
                            pt: 1.5,
                            whiteSpace: "pre-line"
                        }}
                    >
                    { post.description }
                    </Typography>

                    <CreatedAtText createdAt={post.createdAt} pl={0} />

                    <Divider sx={{ my: 2.5 }} />
                    <PropertyDetailText price={post.price} period={post.period} isBillIncluded={post.isBillIncluded} availableTime={post.availableTime} bathroomType={post.bathroomType} isParkable={post.isParkable} roomCount={post.roomCount} />

                    {post.selectedKeywords.length > 0 && (
                      <Box>
                        <Divider sx={{ my: 2.5 }} />
                        <PostKeywordText keywords={post.selectedKeywords} />
                      </Box>
                    )}
                </Box>
            </Box>

            { post.location ? <EmbeddedMap mapUrl={post.location} /> : <></> }
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default PropertyDetailedPreviewDialog;