import React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Righteous } from '@next/font/google';

const righteous = Righteous({
  subsets: ['latin'],
  weight: '400',
});

const SidebarPanel = ({ onClick, backgroundColor = '#f78160', text = 'Test', icon }) => {
  return (
    <Box
      sx={{
        width: '200px',
        height: '125px',
        borderRadius: '10px',
        border: '1px solid rgb(18, 34, 51)',
        boxShadow: '10px 10px 0 0 rgb(18, 34, 51)',
        backgroundColor: backgroundColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      <Grid container alignItems="center" justifyContent="center" spacing={1}>
        <Grid item>{icon}</Grid>
        <Grid item>
          <Typography variant="h6" className={righteous.className}>
            {text}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

SidebarPanel.propTypes = {
  onClick: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.node,
};

export default SidebarPanel;
