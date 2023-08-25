"use client"
import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { Righteous } from '@next/font/google';
import { Poppins } from '@next/font/google';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { getSong } from '../../../../api/spotify.js';
import { useParams } from 'next/navigation';
import Button from '@mui/material/Button';
import ReviewBox from '../../../../components/review_box.jsx';
import PersonIcon from '@mui/icons-material/Person';
import EventIcon from '@mui/icons-material/Event';

const righteous = Righteous({
  subsets: ['latin'],
  weight: '400',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: '600',
});

const formatDate = (dateString) => {
  if (!dateString) return '';

  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);

  return formattedDate;
};

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

  const formattedReleaseDate = formatDate(songData?.album?.release_date);

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

            <Typography variant="h5" sx={{paddingTop: '0px', fontFamily: 'Poppins, sans-serif', color: '#faa13c'}}>
              Song
            </Typography>

            <div>
              <Typography variant="h5" sx={{ paddingTop: '20px', ...poppins.style }}>
                <PersonIcon sx={{ marginRight: '4px' }} />
                {songData && songData.artists
                  ? songData.artists.map((artist) => artist.name).join(', ')
                  : ''}
              </Typography>
            </div>

            <div>
              <Typography variant="h5" sx={{ ...poppins.style }}>
                <EventIcon sx={{ marginRight: '4px' }} /> {formattedReleaseDate}
              </Typography>
            </div>
            
            <Button
              component="a"
              href={"https://open.spotify.com/track/" + songID}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              sx={{
                marginTop: '20px',
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
