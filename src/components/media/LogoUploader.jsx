import React from "react";
import { Box, Card, CardContent, CardMedia, Typography, Button, IconButton, Grid } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { useDropzone } from "react-dropzone";

const LogoUploader = ({ logoDropzone, logoImage, removeLogo, errors, logoPrimaryColor }) => (
  <Grid item xs={12}>
    {!logoImage ? (
      <Card variant="outlined" sx={{ padding: 2, borderColor: "#b0bec5", boxShadow: 3 }}>
        <CardContent>
          <Typography variant="subtitle1" sx={{ color: logoPrimaryColor }} gutterBottom>
            Logo Image <span style={{ color: "#ffb300" }}>*</span>
          </Typography>
          <Box
            {...logoDropzone.getRootProps()}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "2px dashed #b0bec5",
              borderRadius: 3,
              padding: 3,
              textAlign: "center",
              backgroundColor: "#f5f5f5",
              '&:hover': { backgroundColor: "#e3f2fd" },
            }}
          >
            <input {...logoDropzone.getInputProps()} />
            <Typography variant="body2" sx={{ marginBottom: 2 }}>
              <PhotoCameraIcon sx={{ marginRight: 1 }} />
              Drag & drop your logo here, or{" "}
              <Button variant="text" sx={{ color: logoPrimaryColor }} component="span">
                Browse
              </Button>
            </Typography>
          </Box>
          {errors.logoImage && (
            <Typography color="error" variant="body2" sx={{ marginTop: 1 }}>
              {errors.logoImage}
            </Typography>
          )}
        </CardContent>
      </Card>
    ) : (
      <Card variant="outlined" sx={{ textAlign: "center", boxShadow: 3, borderRadius: 3 }}>
        <CardContent>
          <Box sx={{ position: "relative", width: "fit-content", margin: "0 auto" }}>
            <CardMedia
              component="img"
              image={URL.createObjectURL(logoImage)}
              alt="Logo"
              sx={{ width: 100, height: 100, borderRadius: 8, objectFit: "cover" }}
            />
            <IconButton
              sx={{ position: "absolute", top: 0, right: 0, backgroundColor: "#b0bec5", color: "#fff" }}
              size="small"
              onClick={removeLogo}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Box>
          <Typography variant="caption" display="block" sx={{ marginTop: 2 }}>
            {logoImage.name}
          </Typography>
        </CardContent>
      </Card>
    )}
  </Grid>
);

export default LogoUploader;