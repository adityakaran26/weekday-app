import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import WavingHandOutlinedIcon from '@mui/icons-material/WavingHandOutlined';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PersonAddIcon from '@mui/icons-material/PersonAdd'; 
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import BusinessIcon from '@mui/icons-material/Business';
import NetworkPingIcon from '@mui/icons-material/NetworkPing';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Card from '../Cards/Cards';
import SelectRole from '../MultiSelect/MultiSelectRole';
import SelectStack from '../MultiSelect/MultiSelectTechStack';
import SelectBasepay from '../MultiSelect/MultiSelectMinBasePay';
import SelectRemoteModes from '../MultiSelect/MultiSelectRemoteSite';
import Selectedlocations from '../MultiSelect/MultiSelectLocation';
import SelectedExp from '../MultiSelect/MultiSelectMinExp';
import SelectedCompany from '../MultiSelect/MultiSelectCompany';
import { Button } from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import { fetchTodos } from '../../redux/slice/todo';
import JobCard from '../Cards/JobCards';
import ScrollElement from '../Scroll/Scroll';
import { useEffect, useState } from "react";


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);
export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  // Dispatch //
  const dispatch = useDispatch();

  const [isVisible, setIsVisible] = useState(false);

  const handleVisibleChange = (value) => {
    // if(value && !isVisible) {
      setIsVisible(value);
      dispatch(fetchTodos());
    // }
  };

  // State //
  const state = useSelector((state) => state);
  const { todo } = state;

  // Roles //
  const [selectedRoles, setSelectedRoles] = useState([]);
  const handleRoleChange = (value) => {
    setSelectedRoles(value);
  };
  const filteredDataRoles = state.todo.data.jdList.reduce((acc, curr, index) => {
    const existingIndex = acc.findIndex(item => item.name === curr.jobRole);
    if (existingIndex === -1) {
        acc.push({ name: curr.jobRole, id: (acc.length).toString() });
    }
    return acc;
  }, []);

  // company name //
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const handleCompanyChange = (value) => {
    setSelectedCompanies(value);
  };
  const filteredDataCompany = state.todo.data.jdList.reduce((acc, curr, index) => {
    const existingIndex = acc.findIndex(item => item.name === curr.companyName);
    if (existingIndex === -1) {
        acc.push({ name: curr.companyName, id: (acc.length).toString() });
    }
    return acc;
  }, []);

  // min base pay //
  const filteredDataBasePay = state.todo.data.jdList.reduce((acc, curr, index) => {
    if (curr.minJdSalary !== null) { // Check for null values
      const existingIndex = acc.findIndex(item => item.name === curr.minJdSalary);
      if (existingIndex === -1) {
        acc.push({ name: curr.minJdSalary, id: acc.length.toString() });
      }
    }
    return acc;
  }, []);

  // location //
  const filteredDataLocation = state.todo.data.jdList.reduce((acc, curr, index) => {
    if (curr.location !== null) { // Check for null values
      const existingIndex = acc.findIndex(item => item.name === curr.location);
      if (existingIndex === -1) {
        acc.push({ name: curr.location, id: acc.length.toString() });
      }
    }
    return acc;
  }, []);

  // Min Exp //
  const filteredDataExp = state.todo.data.jdList.reduce((acc, curr, index) => {
    if (curr.minExp !== null) { // Check for null values
      const existingIndex = acc.findIndex(item => item.name === curr.minExp);
      if (existingIndex === -1) {
        acc.push({ name: curr.minExp, id: acc.length.toString() });
      }
    }
    return acc;
  }, []);
  // sorting //
  filteredDataExp.sort((a, b) => {
    return parseInt(a.name) - parseInt(b.name);
  });
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // const filteredJobs = todo.data.jdList.filter((job) => {
  //   if (selectedRoles.length === 0) return true;
  //   return selectedRoles.some((role) => role.name === job.jobRole);
  // });

  // const filteredJobsCompany = todo.data.jdList.filter((job) => {
  //   if (selectedCompanies.length === 0) return true;
  //   return selectedCompanies.some((role) => role.name === job.companyName);
  // });
  const filteredJobs = todo.data.jdList.filter((job) => {
    const roleFilter = selectedRoles.length === 0 || selectedRoles.some((role) => role.name === job.jobRole);
    const companyFilter = selectedCompanies.length === 0 || selectedCompanies.some((company) => company.name === job.companyName);
    return roleFilter && companyFilter;
  });

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: '#316B83' }}>
        <Toolbar sx={{paddingLeft: '16px !important'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <img className="MuiBox-root css-6sxfzj" src="https://jobs.weekday.works/_next/static/media/logo-small.08826abd.png" style={{ width: '38px', maxWidth: '100%' }} alt="logo"/>
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
            <span style={{display: 'flex', width: '50%', justifyContent: 'start', alignItems: 'center'}}>
              <WavingHandOutlinedIcon sx={{ fontSize: '1.2rem' }}/> 
              <small style={{marginLeft: '4px'}}> John!</small>
            </span>
            <AccountCircleIcon />
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{ width: '100%' ,justifyContent: 'center' }}>
          <span style={{color: 'rgb(49 107 131)'}}><b>Weekday!</b></span>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <p className={open ? 'divider-title-open' : 'divider-title-close'}><small>Jobs</small></p>
        <List>
          {['Applied jobs', 'Search jobs', 'Search salary', 'Referal'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: '#316B83'
                  }}
                >
                  {index === 0 ? <PersonIcon /> : ''}
                  {index === 1 ? <SearchIcon /> : ''}
                  {index === 2 ? <CurrencyRupeeIcon /> : ''}
                  {index === 3 ? <PersonAddIcon/> : ''}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0}} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <p className={open ? 'divider-title-open' : 'divider-title-close'}><small>Refer</small></p>
        <List>
          {['Shortlist', 'Company', 'Extension'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: '#316B83'
                  }}
                >
                  {index === 0 ? <ThumbUpAltIcon /> : ''}
                  {index === 1 ? <BusinessIcon /> : ''}
                  {index === 2 ? <NetworkPingIcon /> : ''}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0}} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, background: '#ffffff', display: 'flex', justifyContent: 'start', alignItems: 'center', flexDirection: "column"}}>
        <DrawerHeader />
        <Card/>
        <div className='search-job'><SearchIcon /> <span style={{borderBottom: '1px solid lightgray'}}> Jobs</span></div>
        <div className='filters'>
            {state.todo.data.jdList.length > 0 ? (
              <>
              <SelectRole filterRoleProps={filteredDataRoles} onRoleChange={handleRoleChange} />
              <SelectStack/>
              <SelectBasepay filteredBasePayProp={filteredDataBasePay}/>
              <SelectRemoteModes/>
              <Selectedlocations filteredLocationProp={filteredDataLocation}/>
              <SelectedExp filteredExpProp={filteredDataExp}/>
              <SelectedCompany filteredCompanyProp={filteredDataCompany} onCompanyChange={handleCompanyChange}/>
              </>
            ) : (
              "Loading..."
            )}
        </div>

        <div className='cards-wrap'>
          {/* {
            todo.data.jdList.map((item, index) => {
              return <JobCard props={item} key={index}/>
            })
          } */}
          {filteredJobs.map((job, index) => (
            <JobCard props={job} key={index} />
          ))}
        </div>
        <div className='scroll-wrapper'>
          <ScrollElement handleVisibleChange={handleVisibleChange} isVisible={isVisible}></ScrollElement>
        </div>
      </Box>
    </Box>
  );
}
