import React, { useState, useEffect } from "react";
import { Typography, Grid, Paper } from "@mui/material";
import { useDropzone } from "react-dropzone";
import ImageUploadWithInitialValue from "../../../media/ImageUploadWithInitialValue";
import { convertHEICtoJPEG } from "../../../../service/ImageService";

const EditRecruitmentMediaInfoForm = ({ onMediaChange, setIsMediaValid, existingImages, setExistingImages }) => {
  const [newImages, setNewImages] = useState([]);
  const [errors, setErrors] = useState({});

  const validateMedia = () => {
    const newErrors = {};

    if (existingImages.length + newImages.length > 6) {
        newErrors.selectedImages = "이미지는 최대 6개까지 업로드할 수 있습니다.";
      } else if (newImages.some((file) => !file.type.startsWith("image/"))) {
        newErrors.selectedImages = "유효하지 않은 이미지 파일입니다.";
      }

    setErrors(newErrors);
    setIsMediaValid(Object.keys(newErrors).length === 0);
  };

  useEffect(() => {
    onMediaChange({
        newImages
    });

    validateMedia();
  }, [newImages]);

  const imagesDropzone = useDropzone({
      onDrop: async (acceptedFiles) => {
        const convertedFiles = await Promise.all(acceptedFiles.map((file) => convertHEICtoJPEG(file)));
        const validImages = convertedFiles.filter((file) => file.type.startsWith("image/"));
        
        if (validImages.length + existingImages.length + newImages.length > 6) {
          setErrors((prev) => ({
            ...prev,
            selectedImages: "이미지는 최대 6개까지 업로드할 수 있습니다.",
          }));
        } else {
          setNewImages((prev) => [...prev, ...validImages]);
        }
      },
      accept: "image/*",
    });
  
    const removeImage = (index, isExisting) => {
      if (isExisting) {
        setExistingImages((prev) => prev.filter((_, i) => i !== index));
      } else {
        setNewImages((prev) => prev.filter((_, i) => i !== index));
      }
    };

  return (
    <Paper elevation={3} sx={{ padding: 4, borderRadius: 3 }}>
      <Typography variant="h5" gutterBottom>
        사진 업로드
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 3 }}>
        업로드할 사진을 선택하세요.
      </Typography>

      <Grid container spacing={4}>
        <ImageUploadWithInitialValue
          imagesDropzone={imagesDropzone}
          existingImages={existingImages}
          newImages={newImages}
          removeImage={removeImage}
          errors={errors}
        />
      </Grid>

      {errors.media && (
        <Typography color="error" variant="body2" sx={{ mt: 1 }}>
          {errors.media}
        </Typography>
      )}
    </Paper>
  );
};

export default EditRecruitmentMediaInfoForm;