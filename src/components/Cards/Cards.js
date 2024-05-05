import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent sx={{padding: '8px', paddingBottom: '8px !important'}}>
      <Typography sx={{ fontSize: 14, padding: '0px', margin: '0px' }} color="text.secondary" gutterBottom>
      We, at Weekday, are creating a go-to hub for uncovering the real issues candidates should be aware of before joining a company.
      <a href='#' style={{textDecoration: 'none', color: '#316b83'}}> Access 150+ company reviews here</a>
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275, width: '86%'}}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}