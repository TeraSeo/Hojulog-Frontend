import React from "react";
import { Box, Card, CardContent, CardMedia, Typography, IconButton, Button, Grid } from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import DeleteIcon from "@mui/icons-material/Delete";

const ImageUploader = ({ imagesDropzone, selectedImages, removeImage, errors }) => (
  <Grid item xs={12}>
    <Card variant="outlined" sx={{ padding: 2, borderColor: "#b0bec5", boxShadow: 3 }}>
      <CardContent>
        <Typography variant="subtitle1" gutterBottom>
          이미지 업로드 (최대: 6장)
        </Typography>
        <Box
          {...imagesDropzone.getRootProps()}
          sx={{
            border: "2px dashed #b0bec5",
            borderRadius: 3,
            padding: 3,
            textAlign: "center",
            backgroundColor: "#f5f5f5",
            transition: "background-color 0.3s",
            '&:hover': { backgroundColor: "#e3f2fd" },
          }}
        >
          <input {...imagesDropzone.getInputProps()} />
          <Typography variant="body2">
            <PhotoCameraIcon sx={{ marginRight: 1 }} />
            이미지를 여기로 드래그하거나{" "}
            <Button variant="text" sx={{ color: "#001f5b" }} component="span">
              여기
            </Button>
            를 클릭하세요.
          </Typography>
        </Box>
        {selectedImages.length > 0 && (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, marginTop: 2 }}>
            {selectedImages.map((file, index) => (
              <Box
                key={index}
                sx={{
                  position: "relative",
                  width: '100px',
                  aspectRatio: '16 / 13',
                  overflow: "hidden",
                  borderRadius: 3,
                  border: "1px solid #b0bec5",
                  boxShadow: 3,
                }}
              >
                <CardMedia
                  component="img"
                  image={URL.createObjectURL(file)}
                  alt={`미리보기 ${index + 1}`}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    backgroundColor: "#b0bec5",
                    color: "#fff",
                  }}
                  size="small"
                  onClick={() => removeImage(index)}
                  aria-label={`이미지 삭제 ${index + 1}`}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Box>
            ))}
          </Box>
        )}
        {errors.selectedImages && (
          <Typography color="error" variant="body2" sx={{ marginTop: 1 }}>
            {errors.selectedImages}
          </Typography>
        )}
      </CardContent>
    </Card>
  </Grid>
);

export default ImageUploader;