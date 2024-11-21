import React from "react";
import { Box, Card, CardContent, CardMedia, Typography, Button, IconButton, Grid } from "@mui/material";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import DeleteIcon from "@mui/icons-material/Delete";

const VideoUploader = ({ videoDropzone, selectedVideos, removeVideo, errors, mediaAspectRatio, logoPrimaryColor }) => (
  <Grid item xs={12}>
    <Card variant="outlined" sx={{ padding: 2, borderColor: "#b0bec5", boxShadow: 3 }}>
      <CardContent>
        <Typography variant="subtitle1" sx={{ color: logoPrimaryColor }} gutterBottom>
          Video (Max: 1)
        </Typography>
        <Box
          {...videoDropzone.getRootProps()}
          sx={{
            border: "2px dashed #b0bec5",
            borderRadius: 3,
            padding: 3,
            textAlign: "center",
            backgroundColor: "#f5f5f5",
            transition: "background-color 0.3s",
            '&:hover': {
              backgroundColor: "#e3f2fd",
            },
          }}
        >
          <input {...videoDropzone.getInputProps()} />
          <Typography variant="body2" sx={{ marginBottom: 2 }}>
            <VideoLibraryIcon sx={{ marginRight: 1 }} />
            Drag & drop your video here, or{" "}
            <Button variant="text" sx={{ color: logoPrimaryColor }} component="span">
              Browse
            </Button>
          </Typography>
        </Box>
        {selectedVideos.length > 0 && (
          <Box
            sx={{
              position: "relative",
              marginTop: 2,
              aspectRatio: mediaAspectRatio === "9x16" ? "9 / 16" : "16 / 9",
              width: "100%", // Full width
              overflow: "hidden",
              borderRadius: 3,
              border: "1px solid #b0bec5",
              boxShadow: 3,
            }}
          >
            <CardMedia
              component="video"
              controls
              src={URL.createObjectURL(selectedVideos[0])}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <IconButton
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                backgroundColor: "#b0bec5",
                color: "#fff",
              }}
              size="small"
              onClick={removeVideo}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Box>
        )}
        {errors.selectedVideos && (
          <Typography color="error" variant="body2" sx={{ marginTop: 1 }}>
            {errors.selectedVideos}
          </Typography>
        )}
        {errors.media && (
          <Typography color="error" variant="body2" sx={{ marginTop: 2 }}>
            {errors.media}
          </Typography>
        )}
      </CardContent>
    </Card>
  </Grid>
);

export default VideoUploader;