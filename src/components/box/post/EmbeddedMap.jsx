import React from 'react';
import { Box } from '@mui/material';

const EmbeddedMap = ({ mapUrl }) => {
  
  return (
    <Box
      sx={{
        mt: 3,
        width: "100%",
        height: "400px", // Adjust the height as needed
        borderRadius: "8px", // Optional, for rounded corners
        overflow: "hidden",
      }}
    >
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: "none" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </Box>
  );
};

export default EmbeddedMap;
