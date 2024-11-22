import React from "react";
import { Dialog, DialogContent, Typography, Box, Button } from "@mui/material";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const LocationDialog = ({
  open,
  onClose,
  onConfirm,
  onMapClick,
  selectedLatLng,
  googleMapsApiKey = "AIzaSyAbpOOHTMEZeY_WNnQjuROdIUCAPpwM45Q"
}) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogContent>
        <Typography variant="h6" textAlign="center" sx={{ mb: 2 }}>
          Select Location on the Map
        </Typography>
        <LoadScript googleMapsApiKey={googleMapsApiKey}>
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "400px" }}
            center={{ lat: -34.397, lng: 150.644 }}
            zoom={8}
            onClick={onMapClick}
          >
            {selectedLatLng && <Marker position={selectedLatLng} />}
          </GoogleMap>
        </LoadScript>
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Button onClick={onClose} variant="outlined">
            Cancel
          </Button>
          <Button onClick={onConfirm} variant="contained" color="primary">
            Confirm
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default LocationDialog;