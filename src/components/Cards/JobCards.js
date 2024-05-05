import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Tooltip from '@mui/material/Tooltip';
import DrawerRight from './DrawerRight';

export default function OutlinedCard({props}) {
  return (
    <Box sx={{ minWidth: 275, display:'flex', flexBasis: '33.3333%', webkitBoxFlex: '0', flexGrow: '0', maxWidth: '33.3333%', marginBottom: '18px'}}>
      <Card className='cards-single' variant="outlined">
      <React.Fragment>
            <CardContent sx={{padding: '24px', paddingBottom: '24px !important', height: '240px', minHeight: '240px', width: '100%'}}>
            <div className='logo-wrap'>
                <img className='company-logo' src={props.logoUrl} alt='logo'/>
                <div className='company-name-role'>
                    <b style={{marginBottom: '-6px', display: 'flex', width: '100%', justifyContent: 'space-between'}}><span>{props.jobRole}</span> <span className='save-icon'> <BookmarkBorderIcon /> </span> </b>
                    <span className='company'><small>{props.companyName}</small>, <span className='location'><small>{props.location}</small></span></span>
                </div>
            </div>
            <div className='logo-wrap' style={{color: '#316b83', marginTop: '5px', marginBottom: '5px', opacity: '84%'}}>
                <small className='chips-wrap'><b>{props.minExp} - {props.maxExp} Years</b></small> 
                <small className='chips-wrap'><b>{props.salaryCurrencyCode} {props.maxJdSalary}/W</b></small> 
            </div>
            <div className='desc-wrap'>
                <Typography sx={{ fontSize: 14, padding: '0px', margin: '0px', textAlign: 'left', display: 'flex', lineHeight: 'normal', fontSize: '12px', color: '#697780'}} color="text.secondary" gutterBottom>
                    {props.jobDetailsFromCompany}
                </Typography>
            </div>
            <div className='apply-button'>
                <span style={{color: '#707e85', display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
                    <Tooltip title="View More">
                        <DrawerRight dataProps={props}/>
                    </Tooltip>                    
                </span>
                <Button>Apply Now</Button>
            </div>
            </CardContent>
        </React.Fragment>
      </Card>
    </Box>
  );
}