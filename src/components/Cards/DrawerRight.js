import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CloseIcon from '@mui/icons-material/Close';

export default function SwipeableTemporaryDrawer({dataProps}) {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, padding: '10px'}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <span><b>Job Details</b></span> 
        <small><CloseIcon style={{cursor: 'pointer'}}/></small>
      </div>
      <Divider style={{marginBottom: '12px'}}/>
      <div className='logo-wrap'>
          <img className='company-logo' src={dataProps.logoUrl} alt='logo'/>
          <div className='company-name-role'>
              <b style={{marginBottom: '-6px', display: 'flex', width: '100%', justifyContent: 'space-between'}}><span>{dataProps.jobRole}</span> <span className='save-icon'> </span> </b>
              <span className='company'><small>{dataProps.companyName}</small>, <span className='location'><small>{dataProps.location}</small></span></span>
          </div>
      </div>
      <div className='logo-wrap' style={{color: '#316b83', marginTop: '5px', marginBottom: '5px', opacity: '84%'}}>
          <small className='chips-wrap'><b>{dataProps.minExp} - {dataProps.maxExp} Years</b></small> 
          <small className='chips-wrap'><b>{dataProps.salaryCurrencyCode} {dataProps.maxJdSalary}/W</b></small> 
      </div>
      <div style={{lineHeight: 'normal', fontSize: '12px'}}>
              {dataProps.jobDetailsFromCompany}
      </div>
      <div className='apply-button' style={{justifyContent: 'center'}}>
          <Button>Apply Now</Button>
      </div>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <OpenInNewIcon className='link-icon' onClick={toggleDrawer(anchor, true)}/>
          <SwipeableDrawer
            className='right-slider'
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}