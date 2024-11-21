import { Box, Divider, Typography } from "@mui/material";
import React from "react";

const PostFooterText = ({likesCnt, commentsCnt, dayRank, weekRank}) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-around', marginTop: 4, padding: 2, borderTop: '1px solid #ddd' }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="subtitle2" sx={{ color: '#001f5b', fontWeight: 'bold' }}>
              Likes
            </Typography>
            <Typography variant="h6" sx={{ color: '#001f5b', fontWeight: 'bold' }}>
              {likesCnt}
            </Typography>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="subtitle2" sx={{ color: '#001f5b', fontWeight: 'bold' }}>
              Comments
            </Typography>
            <Typography variant="h6" sx={{ color: '#001f5b', fontWeight: 'bold' }}>
              {commentsCnt}
            </Typography>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="subtitle2" sx={{ color: '#001f5b', fontWeight: 'bold' }}>
              Day Rank
            </Typography>
            <Typography variant="h6" sx={{ color: '#001f5b', fontWeight: 'bold' }}>
              #{dayRank}
            </Typography>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="subtitle2" sx={{ color: '#001f5b', fontWeight: 'bold' }}>
              Week Rank
            </Typography>
            <Typography variant="h6" sx={{ color: '#001f5b', fontWeight: 'bold' }}>
              #{weekRank}
            </Typography>
          </Box>
        </Box>
    )
}

export default PostFooterText;