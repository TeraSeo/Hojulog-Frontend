import React from "react";
import { Box, Typography } from "@mui/material";

const PreviewBlogContentBox = ({ blogContents }) => {
    return (
        <Box>
            {blogContents.map((content, index) => {
                if (content.type === "description") {
                    return (
                        <Box key={index} sx={{ marginBottom: 2 }}>
                            <Typography 
                                variant="body1" 
                                sx={{ 
                                    fontSize: { "md": `${content.fontSize}px`, "sm" : `${content.fontSiz - 2}px`, "xs": `${content.fontSize - 4}px` }, 
                                    fontWeight: content.fontWeight,
                                    whiteSpace: "pre-wrap",
                                    fontFamily: content.fontFamily || "Arial" 
                                }}
                            >
                                {content.content}
                            </Typography>
                        </Box>
                    );
                } else if (content.type === "image") {
                    if (content.imageUrl) {
                        return (
                            <Box key={index} sx={{ marginBottom: 2 }}>
                                <img src={content.imageUrl} alt="Blog Content" style={{ maxWidth: "100%" }} />
                            </Box>
                        );
                    }
                    else {
                        return (
                            <Box key={index} sx={{ marginBottom: 2 }}>
                                <img src={content.content} alt="Blog Content" style={{ maxWidth: "100%" }} />
                            </Box>
                        );
                    }
                }
                return null;
            })}
        </Box>
    );
};

export default PreviewBlogContentBox;
