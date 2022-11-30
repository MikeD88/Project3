import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import CottageTwoToneIcon from '@mui/icons-material/CottageTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import Image from 'mui-image';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate, useLocation } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Navbar = () => {
  const [state, setState] = useState({ left: false });
  const location = useLocation();
  const [value, setValue] = useState(`${location.pathname}`);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    navigate(`${newValue}`);
    setValue(newValue);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const bulletSections = [
    { value: '/home', label: 'All Members', callback: () => { navigate('/home'); } },
    { value: '/trainings', label: 'All Trainings', callback: () => { navigate('/trainings'); } },
    { value: '/add-member', label: 'Add New Member', callback: () => { navigate('/add-member'); } },
    { value: '/add-cert', label: 'Add New Training', callback: () => { navigate('/add-cert'); } },
    // { value: '/settings', label: 'Settings', callback: () => { navigate('/settings'); } }
  ];

  const sitePages = [
    { icon: <CottageTwoToneIcon />, label: 'Home', callback: () => { navigate('/'); } },
  ];

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {sitePages.map((page, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={page.callback}>
              <ListItemIcon>
                {page.icon}
              </ListItemIcon>
              <ListItemText primary={page.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {bulletSections.map(({ label, callback }, index) => (
          <ListItem key={label} disablePadding>
            <ListItemButton onClick={callback}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{
      flexGrow: 1,
    }}>
      <AppBar sx={{ bgcolor: '#1f2024' }}
        position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            color='primary'
            onClick={toggleDrawer('left', true)}>
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
          >
            {list('left')}
          </Drawer>
          <Box sx={{ flexGrow: .5 }} />
          <Image
            src='https://user-images.githubusercontent.com/110724575/203625397-fa877591-e85e-41ec-9b5b-814870d8a982.png'
            width='10%'
            duration={3000}
            distance='100px'
            shiftDuration={900}
            bgColor='inherit'
          />
          <Box sx={{ flexGrow: .5 }} />
          <Image
            src='https://user-images.githubusercontent.com/110724575/203436958-6b2292fb-89cd-4736-9c69-bc8e5c936922.png'
            width='5%'
            duration={3000}
            distance='100px'
            shiftDuration={900}
            bgColor='inherit'
          />
        </Toolbar>
      </AppBar>
      <AppBar
        sx={{ bgcolor: '#1f2024' }}
        position="static">
        <Toolbar variant="dense">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
          >
            {bulletSections.map((tab, index) => <Tab sx={{ color: '#d2d2d2' }} value={tab.value} label={tab.label} key={`tab${index}`} />)}
          </Tabs>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
