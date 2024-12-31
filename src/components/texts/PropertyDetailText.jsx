import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ReceiptIcon from '@mui/icons-material/Receipt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BathtubIcon from '@mui/icons-material/Bathtub';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

const PropertyDetailText = ({ price, period, isBillIncluded, availableTime, bathroomType, isParkable, roomCount }) => {
  return (
    <Box>
      <Typography
            variant="body2"
            sx={{
                fontWeight: "600",
                textAlign: "start",
                whiteSpace: "nowrap",
                overflow: "hidden",
                fontSize: "14px"
            }}
        >
        세부 사항
      </Typography>
      
      <Typography variant="subtitle2" sx={{ color: '#6B7280', fontWeight: '400', my: 3, fontSize: "12px" }}>
        DETAILS
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <MonetizationOnIcon sx={{ fontSize: '20px' }} />
            <Box>
              <Typography variant="body1" sx={{ fontWeight: '400', fontSize: "14px" }}>
                {period}/${price}
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <ReceiptIcon sx={{ fontSize: '20px' }} />
            <Box>
              <Typography variant="body1" sx={{ fontWeight: '400', fontSize: "14px" }}>
                {isBillIncluded ? '관리비 포함' : '관리비 미포함'}
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CalendarMonthIcon sx={{ fontSize: '20px' }} />
            <Box>
              <Typography variant="body2" sx={{ fontWeight: '400', fontSize: "14px" }}>
                입주시기 - {availableTime}
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <BathtubIcon sx={{ fontSize: '20px' }} />
            <Box>
              <Typography variant="body2" sx={{ fontWeight: '400', fontSize: "14px" }}>
                화장실 - {bathroomType}
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LocalParkingIcon sx={{ fontSize: '20px' }} />
            <Box>
              <Typography variant="body2" sx={{ fontWeight: '400', fontSize: "14px" }}>
              {isParkable ? '주차 가능' : '주차 불가능'}
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <MeetingRoomIcon sx={{ fontSize: '20px' }} />
            <Box>
              <Typography variant="body2" sx={{ fontWeight: '400', fontSize: "14px" }}>
              {roomCount}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PropertyDetailText;