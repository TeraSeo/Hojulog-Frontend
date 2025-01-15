import React from "react";
import NoImageAvailable from "../../../assets/images/no_image_available.jpeg";
import { Card, CardMedia } from "@mui/material";
import { PostImageHeightResponiveSize, PostImageWidthResponiveSize } from "../../../constant/ComponentSizeResponsive";

const NormalPostImageBox = ({ imageUrl, title }) => {
    return (
        <Card
            sx={{
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                "&:hover": { boxShadow: "0 4px 8px rgba(0,0,0,0.2)" },
                transition: "box-shadow 0.2s ease-in-out",
                width: PostImageWidthResponiveSize,
                height: PostImageHeightResponiveSize
            }}
        >
            <CardMedia
                component="img"
                image={imageUrl || NoImageAvailable}
                alt={title || "No Image Available"}
                sx={{
                    width: PostImageWidthResponiveSize,
                    height: PostImageHeightResponiveSize
                }}
            />
        </Card>
    );
};

export default NormalPostImageBox;