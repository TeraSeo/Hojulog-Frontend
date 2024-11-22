import React, { useState, useEffect } from "react";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import webIcon from "../../assets/images/web.png";
import { logoPrimaryColor } from "../../constant/Color";
import LocationButton from "./LocationButton";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import VisitWebsiteButton from "./VisitWebsiteButton";

const RestaurantLinksButton = ({ mainInfoData }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleVisitClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (url) => {
    window.open(url, "_blank");
    setAnchorEl(null);
  };

  const hasLinks = mainInfoData.webUrl || mainInfoData.location;

  if (!hasLinks) {
    return null;
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 1 }}>
      {isWideScreen ? (
        <Box sx={{ display: 'flex', gap: 2 }}>
          <VisitWebsiteButton webUrl={mainInfoData.webUrl} />
          <LocationButton location={mainInfoData.location} />
        </Box>
      ) : (
        <>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleVisitClick}
            sx={{ textTransform: 'none', fontWeight: 'bold', backgroundColor: logoPrimaryColor }}
          >
            Visit
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            sx={{ '& .MuiPaper-root': { borderRadius: 2, boxShadow: '0 4px 20px rgba(0,0,0,0.1)' } }}
          >
            {mainInfoData.webUrl && (
                <MenuItem onClick={() => handleMenuItemClick(mainInfoData.webUrl)}>
                <img src={webIcon} alt="Website" style={{ width: 24, height: 24, marginRight: 8 }} />
                Visit Website
                </MenuItem>
                )
            }

            {mainInfoData.location && (
              <MenuItem onClick={() => handleMenuItemClick(mainInfoData.location)}>
                <LocationOnIcon sx={{ marginRight: 1, color: logoPrimaryColor }} />
                Location
              </MenuItem>
            )}
          </Menu>
        </>
      )}
    </Box>
  );
};

export default RestaurantLinksButton;
