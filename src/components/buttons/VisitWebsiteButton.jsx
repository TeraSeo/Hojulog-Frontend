import { Button } from "@mui/material";
import React from "react";
import { logoPrimaryColor } from "../../constant/Color";
import webIcon from "../../assets/images/web.png";

const VisitWebsiteButton = ({ webUrl }) => {
    const naviageteToWebSite = (url) => {
        window.open(url, "_blank");
      };

    return (
        <>
            {webUrl && (
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => naviageteToWebSite(webUrl)}
                    sx={{ textTransform: 'none', display: 'flex', alignItems: 'center', gap: 1, borderColor: logoPrimaryColor, color: logoPrimaryColor, borderRadius: '8px' }}
                >
                    <img src={webIcon} alt="Website" style={{ width: 24, height: 24 }} />
                    Visit Website
                </Button>
                )
            }
        </>
    );
}

export default VisitWebsiteButton;