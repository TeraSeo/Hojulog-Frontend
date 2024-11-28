import React, { useState, useEffect } from "react";
import { Typography, Grid, Paper } from "@mui/material";
import { useDropzone } from "react-dropzone";
import LogoUploader from "../../media/LogoUploader";
import ImageUploader from "../../media/ImageUploader";
import AspectRatioSelector from "../../media/AspectRatioSelector";
import YouTubeUploader from "../../media/YouTubeUploader";

const LifeStyleMediaUploadForm = ({ onMediaChange, setIsMediaValid }) => {
  const [logoImage, setLogoImage] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [errors, setErrors] = useState({});
  const [mediaAspectRatio, setMediaAspectRatio] = useState("16x9");

  const validateMedia = () => {
    const newErrors = {};

    // Validate logo
    if (logoImage && !logoImage.type.startsWith("image/")) {
      newErrors.logoImage = "Logo must be a valid image file.";
    }

    // Validate images
    if (selectedImages.length > 5) {
      newErrors.selectedImages = "You can upload up to 5 images only.";
    } else if (selectedImages.some((file) => !file.type.startsWith("image/"))) {
      newErrors.selectedImages = "All files must be valid image files.";
    }

    // Validate YouTube URL
    if (youtubeUrl && !isValidYoutubeUrl(youtubeUrl)) {
      newErrors.youtubeUrl = "Please enter a valid YouTube URL (standard video or Shorts).";
    }

    // Ensure at least one media item is provided
    if (selectedImages.length === 0 && !youtubeUrl) {
      newErrors.media = "At least one image or a YouTube URL is required.";
    }

    setErrors(newErrors);
    setIsMediaValid(Object.keys(newErrors).length === 0);
  };

  const isValidYoutubeUrl = (url) => {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=[\w-]{11}|embed\/[\w-]{11}|shorts\/[\w-]{11}|v\/[\w-]{11})|youtu\.be\/[\w-]{11})$/;
    return youtubeRegex.test(url);
  };

  const handleYoutubeUrlChange = (url) => {
    setYoutubeUrl(url);
  };

  useEffect(() => {
    const isPortrait = mediaAspectRatio === "9x16";

    onMediaChange({
      logoImage,
      selectedImages,
      youtubeUrl,
      isPortrait,
    });

    validateMedia();
  }, [logoImage, selectedImages, youtubeUrl, mediaAspectRatio]);

  const logoDropzone = useDropzone({
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (!file?.type.startsWith("image/")) {
        setErrors((prev) => ({
          ...prev,
          logoImage: "Logo must be a valid image file.",
        }));
        return;
      }

      const img = new Image();
      img.onload = () => {
        if (img.width !== img.height) {
          setErrors((prev) => ({
            ...prev,
            logoImage: "Logo image must be square.",
          }));
        } else {
          setErrors((prev) => ({ ...prev, logoImage: null }));
          setLogoImage(file);
        }
      };
      img.src = URL.createObjectURL(file);
    },
    accept: "image/*",
    maxFiles: 1,
  });

  const imagesDropzone = useDropzone({
    onDrop: (acceptedFiles) => {
      const validImages = acceptedFiles.filter((file) => file.type.startsWith("image/"));
      if (validImages.length + selectedImages.length > 5) {
        setErrors((prev) => ({
          ...prev,
          selectedImages: "You can upload up to 5 images only.",
        }));
      } else {
        setSelectedImages((prev) => [...prev, ...validImages]);
      }
    },
    accept: "image/*",
  });

  const removeImage = (index) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== index));
  };

  const removeLogo = () => setLogoImage(null);

  return (
    <Paper elevation={3} sx={{ padding: 4, borderRadius: 3 }}>
      <Typography variant="h5" gutterBottom>
        Media Upload
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 3 }}>
        Upload your logo, images, and YouTube video URL (standard video or Shorts).
      </Typography>

      {errors.invalidFile && (
        <Typography color="error" variant="body2" sx={{ marginBottom: 2 }}>
          {errors.invalidFile}
        </Typography>
      )}

      <Grid container spacing={4}>
        <LogoUploader
          logoDropzone={logoDropzone}
          logoImage={logoImage}
          removeLogo={removeLogo}
          errors={errors}
          logoPrimaryColor="#001f5b"
        />

        <AspectRatioSelector
          mediaAspectRatio={mediaAspectRatio}
          handleAspectRatioChange={(event, newAspectRatio) => {
            if (newAspectRatio) setMediaAspectRatio(newAspectRatio);
          }}
        />

        <ImageUploader
          imagesDropzone={imagesDropzone}
          selectedImages={selectedImages}
          removeImage={removeImage}
          errors={errors}
          mediaAspectRatio={mediaAspectRatio}
        />

        <Grid item xs={12}>
          <YouTubeUploader
            youtubeUrl={youtubeUrl}
            handleYoutubeUrlChange={handleYoutubeUrlChange}
            error={errors.youtubeUrl}
          />
        </Grid>
      </Grid>

      {errors.media && (
        <Typography color="error" variant="body2" sx={{ mt: 1 }}>
          {errors.media}
        </Typography>
      )}
    </Paper>
  );
};

export default LifeStyleMediaUploadForm;
