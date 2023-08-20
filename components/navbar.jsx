"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import Sidebar from './sidebar';
import '../styles/globals.css';
import { Righteous } from '@next/font/google';

const righteous = Righteous({
  subsets: ['latin'],
  weight: '400',
});

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 1 }}>
        <AppBar
        position="static"
        sx={{
          height: '75px',
          backgroundColor: '#ff9f00',
          borderRadius: '0 0 8px 8px',
          boxShadow: '0px 10px 0 1px rgb(18, 34, 51)',
          border: '5px solid rgb(18, 34, 51)',
        }}
      >
        <Toolbar
          style={righteous.style}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Box display="flex" alignItems="center">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleSidebarToggle}
              sx={{
                marginRight: 1,
                '&:hover': {
                  color: '#fc4503',
                },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Link href="/" passHref>
              <Typography
                variant="h4"
                style={righteous.style}
                sx={{
                  '&:hover': {
                    color: '#fc4503',
                  },
                }}
              >
                trackScore.
              </Typography>
            </Link>
          </Box>
          
          <IconButton
            color="inherit"
            aria-label="profile"
            sx={{
              '&:hover': {
                color: '#fc4503',
              },
            }}
          >
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Sidebar open={sidebarOpen} onClose={handleSidebarToggle} />
    </div>
  );
};

export default Navbar;
