import { Button } from "@mui/material";
import React from "react";
import appStoreIcon from "../../assets/images/app-store.png";
import { logoPrimaryColor } from "../../constant/Color";

const AppStoreLinkButton = ({ appStoreUrl }) => {
    const navigateToAppStore = (url) => {
        window.open(url, "_blank");
      };

    return (
        <>
            {appStoreUrl && (
                <Button
                variant="outlined"
                color="secondary"
                onClick={() => navigateToAppStore(appStoreUrl)}
                sx={{ textTransform: 'none', display: 'flex', alignItems: 'center', gap: 1, borderColor: logoPrimaryColor, color: logoPrimaryColor }}
                >
                <img src={appStoreIcon} alt="App Store" style={{ width: 24, height: 24 }} />
                App Store
                </Button>
            )}
        </>
    );
}

export default AppStoreLinkButton;