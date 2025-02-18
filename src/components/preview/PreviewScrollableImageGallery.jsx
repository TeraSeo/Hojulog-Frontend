import React, { useRef, useEffect, useState } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const PreviewScrollableImageGallery = ({ imageUrls=[] }) => {
  const [showScrollButtons, setShowScrollButtons] = useState(false);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    checkIfScrollable();
    window.addEventListener('resize', checkIfScrollable);
    return () => window.removeEventListener('resize', checkIfScrollable);
  }, [imageUrls]);

  const checkIfScrollable = () => {
    if (scrollContainerRef.current) {
      const isScrollable =
        scrollContainerRef.current.scrollWidth > scrollContainerRef.current.clientWidth;
      setShowScrollButtons(isScrollable);
    }
  };

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -300,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 300,
      behavior: 'smooth',
    });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      {showScrollButtons && (
        <IconButton
          onClick={scrollLeft}
          sx={{
            position: 'absolute',
            left: 8,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 1)',
            },
            height: '40px',
            width: '40px',
          }}
        >
          <ArrowBackIosIcon sx={{ margin: 'auto', pl: 1.3 }} />
        </IconButton>
      )}

      <Box
        ref={scrollContainerRef}
        sx={{
          display: 'flex',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          gap: 2,
          padding: 1,
          scrollSnapType: 'x mandatory',
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
        {imageUrls.map((url, index) => (
          <Box
            key={index}
            sx={{
              minWidth: '300px',
              aspectRatio: '16 / 13',
              backgroundImage: `url(${URL.createObjectURL(url)})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '8px',
              flexShrink: 0,
            }}
          />
        ))}
      </Box>

      {showScrollButtons && (
        <IconButton
          onClick={scrollRight}
          sx={{
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 1)',
            },
            height: '40px',
            width: '40px',
          }}
        >
          <ArrowForwardIosIcon sx={{ margin: 'auto' }} />
        </IconButton>
      )}
    </Box>
  );
};

export default PreviewScrollableImageGallery;
