import React, { useState, useRef, useEffect } from "react";
import {
  Paper,
  Typography,
  Grid,
  Box,
  Button,
} from "@mui/material";
import { postEducation } from "../../service/PostService";
import { useParams } from "react-router-dom";
import { logoPrimaryColor } from "../../constant/Color";
import { normalizeSubCategory } from "../../service/CategoryService";
import PostStepper from "../../components/bar/PostStepper";
import EducationMainInfoForm from "../../components/forms/post/EducationMainInfoForm";
import EducationMediaUploadForm from "../../components/forms/post/EducationMediaUploadForm";
import EducationPostPreviewDialog from "../../components/dialog/EducationPostPreviewDialog";

const LaunchEducationPage = () => {
  const [isMainValid, setIsMainValid] = useState(false);
  const [isMediaValid, setIsMediaValid] = useState(false);
  const [mainInfoData, setMainInfoData] = useState({});
  const [mediaData, setMediaData] = useState({});
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const mainInfoRef = useRef(null);
  const mediaUploadRef = useRef(null);
  const submitRef = useRef(null);

  const { subCategory } = useParams();

  useEffect(() => {
    if (isPreviewOpen) {
      handlePreview();
    }
  }, [mediaData]);

  const handleStepClick = (step) => {
    switch (step) {
      case 0:
        mainInfoRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case 1:
        mediaUploadRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case 2:
        submitRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    const formData = new FormData();
    const normalizedSubCategory = normalizeSubCategory(subCategory);

    const educationData = {
      ...mainInfoData,
      "category": "Education",
      "isPortrait": mediaData.isPortrait,
      "subCategory": normalizedSubCategory
    };

    formData.append(
      "educationPostDto",
      new Blob([JSON.stringify(educationData)], { type: "application/json" })
    );

    if (mediaData.logoImage) formData.append("logoImage", mediaData.logoImage);
    mediaData.selectedImages.forEach((file) => formData.append("images", file));
    mediaData.selectedVideos.forEach((file) => formData.append("videos", file));

    postEducation(formData);
  };

  const handlePreview = () => {
    setIsPreviewOpen(true);
  };

  const handleClosePreview = () => {
    setIsPreviewOpen(false);
  };

  return (
    <Paper
      elevation={3}
      sx={{ padding: 4, margin: 4, maxWidth: 800, mx: "auto", backgroundColor: "#f7f9fc" }}
    >
      <Typography variant="h4" gutterBottom align="center" sx={{ color: logoPrimaryColor }}>
        Launch Your Education
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" sx={{ marginBottom: 4 }}>
        Provide all the necessary details to launch your education
      </Typography>

      <PostStepper isMainValid={isMainValid} isMediaValid={isMediaValid} handleStepClick={handleStepClick}/>

      <Grid container spacing={4}>
        <Grid item xs={12} ref={mainInfoRef}>
          <EducationMainInfoForm
            onDataChange={(data) => setMainInfoData(data)}
            setIsFormValid={setIsMainValid}
          />
        </Grid>
        <Grid item xs={12} ref={mediaUploadRef}>
          <Grid item xs={12}>
            <EducationMediaUploadForm
              onMediaChange={(media) => setMediaData(media)}
              setIsMediaValid={setIsMediaValid}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} ref={submitRef}>
          <Box textAlign="right">
            <Button
              type="button"
              variant="outlined"
              sx={{ marginRight: 2, color: logoPrimaryColor, borderColor: logoPrimaryColor }}
              size="large"
              onClick={handlePreview}
            >
              Preview
            </Button>
            <Button
              type="submit"
              variant="contained"
              sx={{ backgroundColor: logoPrimaryColor, color: "#FFF" }}
              size="large"
              disabled={!isMainValid || !isMediaValid}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>

      <EducationPostPreviewDialog
        open={isPreviewOpen}
        onClose={handleClosePreview}
        mainInfoData={mainInfoData}
        mediaData={mediaData}
      />
    </Paper>
  );
};

export default LaunchEducationPage;