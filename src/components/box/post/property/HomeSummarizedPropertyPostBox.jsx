import React from "react";
import { Typography, Card, CardMedia, Box } from "@mui/material";
import NoImageAvailable from "../../../../assets/images/no_image_available.jpeg";
import PostAverageRateBox from "../PostAverageRateBox";

const HomeSummarizedPropertyPostBox = ({ post }) => {
    return (
        <Box>
            <Card
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
                        image={post.imageUrl || NoImageAvailable}
                        alt={post.title || "No Image Available"}
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
            </Card>

            <Box sx={{ width: "200px" }}>
                <Typography
                    variant="body2"
                    sx={{
                        pt: 1,
                        px: 1,
                        fontWeight: "500",
                        textAlign: "start",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        transition: "color 0.3s, transform 0.3s",
                        "&:hover": {
                            color: "primary.main",
                            textDecoration: "underline",
                            transform: "scale(1.02)",
                            cursor: "pointer",
                        },
                    }}
                >
                    {post.title || "No Title Available"}
                </Typography>

                <PostAverageRateBox averageRate={post.averageRate} />
            </Box>
        </Box>
    );
}

export default HomeSummarizedPropertyPostBox;
