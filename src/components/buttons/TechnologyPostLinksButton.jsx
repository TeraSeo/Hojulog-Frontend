import React, { useState, useEffect } from "react";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import appStoreIcon from "../../assets/images/app-store.png";
import playStoreIcon from "../../assets/images/play-store.png";
import webIcon from "../../assets/images/web.png";
import { logoPrimaryColor } from "../../constant/Color";
import VisitWebsiteButton from "./VisitWebsiteButton";
import AppStoreLinkButton from "./AppStoreLinkButton";
import PlayStoreLinkButton from "./PlayStoreLinkButton";

const TechnologyPostLinksButton = ({ mainInfoData }) => {
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

  const hasLinks = mainInfoData.playStoreUrl || mainInfoData.appStoreUrl || mainInfoData.webUrl;

  if (!hasLinks) {
    return null;
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 1 }}>
      {isWideScreen ? (
        <Box sx={{ display: 'flex', gap: 2 }}>
          <PlayStoreLinkButton playStoreUrl={mainInfoData.playStoreUrl} />
          <AppStoreLinkButton appStoreUrl={mainInfoData.appStoreUrl} />
          <VisitWebsiteButton webUrl={mainInfoData.webUrl} />
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
            {mainInfoData.playStoreUrl && (
              <MenuItem onClick={() => handleMenuItemClick(mainInfoData.playStoreUrl)}>
                <img src={playStoreIcon} alt="Play Store" style={{ width: 24, height: 24, marginRight: 8 }} />
                Play Store
              </MenuItem>
            )}
            {mainInfoData.appStoreUrl && (
              <MenuItem onClick={() => handleMenuItemClick(mainInfoData.appStoreUrl)}>
                <img src={appStoreIcon} alt="App Store" style={{ width: 24, height: 24, marginRight: 8 }} />
                App Store
              </MenuItem>
            )}
            {mainInfoData.webUrl && (
              <MenuItem onClick={() => handleMenuItemClick(mainInfoData.webUrl)}>
                <img src={webIcon} alt="Website" style={{ width: 24, height: 24, marginRight: 8 }} />
                Visit Website
              </MenuItem>
            )}
          </Menu>
        </>
      )}
    </Box>
  );
};

export default TechnologyPostLinksButton;