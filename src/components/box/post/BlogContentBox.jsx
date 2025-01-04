import React from "react";
import { Box, Typography } from "@mui/material";

const BlogContentBox = ({ blogContents }) => {
    return (
        <Box>
            {blogContents.map((content, index) => {
                if (content.type === "description") {
                    return (
                        <Box key={index} sx={{ marginBottom: 2 }}>
                            <Typography 
                                variant="body1" 
                                sx={{ 
                                    fontSize: `${content.fontSize}px`, 
                                    fontWeight: content.fontWeight,
                                    whiteSpace: "pre-wrap"
                                }}
                            >
                                {content.content}
                            </Typography>
                        </Box>
                    );
                } else if (content.type === "image") {
                    return (
                        <Box key={index} sx={{ marginBottom: 2 }}>
                            <img src={content.imageUrl} alt="Blog Content" style={{ maxWidth: "100%" }} />
                        </Box>
                    );
                }
                return null;
            })}
        </Box>
    );
};

export default BlogContentBox;
