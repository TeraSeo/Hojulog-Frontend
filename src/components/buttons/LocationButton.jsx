import React from "react";
import { Button } from "@mui/material";
import { logoPrimaryColor } from "../../constant/Color";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const LocationButton = ({ location }) => {
  const handleLocationClick = () => {
    if (location) {
      window.open(location, "_blank");
    }
  };

  return (
    <>
      {location && (
        <Button
          variant="contained"
          onClick={handleLocationClick}
          startIcon={<LocationOnIcon />}
          sx={{
            textTransform: 'none',
            color: '#fff', // Ensure text color contrasts with logoPrimaryColor background
            backgroundColor: logoPrimaryColor,
            borderColor: logoPrimaryColor,
            padding: '6px 12px',
            borderRadius: '8px',
            height: '40px',
            '&:hover': {
              backgroundColor: '#003399', // Darker shade for hover effect
            },
          }}
        >
          Location
        </Button>
      )}
    </>
  );
};

export default LocationButton;
