import React, { useState, useRef, useEffect } from "react";
import {
  Paper,
  Typography,
  Grid,
  Box,
  Button,
} from "@mui/material";
import TechnologyMediaUploadForm from "../../components/forms/post/TechnologyMediaUploadForm";
import TechnologyMainInfoForm from "../../components/forms/post/TechnologyMainInfoForm";
import { normalizeEmptyStringsToNull, postTechnology } from "../../service/PostService";
import TechnologyPostPreviewDialog from "../../components/dialog/TechnologyPostPreviewDialog";
import { useNavigate, useParams } from "react-router-dom";
import { logoPrimaryColor } from "../../constant/Color";
import { normalizeSubCategory } from "../../service/CategoryService";
import PostStepper from "../../components/bar/PostStepper";

const LaunchTechnologyPage = () => {
  const [isMainValid, setIsMainValid] = useState(false);
  const [isMediaValid, setIsMediaValid] = useState(false);
  const [mainInfoData, setMainInfoData] = useState({});
  const [mediaData, setMediaData] = useState({});
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

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

  const handleSubmit = async () => {
    const formData = new FormData();
    const normalizedSubCategory = normalizeSubCategory("Technology", subCategory);
    const normalizedMainInfoData = normalizeEmptyStringsToNull(mainInfoData);

    const techPostData = {
      ...normalizedMainInfoData,
      "category": "Technology",
      "isPortrait": mediaData.isPortrait,
      "subCategory": normalizedSubCategory
    };

    formData.append(
      "technologyPostDto",
      new Blob([JSON.stringify(techPostData)], { type: "application/json" })
    );

    if (mediaData.logoImage) formData.append("logoImage", mediaData.logoImage);
    mediaData.selectedImages.forEach((file) => formData.append("images", file));
    mediaData.selectedVideos.forEach((file) => formData.append("videos", file));

    setIsLoading(true);
    const isCreated = await postTechnology(formData);
        if (isCreated) {
            navigate("/");
        } else {
          setError("Failed to submit your post. Please try again.");
          setIsLoading(false);
        }
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
        Launch Your Technology
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" sx={{ marginBottom: 4 }}>
        Provide all the necessary details to launch your product
      </Typography>

      <PostStepper isMainValid={isMainValid} isMediaValid={isMediaValid} handleStepClick={handleStepClick}/>

      <Grid container spacing={4}>
        <Grid item xs={12} ref={mainInfoRef}>
          <TechnologyMainInfoForm
            onDataChange={(data) => setMainInfoData(data)}
            setIsFormValid={setIsMainValid}
          />
        </Grid>
        <Grid item xs={12} ref={mediaUploadRef}>
          <Grid item xs={12}>
            <TechnologyMediaUploadForm
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
              disabled={!isMainValid || !isMediaValid || isLoading}
              onClick={handleSubmit}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </Button>

            {error && (
              <Typography color="error" align="center" sx={{ marginBottom: 2 }}>
                {error}
              </Typography>
            )}
          </Box>
        </Grid>
      </Grid>

      {/* Technology Post Preview Dialog */}
      <TechnologyPostPreviewDialog
        open={isPreviewOpen}
        onClose={handleClosePreview}
        mainInfoData={mainInfoData}
        mediaData={mediaData}
      />
    </Paper>
  );
};

export default LaunchTechnologyPage;