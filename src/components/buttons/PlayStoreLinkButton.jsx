import { Button } from "@mui/material";
import React from "react";
import { logoPrimaryColor } from "../../constant/Color";
import playStoreIcon from "../../assets/images/play-store.png";

const PlayStoreLinkButton = ({ playStoreUrl }) => {
    const navigateToPlayStore = (url) => {
        window.open(url, "_blank");
      };

    return (
        <>
            {playStoreUrl && (
                <Button
                variant="outlined"
                color="secondary"
                onClick={() => navigateToPlayStore(playStoreUrl)}
                sx={{ textTransform: 'none', display: 'flex', alignItems: 'center', gap: 1, borderColor: logoPrimaryColor, color: logoPrimaryColor }}
              >
                <img src={playStoreIcon} alt="Play Store" style={{ width: 24, height: 24 }} />
                Play Store
              </Button>
            )}
        </>
    );
}

export default PlayStoreLinkButton;