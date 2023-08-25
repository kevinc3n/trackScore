import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Righteous } from '@next/font/google';
import { Poppins } from '@next/font/google';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const righteous = Righteous({
  subsets: ['latin'],
  weight: '400',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: '700',
});

const ReviewBox = () => {
    const [rating, setRating] = useState('');
  
    const handleRatingChange = (event) => {
      const newRating = event.target.value;
  
      if (/^(?!0{2,})\d*$/.test(newRating) && newRating >= 0 && newRating <= 100) {
        setRating(newRating);
      }      
      
    };

  return (
    <Box
      sx={{
        width: '65%',
        height: '80%',
        backgroundColor: 'white',
        margin: '20px auto',
        borderRadius: '10px',
        border: '1px solid rgb(18, 34, 51)',
        boxShadow: '10px 10px 0 0 rgb(18, 34, 51)',
        padding: '20px',
      }}
    >
      <Typography
        variant="h4"
        sx={{ alignSelf: 'flex-start', maxWidth: '100%' }}
        style={righteous.style}
      >
        Write a Review
      </Typography>

      <TextField
        id="review"
        label="What Are Your Thoughts?"
        multiline
        rows={12}
        variant="outlined"
        fullWidth
        InputProps={{
          style: { ...poppins.style, fontSize: '20px' },
        }}
        InputLabelProps={{
          style: { ...poppins.style, fontSize: '20px' },
        }}
        sx={{
          marginTop: '20px',
          borderRadius: '10px',
          border: '1px solid rgb(18, 34, 51)',
          backgroundColor: 'rgb(221, 240, 239)',
        }}
      />

      <Box
        sx={{
          width: '200px',
          height: '100px',
          backgroundColor: 'rgb(250,247,172)',
          margin: '20px auto',
          borderRadius: '10px',
          border: '1px solid rgb(18, 34, 51)',
          boxShadow: '10px 10px 0 0 rgb(18, 34, 51)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >

      <TextField
        value={rating}
        onChange={handleRatingChange}
        variant="outlined"
        size="small"
        inputProps={{
          className: righteous.className,
          style: {
            ...righteous.style,
            width: '50px',
            textAlign: 'center',
            fontSize: '30px',
          },
        }}
      />

      <Typography variant="h4" style={righteous.style}>
        &nbsp;/ 100
      </Typography>
    </Box>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
        <Button
          onClick={() => {
      
          }}
          variant="outlined"
          sx={{
            width: '200px',
            height: '50px',
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
            ...poppins.style,
          }}
        >
          Submit Review
        </Button>
      </div>
    </Box>
  );
};

export default ReviewBox;
