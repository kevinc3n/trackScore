import React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { Righteous } from '@next/font/google';
import { Poppins } from '@next/font/google';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';

const righteous = Righteous({
  subsets: ['latin'],
  weight: '400',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
});

const Review = ({ onClick, backgroundColor = 'linear-gradient(to bottom, white, #ffedf8)', text = 'Test' }) => {
  const truncateText = (text, limit) => {
    if (text.length <= limit) {
      return text;
    }
    return text.slice(0, limit) + '...';
  };

  const truncatedText = truncateText(text, 560);

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '700px',
        height: 'auto',
        borderRadius: '10px',
        border: '1px solid rgb(18, 34, 51)',
        boxShadow: '10px 10px 0 0 rgb(18, 34, 51)',
        background: backgroundColor,
        flexDirection: 'column',
        display: 'flex',
        cursor: 'pointer',
        margin: '20px',
        padding: '10px',
        paddingBottom: '20px',
        overflow: 'hidden',
      }}
      onClick={onClick}
    >
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              width: '250px',
              height: '250px',
              backgroundColor: 'white',
              borderRadius: '10px',
              border: '1px solid rgb(18, 34, 51)',
              boxShadow: '8px 8px 0 0 rgb(18, 34, 51)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h6" sx={{ textAlign: 'center' }} className={righteous.className}>
              IMAGE GOES HERE
            </Typography>
          </Box>

          <Typography variant="h5" sx={{ paddingTop: '20px' }} className={righteous.className}>
            SONG/ALBUM TITLE
          </Typography>
          <Typography variant="h6" sx={{ paddingTop: '10px', paddingBottom: '20px' }} className={righteous.className}>
            ARTIST NAME
          </Typography>

          <Box
            sx={{
              width: '150px',
              height: '75px',
              backgroundColor: '#faf7ac',
              borderRadius: '10px',
              border: '1px solid rgb(18, 34, 51)',
              boxShadow: '8px 8px 0 0 rgb(18, 34, 51)',
            }}
          >
            <Typography variant="h4" sx={{ paddingTop: '15px', paddingLeft: '10px' }} className={righteous.className}>
              0 / 100
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', alignItems: 'center', paddingTop: '15px'}}>
            <Avatar
              sx={{
                width: '40px',
                height: '40px',
                backgroundColor: 'rgb(18, 34, 51)',
                marginRight: '10px',
              }}
            />
            <Typography variant="h5" className={righteous.className}>
              USERNAME
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ paddingTop: '15px' }} className={poppins.className}>
            {truncatedText}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

Review.propTypes = {
  onClick: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string,
  text: PropTypes.string,
};

export default Review;
