import React from "react";
import { Box, Typography, Chip, Stack } from '@mui/material';

const PostKeywordText = ({ keywords = [] }) => {
    return (
        <Box>
            <Typography
                variant="body2"
                sx={{
                    fontWeight: 600,
                    textAlign: "start",
                    fontSize: "14px",
                    mb: 2,
                }}
            >
                키워드
            </Typography>

            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                {keywords.map((keyword, index) => (
                    <Chip 
                        key={index} 
                        label={keyword} 
                        sx={{
                            fontSize: "13px",
                            fontWeight: 500,
                            backgroundColor: "#f5f5f5",
                            color: "#333",
                        }} 
                    />
                ))}
            </Stack>
        </Box>
    );
};

export default PostKeywordText;
