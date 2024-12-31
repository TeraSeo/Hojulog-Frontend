import React from 'react';
import { Box, Button } from '@mui/material';
import MapIcon from '@mui/icons-material/Map';
import { primaryColor } from '../../constant/Color';

const OpenInGoogleMapsButton = ({ mapUrl }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "end", mt: 2, ml: 1 }}>
      <Button
        variant="contained"
        color="primary"
        href={mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        startIcon={<MapIcon />}
        sx={{
          textTransform: "none",
          backgroundColor: primaryColor,
          '&:hover': {
            backgroundColor: "#003078",
          },
          fontWeight: 500,
        }}
      >
        Open in Google Maps
      </Button>
    </Box>
  );
};

export default OpenInGoogleMapsButton;
