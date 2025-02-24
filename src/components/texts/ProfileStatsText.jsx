import { Box, Typography } from '@mui/material';
import React from 'react';
import { PostResponsiveFontSize1 } from '../../constant/FontSizeResponsive';

const ProfileStatsText = ({ logPoints, weeklyLikes }) => {
  return (
    <Box
      sx={{
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
        transition: 'box-shadow 0.3s ease-in-out',
        border: '1px solid #e0e0e0',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        maxWidth: '150px',
      }}
    >
      <StatRow label="로그 (포인트)" value={logPoints} />
      <StatRow label="이주의 좋아요 수" value={weeklyLikes} />
    </Box>
  );
};

const StatRow = ({ label, value }) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '8px 0',
      borderBottom: '1px solid #f0f0f0',
      '&:last-child': {
        borderBottom: 'none',
      },
    }}
  >
    <Typography variant="body1" sx={{ fontWeight: "600",
                    textAlign: "start",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    transition: "color 0.3s, transform 0.3s",
                    fontSize: PostResponsiveFontSize1 }}>
      {label}
    </Typography>
    <Typography variant="body1" sx={{ 
                    fontWeight: "600",
                    textAlign: "start",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    transition: "color 0.3s, transform 0.3s",
                    fontSize: PostResponsiveFontSize1, 
                    color: '#1976d2' }}>
      {value}
    </Typography>
  </Box>
);

export default ProfileStatsText;
