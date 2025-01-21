import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import ImageUploader from "../../media/ImageUploader";

const InquiryMediaUploadForm = ({ onMediaChange }) => {
    const [selectedImages, setSelectedImages] = useState([]);

    const [errors, setErrors] = useState({});

    const checkFormValidity = () => {
        const newErrors = {};

        if (selectedImages.length > 6) {
            newErrors.selectedImages = "이미지는 최대 6개까지 업로드할 수 있습니다.";
        } else if (selectedImages.some((file) => !file.type.startsWith("image/"))) {
            newErrors.selectedImages = "유효하지 않은 이미지 파일입니다.";
        }
    
        setErrors(newErrors);
    };

    useEffect(() => {
        onMediaChange({
          selectedImages,
        });
    
        checkFormValidity();
      }, [selectedImages]);

    const imagesDropzone = useDropzone({
        onDrop: (acceptedFiles) => {
            const validImages = acceptedFiles.filter((file) => file.type.startsWith("image/"));
            if (validImages.length + selectedImages.length > 6) {
            setErrors((prev) => ({
                ...prev,
                selectedImages: "이미지는 최대 6개까지 업로드할 수 있습니다.",
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

    return <Box>
        <Grid container spacing={4} sx={{ mt: 1 }}>
            <ImageUploader
                imagesDropzone={imagesDropzone}
                selectedImages={selectedImages}
                removeImage={removeImage}
                errors={errors}
            />
        </Grid>

        {errors.media && (
            <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                {errors.media}
            </Typography>
        )}
    </Box>
}

export default InquiryMediaUploadForm;