import React, { useState } from 'react';
import { Box } from '@mui/material';

const SearchPanel = ({ imageUrl, tooltipText }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const defaultImageUrl = '/images/no_image.png';

  const getImageUrl = () => {
    return imageUrl ? imageUrl : defaultImageUrl;
  };

  const truncatedTooltipText = tooltipText.length > 30 ? tooltipText.substring(0, 30) + '...' : tooltipText;

  return (
    <Box
      sx={{
        position: 'relative',
        width: '150px',
        height: '150px',
        '&:hover .overlay': {
          visibility: 'visible',
          opacity: 1,
        },
        borderRadius: '10px',
        border: '1px solid rgb(18, 34, 51)',
        boxShadow: '10px 10px 0 0 rgb(18, 34, 51)',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
      <Box
        className="overlay"
        sx={{
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
          visibility: 'hidden',
          borderRadius: '10px',
          opacity: 0,
          transition: 'opacity 0.1s ease-in-out',
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
          }}
        >
          {truncatedTooltipText}
        </p>
      </Box>
    </Box>
  );
};

export default SearchPanel;
