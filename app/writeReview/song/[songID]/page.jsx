"use client"
import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { Righteous } from '@next/font/google';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { getSong } from '../../../../api/spotify.js';
import { useParams } from 'next/navigation';
import Button from '@mui/material/Button';
import ReviewBox from '../../../../components/review_box.jsx';

const righteous = Righteous({
  subsets: ['latin'],
  weight: '400',
});

const WriteReview = () => {
  const params = useParams();
  const songID = params.songID;

  const [songData, setSongData] = useState(null);

  useEffect(() => {
    if (songID) {
      getSong(songID)
        .then((data) => {
          setSongData(data);
        })
        .catch((error) => {
          console.error('Error fetching song data:', error);
        });
    }
  }, [songID]);

  return (
    <div>
      <Box
        sx={{
          width: '65%',
          backgroundColor: 'white',
          margin: '20px auto',
          borderRadius: '10px',
          border: '1px solid rgb(18, 34, 51)',
          boxShadow: '10px 10px 0 0 rgb(18, 34, 51)',
          padding: '20px',
        }}
      >
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
              {songData && (
                <img
                  src={songData.album.images[0].url}
                  alt={songData.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '10px',
                  }}
                />
              )}
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{ alignSelf: 'flex-start', maxWidth: '100%' }}
              style={righteous.style}
            >
              {songData ? songData.name : ''}
            </Typography>

            <Typography variant="h5" sx={{paddingTop: '20px', fontFamily: 'Poppins, sans-serif',}}>
              By: {songData && songData.artists
                ? songData.artists.map((artist) => artist.name).join(', ')
                : ''}
            </Typography>

            <Typography variant="h5" sx={{fontFamily: 'Poppins, sans-serif',}}>
              Released: {songData && songData.album?.release_date.slice(0, 4) ? songData.album?.release_date.slice(0, 4) : ''}
            </Typography>
            
            <Button
              component="a"
              href={"https://open.spotify.com/track/" + songID}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              sx={{
                marginTop: '20px',
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
              Listen on Spotify
            </Button>
          </Grid>
        </Grid>
      </Box>

      <ReviewBox> </ReviewBox>
    </div>
  );
};

export default WriteReview;
