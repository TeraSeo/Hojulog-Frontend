import React, { useState, useEffect } from "react";
import { Typography, Grid, Paper } from "@mui/material";
import TitleField from "../../textfields/TitleField";
import SubtitleField from "../../textfields/SubtitleField";
import DescriptionField from "../../textfields/DescriptionField";
import VisibilityField from "../../textfields/VisibilityField";
import IsOwnWorkField from "../../textfields/IsOwnWorkField";
import OwnerEmailField from "../../textfields/OwnerEmailField";
import PlayStoreUrlField from "../../textfields/PlayStoreUrlField";
import AppStoreUrlField from "../../textfields/AppStoreUrlField";
import WebUrlField from "../../textfields/WebUrlField";
import TagsField from "../../textfields/TagsField";

const TechnologyMainInfoForm = ({ onDataChange, setIsFormValid }) => {
  const [formValues, setFormValues] = useState({
    title: "",
    subTitle: "",
    description: "",
    playStoreUrl: "",
    appStoreUrl: "",
    webUrl: "",
    visibility: "Public",
    isOwnWork: "yes",
    ownerEmail: "",
    tags: [],
  });

  const [errors, setErrors] = useState({});

  const checkFormValidity = () => {
    const newErrors = {};
    const { title, subTitle, description, playStoreUrl, appStoreUrl, webUrl, isOwnWork, ownerEmail } = formValues;

    if (!title.trim()) newErrors.title = "Title is required";
    if (!subTitle.trim()) newErrors.subTitle = "Subtitle is required";
    if (!description.trim()) newErrors.description = "Description is required";

    if (!playStoreUrl && !appStoreUrl && !webUrl) {
      newErrors.url = "At least one URL (Play Store, App Store, or Web) is required";
    } else {
      if (playStoreUrl && !/^https:\/\/play\.google\.com\/store\/apps\/details\?id=[^&\s]+$/.test(playStoreUrl)) {
        newErrors.playStoreUrl = "Invalid Play Store URL";
      }
      if (appStoreUrl && !/^https:\/\/apps\.apple\.com\/[^\s]+$/.test(appStoreUrl)) {
        newErrors.appStoreUrl = "Invalid App Store URL";
      }
      if (webUrl && !/^https?:\/\/[^\s]+$/.test(webUrl)) {
        newErrors.webUrl = "Invalid Website URL";
      }
    }

    if (isOwnWork === "no") {
      if (!ownerEmail.trim()) {
        newErrors.ownerEmail = "Owner email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(ownerEmail)) {
        newErrors.ownerEmail = "Invalid email format";
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

  return (
    <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
      <Typography variant="h5" gutterBottom>
        Main Information
      </Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom>
        Enter the details of your product including title, subtitle, description, and links.
      </Typography>

      <Grid container spacing={3} sx={{ mt: 1 }}>
        <TitleField value={formValues.title} error={errors.title} onChange={(value) => handleInputChange("title", value)} />
        <SubtitleField value={formValues.subTitle} error={errors.subTitle} onChange={(value) => handleInputChange("subTitle", value)} />
        <DescriptionField value={formValues.description} error={errors.description} onChange={(value) => handleInputChange("description", value)} />
        <VisibilityField value={formValues.visibility} onChange={(value) => handleInputChange("visibility", value)} />
        <IsOwnWorkField value={formValues.isOwnWork} onChange={(value) => handleInputChange("isOwnWork", value)} />
        {formValues.isOwnWork === "no" && (
          <OwnerEmailField value={formValues.ownerEmail} error={errors.ownerEmail} onChange={(value) => handleInputChange("ownerEmail", value)} />
        )}
        <PlayStoreUrlField value={formValues.playStoreUrl} error={errors.playStoreUrl} onChange={(value) => handleInputChange("playStoreUrl", value)} />
        <AppStoreUrlField value={formValues.appStoreUrl} error={errors.appStoreUrl} onChange={(value) => handleInputChange("appStoreUrl", value)} />
        <WebUrlField value={formValues.webUrl} error={errors.webUrl} onChange={(value) => handleInputChange("webUrl", value)} />
        {errors.url && (
          <Grid item xs={12}>
            <Typography color="error" variant="body2">
              {errors.url}
            </Typography>
          </Grid>
        )}
        <TagsField tags={formValues.tags} onChange={(tags) => handleInputChange("tags", tags)} />
      </Grid>
    </Paper>
  );
};

export default TechnologyMainInfoForm;
