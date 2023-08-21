import React, { useState, useRef } from 'react';
import { Box, Typography, Modal, Grid } from '@mui/material';
import { Righteous } from '@next/font/google';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';

const righteous = Righteous({
  subsets: ['latin'],
  weight: '400',
});

const SearchPanel = ({ id, imageUrl, tooltipText, artist, year, type }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tapCount, setTapCount] = useState(0);
  const lastTapTime = useRef(0);

  const router = useRouter();

  const handleClick = (route) => {
    router.push(route);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsHovered(false);
  };

  const defaultImageUrl = '/images/no_image.png';
  const getImageUrl = () => imageUrl || defaultImageUrl;
  const truncatedTooltipText = tooltipText.length > 30 ? tooltipText.substring(0, 30) + '...' : tooltipText;

  const getTruncationLength = () => {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (screenWidth <= 600) {
      return 20;
    } else {
      return 45;
    }
  };

  const truncatedModalTooltipText = tooltipText.length > getTruncationLength() ? tooltipText.substring(0, getTruncationLength()) + '...' : tooltipText;

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    borderRadius: '10px',
    bgcolor: 'background.paper',
    border: '1px solid rgb(18, 34, 51)',
    boxShadow: '10px 10px 0 0 rgb(18, 34, 51)',
    p: 4,
  };

  const handleTouchStart = () => {
    const currentTime = new Date().getTime();
    const timeSinceLastTap = currentTime - lastTapTime.current;

    if (timeSinceLastTap < 300) {
      setTapCount(tapCount + 1);
    } else {
      setTapCount(1);
    }

    lastTapTime.current = currentTime;
  };

  const handleTouchEnd = () => {
    if (tapCount === 1) {
      setIsHovered(true);
    } else if (tapCount === 2) {
      setIsHovered(false);
      handleModalOpen();
    }
    setTapCount(0);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '150px',
        height: '150px',
        borderRadius: '10px',
        border: '1px solid rgb(18, 34, 51)',
        boxShadow: '10px 10px 0 0 rgb(18, 34, 51)',
        overflow: 'hidden',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <img
        src={getImageUrl()}
        alt="Image"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '10px',
        }}
      />
      {isHovered && (
        <div
          onClick={handleModalOpen}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            borderRadius: '10px',
          }}
        >
          <p
            style={{
              color: 'white',
              fontSize: '16px',
              textAlign: 'center',
              margin: '0',
              padding: '10px',
              fontFamily: 'Poppins, sans-serif',
              userSelect: 'none',
            }}
          >
            {truncatedTooltipText}
          </p>
        </div>
      )}

      <Modal
        open={isModalOpen}
        onClose={handleModalClose}
      >
        <Box sx={modalStyle}>
          <Grid container spacing={2}>

            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box
                  sx={{
                    width: '90%',
                    height: '90%',
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    border: '1px solid rgb(18, 34, 51)',
                    boxShadow: '10px 10px 0 0 rgb(18, 34, 51)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '20px',
                  }}
                >
                  <img
                    src={getImageUrl()}
                    alt="Image"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '10px',
                    }}
                  />
                </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                component="h2"
                style={righteous.style}
                sx={{
                  maxWidth: '100%',
                  fontSize: '1.5rem',
                  marginBottom: '1rem',
                }}
              >
                {truncatedModalTooltipText}
              </Typography>

              {type !== "Artist" && (
                <div>
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'rgb(18, 34, 51)',
                      marginTop: '10px',
                      fontFamily: 'Poppins, sans-serif',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      fontSize: '1rem',
                    }}
                  >
                    By: {artist}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'rgb(18, 34, 51)',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '1rem',
                    }}
                  >
                    Released: {year}
                  </Typography>
                </div>
              )}

              <div>
                <Button
                  variant="outlined"
                  onClick={() => {
                    if (type === 'Song') {
                      const URL = "/writeReview/song/" + id;
                      handleClick(URL);
                    } else if (type === 'Artist') {
                      // Handle artist navigation if needed
                    }
                  }}
                  sx={{
                    marginTop: '10px',
                    marginBottom: '10px',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '16px',
                    color: 'rgb(18, 34, 51)',
                    borderRadius: '10px',
                    border: '1px solid rgb(18, 34, 51)',
                    boxShadow: '10px 10px 0 0 rgb(18, 34, 51)',
                    transition: 'color 0.3s',
                    '&:hover': {
                      color: 'white',
                      backgroundColor: 'rgb(255,159,0)',
                    },
                  }}
                >
                  {type !== "Artist" ? "Write Review" : "View Artist"}
                </Button>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Box>
  );
};

export default SearchPanel;