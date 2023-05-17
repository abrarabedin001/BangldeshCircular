import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';
import DefaultLayout from '../src/components/layouts/DefaultLayout'
import CardLinkList from '../src/components/CardsLinkList'
import Search from '../src/components/Search';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <DefaultLayout>
          <div className='flex justify-center mb-5'>
            <Search/>
          </div>
         <div className='w-full  space-y-3 '>
         <CardLinkList />
          <CardLinkList/>
          <CardLinkList/>
          <CardLinkList/>
          <CardLinkList/>
          <CardLinkList/>
          <CardLinkList/>
          <CardLinkList/>
          <CardLinkList/>
          <CardLinkList/>
          <CardLinkList/>
          <CardLinkList/>
          <CardLinkList/>
          <CardLinkList/>
          <CardLinkList/>
         </div>
          
         
        
        </DefaultLayout>
        
      
      </Box>
    </Container>
  );
}
