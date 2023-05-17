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
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card className='bg-gray-700 w-[900px] '>
      <CardContent >
        <div className='flex justify-between'>
          <p>
            Name of company
          </p>
          
          <p>
           27-Jun-2023
          </p>
        </div>
        
        <h1 className='text-2xl bg-gray-700 my-3' >
          Title: lorem ipsum setk ksadjflh a;sdkfj asdkjslad; iasjdlkjasdf
        </h1>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Excerpt.....
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}