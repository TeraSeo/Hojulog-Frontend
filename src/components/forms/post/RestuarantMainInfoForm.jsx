import React, { useState, useEffect } from "react";
import { Typography, TextField, MenuItem, Button, Dialog, DialogContent, Box } from "@mui/material";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function RestaurantMainInfoForm({
  title,
  description,
  location,
  visibility,
  setTitle,
  setDescription,
  setLocation,
  setVisibility,
  visibilities,
  setLocationValid,
}) {
  const [mapOpen, setMapOpen] = useState(false);
  const [selectedLatLng, setSelectedLatLng] = useState(null);
  const [locationError, setLocationError] = useState("");

  const locationPattern = /^https:\/\/www\.google\.com\/maps\?q=(-?\d+(\.\d+)?),(-?\d+(\.\d+)?)$/;

  const handleMapClick = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    setSelectedLatLng({ lat, lng });
    const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
    setLocation(googleMapsUrl);
    setLocationError("");
    setLocationValid(true);
  };

  const validateLocation = (value) => {
    if (!locationPattern.test(value)) {
      setLocationError("Invalid Google Maps URL format.");
      setLocationValid(false);
    } else {
      setLocationError(""); 
      setLocationValid(true);
    }
    setLocation(value);
  };

  useEffect(() => {
    if (location) validateLocation(location);
  }, [location]);

  return (
    <>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 1 }}>
        Tell us more about the restaurant
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
        It makes the advertisement more efficient
      </Typography>

      <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
        Name of the restaurant
      </Typography>
      <TextField
        placeholder="Enter the restaurant name"
        variant="outlined"
        fullWidth
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ mb: 3 }}
      />

      <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
        Description
      </Typography>
      <TextField
        placeholder="Describe your restaurant in a few sentences"
        variant="outlined"
        fullWidth
        required
        multiline
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        sx={{ mb: 3 }}
      />

      <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
        Location of the restaurant
      </Typography>
      <TextField
        placeholder="Click 'Select Location' to pick on the map"
        variant="outlined"
        fullWidth
        required
        value={location}
        onChange={(e) => validateLocation(e.target.value)}
        error={!!locationError}
        helperText={locationError}
        sx={{ mb: 3 }}
      />
      <Button variant="outlined" onClick={() => setMapOpen(true)} sx={{ mb: 3 }}>
        Select Location
      </Button>

      <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
        Visibility
      </Typography>
      <TextField
        select
        fullWidth
        required
        value={visibility}
        onChange={(e) => setVisibility(e.target.value)}
        sx={{ mb: 3 }}
      >
        {visibilities.map((vis) => (
          <MenuItem key={vis} value={vis}>
            {vis}
          </MenuItem>
        ))}
      </TextField>

      {/* Google Map Dialog */}
      <Dialog open={mapOpen} onClose={() => setMapOpen(false)} fullWidth maxWidth="sm">
        <DialogContent>
          <Typography variant="h6" textAlign="center" sx={{ mb: 2 }}>
            Select Location on the Map
          </Typography>
          <LoadScript googleMapsApiKey="AIzaSyAbpOOHTMEZeY_WNnQjuROdIUCAPpwM45Q">
            <GoogleMap
              mapContainerStyle={{ width: "100%", height: "400px" }}
              center={{ lat: -34.397, lng: 150.644 }}
              zoom={8}
              onClick={handleMapClick}
            >
              {selectedLatLng && <Marker position={selectedLatLng} />}
            </GoogleMap>
          </LoadScript>
          <Box display="flex" justifyContent="space-between" mt={2}>
            <Button onClick={() => setMapOpen(false)} variant="outlined">
              Cancel
            </Button>
            <Button onClick={() => setMapOpen(false)} variant="contained" color="primary">
              Confirm
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default RestaurantMainInfoForm;
