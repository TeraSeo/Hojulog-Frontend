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

const LifeStyleMainInfoForm = ({ onDataChange, setIsFormValid }) => {
  const [formValues, setFormValues] = useState({
    title: "",
    subTitle: "",
    description: "",
    webUrl: "",
    visibility: "Public",
    isOwnWork: "yes",
    ownerEmail: "",
    tags: [],
  });

  const [errors, setErrors] = useState({});

  const checkFormValidity = () => {
    const newErrors = {};
    const { title, subTitle, description, webUrl, isOwnWork, ownerEmail } = formValues;

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
        Enter the details of your product including title, subtitle, description, link.
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
        <WebUrlField value={formValues.webUrl} error={errors.webUrl} onChange={(value) => handleInputChange("webUrl", value)} />
          
        <TagsField tags={formValues.tags} onChange={(tags) => handleInputChange("tags", tags)} />

      </Grid>
    </Paper>
  );
};

export default LifeStyleMainInfoForm;