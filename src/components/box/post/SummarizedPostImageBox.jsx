import React from "react";
import NoImageAvailable from "../../../assets/images/no_image_available.jpeg";
import { Box, Card, CardMedia } from "@mui/material";

const SummarizedPostImageBox = ({ imageUrl, title }) => {
    return <Card
            sx={{
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                "&:hover": { boxShadow: "0 4px 8px rgba(0,0,0,0.2)" },
                transition: "box-shadow 0.2s ease-in-out",
                width: "200px",
                flexShrink: 0,
            }}
        >
    
            <Box
                sx={{
                    width: "100%",
                    height: "150px",
                    backgroundColor: "#f5f5f5",
                    position: "relative",
                }}
            >
                <CardMedia
                    component="img"
                    image={imageUrl || NoImageAvailable}
                    alt={title || "No Image Available"}
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
            </Box>
        </Card>;
}

export default SummarizedPostImageBox;