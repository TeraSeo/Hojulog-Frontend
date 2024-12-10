import React, { useState, useEffect } from "react";
import { Typography, Grid, Paper } from "@mui/material";
import TitleField from "../../textfields/TitleField";
import SubtitleField from "../../textfields/SubtitleField";
import DescriptionField from "../../textfields/DescriptionField";
import VisibilityField from "../../textfields/VisibilityField";
import IsOwnWorkField from "../../textfields/IsOwnWorkField";
import OwnerEmailField from "../../textfields/OwnerEmailField";
import WebUrlField from "../../textfields/WebUrlField";
import TagsField from "../../textfields/TagsField";
import StartEndDateField from "../../textfields/StartEndDateField";
import LocationField from "../../textfields/LocationField";
import LocationDialog from "../../dialog/LocationDialog";

const EntertainmentMainInfoForm = ({ onDataChange, setIsFormValid }) => {
  const [formValues, setFormValues] = useState({
    title: "",
    subTitle: "",
    description: "",
    webUrl: "",
    visibility: "Public",
    isOwnWork: true,
    ownerEmail: "",
    tags: [],
    startDateTime: "",
    endDateTime: "",
    location: ""
  });

  const [errors, setErrors] = useState({});
  const [mapOpen, setMapOpen] = useState(false);
  const [selectedLatLng, setSelectedLatLng] = useState(null);
  const locationPattern = /^https:\/\/(www\.)?google\.[a-z]+\/maps(\?.*|\/.*)?$/;

  const checkFormValidity = () => {
    const newErrors = {};
    const { title, subTitle, description, webUrl, isOwnWork, ownerEmail, startDateTime, endDateTime, location } = formValues;

    if (!title.trim()) newErrors.title = "Title is required";
    if (!subTitle.trim()) newErrors.subTitle = "Subtitle is required";
    if (!description.trim()) newErrors.description = "Description is required";

    if (!webUrl) {
      newErrors.webUrl = "Web URL is required";
    } else if (!/^https?:\/\/[^\s]+$/.test(webUrl)) {
      newErrors.webUrl = "Invalid Website URL";
    }

    if (isOwnWork === "no") {
      if (!ownerEmail.trim()) {
        newErrors.ownerEmail = "Owner email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(ownerEmail)) {
        newErrors.ownerEmail = "Invalid email format";
      }
    }

    if (!startDateTime) {
      newErrors.startDateTime = "Start date is required";
    }

    if (!endDateTime) {
      newErrors.endDateTime = "End date is required";
    } else if (startDateTime && new Date(startDateTime) >= new Date(endDateTime)) {
      newErrors.endDateTime = "End date must be after start date";
    }

    if (location.trim()) {
      if (!locationPattern.test(location)) {
        newErrors.location = "Invalid Google Maps URL format.";
      }
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

  const validateLocation = (value) => {
    if (!locationPattern.test(value)) {
      setErrors((prev) => ({
        ...prev,
        location: "Invalid Google Maps URL format.",
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

  return (
    <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
      <Typography variant="h5" gutterBottom>
        Main Information
      </Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom>
        Enter the details of your product including title, subtitle, description, and dates.
      </Typography>

      <Grid container spacing={3} sx={{ mt: 1 }}>
        <TitleField value={formValues.title} error={errors.title} onChange={(value) => handleInputChange("title", value)} />
        <SubtitleField value={formValues.subTitle} error={errors.subTitle} onChange={(value) => handleInputChange("subTitle", value)} />
        <DescriptionField value={formValues.description} error={errors.description} onChange={(value) => handleInputChange("description", value)} />
        <VisibilityField value={formValues.visibility} onChange={(value) => handleInputChange("visibility", value)} />
        <IsOwnWorkField value={formValues.isOwnWork} onChange={(value) => handleInputChange("isOwnWork", value)} />
        {!formValues.isOwnWork && (
          <OwnerEmailField value={formValues.ownerEmail} error={errors.ownerEmail} onChange={(value) => handleInputChange("ownerEmail", value)} />
        )}
        <WebUrlField value={formValues.webUrl} error={errors.webUrl} onChange={(value) => handleInputChange("webUrl", value)} />
        <StartEndDateField
          label="Start Date"
          value={formValues.startDateTime}
          error={errors.startDateTime}
          onChange={(value) => handleInputChange("startDateTime", value)}
        />
        <StartEndDateField
          label="End Date"
          value={formValues.endDateTime}
          error={errors.endDateTime}
          onChange={(value) => handleInputChange("endDateTime", value)}
        />

        <LocationField
          location={formValues.location}
          errors={errors}
          onLocationChange={(value) => {
            handleInputChange("location", value);
            validateLocation(value);
          }}
          onMapOpen={() => setMapOpen(true)}
        />

        <TagsField tags={formValues.tags} onChange={(tags) => handleInputChange("tags", tags)} />
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

export default EntertainmentMainInfoForm;