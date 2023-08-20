"use client"
import React from 'react';
import { Righteous } from '@next/font/google';
import Typography from '@mui/material/Typography';

const righteousFont = Righteous({
  subsets: ['latin'],
  weight: '400',
});

const Page = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', flexDirection: 'column' }}>
      <div>
        <Typography variant="h1" align="center" color="#ff3652" style={righteousFont.style}>
          trackScore.
        </Typography>
      </div>

      <div>
        <Typography variant="h3" color="white" align="center" className={righteousFont.className}>
          An Easy Way to Rate Music.
        </Typography>
      </div>

      {/* TODO: 
      - ADD SHORT PARAGRAPHS AND OVERVIEW EXPLAINING HOW SITE WORKS (USE GIFS/PICTURES?)
      - MAKE THIS TEXT RESPONSIVE
      */}

    </div>
  );
};

 export default Page;
