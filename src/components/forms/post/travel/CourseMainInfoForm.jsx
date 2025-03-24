import React, { useState, useEffect } from "react";
import { Typography, Grid, Paper } from "@mui/material";
import TitleField from "../../../textfields/TitleField";
import { keywordOverError, locationFormatError, locationRequiredError, titleRequiredError, travelSuburbRequiredError } from "../../../../constant/ErrorMsg";
import LocationField from "../../../textfields/LocationField";
import LocationDialog from "../../../dialog/LocationDialog";
import ContentBlockManager from "../ContentBlockManager";
import PostVisibleField from "../../../textfields/PostVisibleField";
import TravelKeyWordField from "../../../textfields/TravelKeyWordField";
import CommentAvailabilityField from "../../../textfields/CommentAvailabilityField";
import TravelSuburbField from "../../../textfields/TravelSuburbField";

const CourseMainInfoForm = ({ onDataChange, setIsFormValid }) => {
  const [formValues, setFormValues] = useState({
    title: "",
    travelSuburb: "시드니",
    location: "",
    blogContents: [],
    selectedKeywords: [],
    isPublic: true,
    isCommentAllowed: true
  });

  const [errors, setErrors] = useState({});
  const [mapOpen, setMapOpen] = useState(false);
  
    const locationPattern = /^https:\/\/(www\.)?google\.[a-z]+\/maps(\?.*|\/.*)?$/;
  
    const validateLocation = (value) => {
      if (!locationPattern.test(value)) {
        setErrors((prev) => ({
          ...prev,
          location: locationFormatError,
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          location: "",
        }));
      }
    };
  
    const handleLocationSelected = (url) => {
      setFormValues((prev) => ({
        ...prev,
        location: url
      }));
    };

  const checkFormValidity = () => {
    const newErrors = {};
    const { title, travelSuburb, location, selectedKeywords } = formValues;

    if (!title?.trim()) newErrors.title = titleRequiredError;

    if (!travelSuburb) newErrors.travelSuburb = travelSuburbRequiredError;

    if (!location.trim()) {
      newErrors.location = locationRequiredError;
    } else if (!locationPattern.test(location)) {
      newErrors.location = locationFormatError;
    }

    if (selectedKeywords.length > 12) {
      newErrors.keyword = keywordOverError;
    }

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  };

  useEffect(() => {
    checkFormValidity();
    onDataChange(formValues);
  }, [formValues]);

  const handleInputChange = (field, value) => {
    setFormValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
      <Typography variant="h5" gutterBottom>
        주요 정보 입력
      </Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom>
        제목, 지역 등 정보를 입력하세요.
      </Typography>

      <Grid container spacing={3} sx={{ mt: 1 }}>
        <TitleField
          value={formValues.title}
          error={errors.title}
          onChange={(value) => handleInputChange("title", value)}
        />
        <TravelSuburbField
          value={formValues.travelSuburb}
          error={errors.travelSuburb}
          onChange={(value) => handleInputChange("travelSuburb", value)}
        />
        <LocationField
            location={formValues.location}
            error={errors.location}
            onLocationChange={(value) => {
              handleInputChange("location", value);
              validateLocation(value);
            }}
            onMapOpen={() => setMapOpen(true)}
          />

        <PostVisibleField
            value={formValues.isPublic} 
            onChange={(value) => handleInputChange("isPublic", value)} 
          />

        <CommentAvailabilityField
          value={formValues.isCommentAllowed} 
          onChange={(value) => handleInputChange("isCommentAllowed", value)} 
        />

        <TravelKeyWordField
            selectedKeywords={formValues.selectedKeywords} 
            error={errors.keyword}
            onChange={(value) => handleInputChange("selectedKeywords", value)} 
        />

          <Grid item xs={12}>
            <ContentBlockManager
              onChange={(blocks) => handleInputChange("blogContents", blocks)}
            />
          </Grid>
        </Grid>

        <LocationDialog
          open={mapOpen}
          onClose={() => setMapOpen(false)}
          onConfirm={() => setMapOpen(false)}
          onLocationSelected={handleLocationSelected}
          googleMapsApiKey = "AIzaSyAbpOOHTMEZeY_WNnQjuROdIUCAPpwM45Q"
        />
    </Paper>
  );
};

export default CourseMainInfoForm;
