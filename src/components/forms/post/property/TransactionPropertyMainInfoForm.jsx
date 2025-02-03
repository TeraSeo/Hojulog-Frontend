import React, { useState, useEffect } from "react";
import { Typography, Grid, Paper } from "@mui/material";
import TitleField from "../../../textfields/TitleField";
import DescriptionField from "../../../textfields/DescriptionField";
import ContactField from "../../../textfields/ContactField";
import EmailField from "../../../textfields/EmailField";
import PriceField from "../../../textfields/PriceField";
import AvailableTimeField from "../../../textfields/AvailableTimeField";
import SuburbField from "../../../textfields/SuburbField";
import { isValidPhoneNumber } from "libphonenumber-js";
import LocationField from "../../../textfields/LocationField";
import LocationDialog from "../../../dialog/LocationDialog";
import { contactFormatError, contactRequiredError, descriptionRequiredError, emailFormatError, emailRequiredError, keywordOverError, locationFormatError, locationRequiredError, periodRequiredError, priceFormatError, priceRequiredError, suburbRequiredError, titleRequiredError } from "../../../../constant/ErrorMsg";
import RoomCountField from "../../../textfields/RoomCountField";
import ParkableField from "../../../textfields/ParkableField";
import PropertyKeyWordField from "../../../textfields/PropertyKeyWordField";
import PostVisibleField from "../../../textfields/PostVisibleField";
import CommentAvailabilityField from "../../../textfields/CommentAvailabilityField";

const TransactionPropertyMainInfoForm = ({ onDataChange, setIsFormValid }) => {
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    contact: "",
    email: "",
    price: "",
    availableTime: "",
    suburb: "",
    location: "",
    roomCount: "Studio+",
    isParkable: false,
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
    const { title, description, contact, email, price, availableTime, suburb, location, selectedKeywords } = formValues;

    if (!title?.trim()) newErrors.title = titleRequiredError;
    if (!description?.trim()) newErrors.description = descriptionRequiredError;

    if (!contact?.trim() && !email?.trim()) {
      newErrors.contact = contactRequiredError;
      newErrors.email = emailRequiredError;
    }

    if (contact?.trim() && !isValidPhoneNumber(contact)) {
      newErrors.contact = contactFormatError;
    }

    if (email?.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = emailFormatError;
    }

    if (!price?.trim()) {
      newErrors.price = priceRequiredError;
    } else if (isNaN(price)) {
      newErrors.price = priceFormatError;
    }

    if (!availableTime?.trim()) {
      newErrors.availableTime = periodRequiredError;
    }

    if (!suburb?.trim()) {
      newErrors.suburb = suburbRequiredError;
    }

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
        제목, 설명, 연락처, 이메일, 가격, 지역 등 정보를 입력하세요.
      </Typography>

      <Grid container spacing={3} sx={{ mt: 1 }}>
        <TitleField
          value={formValues.title}
          error={errors.title}
          onChange={(value) => handleInputChange("title", value)}
        />
        <DescriptionField
          value={formValues.description}
          error={errors.description}
          onChange={(value) => handleInputChange("description", value)}
        />
        <ContactField
          value={formValues.contact}
          error={errors.contact}
          onChange={(value) => handleInputChange("contact", value)}
        />
        <EmailField
          value={formValues.email}
          error={errors.email}
          onChange={(value) => handleInputChange("email", value)}
        />
        <PriceField
          value={formValues.price}
          error={errors.price}
          onChange={(value) => handleInputChange("price", value)}
        />
        <RoomCountField
          value={formValues.roomCount}
          error={errors.roomCount}
          onChange={(value) => handleInputChange("roomCount", value)}
        />
        <ParkableField
          value={formValues.isParkable}
          error={errors.isParkable}
          onChange={(value) => handleInputChange("isParkable", value)}
        />
        <AvailableTimeField
          value={formValues.availableTime}
          error={errors.availableTime}
          onChange={(value) => handleInputChange("availableTime", value)}
        />
        <SuburbField
          value={formValues.suburb}
          error={errors.suburb}
          onChange={(value) => handleInputChange("suburb", value)}
        />
        <LocationField
          location={formValues.location}
          errors={errors.location}
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

        <PropertyKeyWordField
            selectedKeywords={formValues.selectedKeywords} 
            error={errors.keyword}
            onChange={(value) => handleInputChange("selectedKeywords", value)} 
        />
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

export default TransactionPropertyMainInfoForm;
