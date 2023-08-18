import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import SidebarPanel from './sidebar_panel';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import RateReviewIcon from '@mui/icons-material/RateReview';
import { useRouter } from 'next/navigation';

const Sidebar = ({ open, onClose }) => {
  const router = useRouter();

  const handleClick = (route) => {
    router.push(route);
  };

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          borderRadius: '13px 13px 13px 13px',
          border: '8px solid rgb(18, 34, 51)',
          boxShadow: '1px 8px 0 5px rgb(18, 34, 51)',
          width: '300px',
          backgroundColor: '#fcf4d9',
          display: 'flex',
          alignItems: 'center',
        },
      }}
    >
      <List>
        <ListItemButton sx={{ mb: '10px', mt: '10px' }}>
          <SidebarPanel
            onClick={() => handleClick('/')}
            text="Home"
            icon={<HomeIcon />}
          />
        </ListItemButton>
        <ListItemButton sx={{ mb: '10px' }}>
          <SidebarPanel
            onClick={() => handleClick('/search')}
            text="Search"
            icon={<SearchIcon />}
          />
        </ListItemButton>
        <ListItemButton sx={{ mb: '10px' }}>
          <SidebarPanel
            onClick={() => handleClick('/explore')}
            text="Explore"
            icon={<ExploreIcon />}
          />
        </ListItemButton>
        <ListItemButton sx={{ mb: '10px' }}>
          <SidebarPanel
            onClick={() => handleClick('/reviews')}
            text="My Reviews"
            icon={<RateReviewIcon />}
          />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default Sidebar;
