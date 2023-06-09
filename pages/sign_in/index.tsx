import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../../src/Link';
import ProTip from '../../src/ProTip';
import Copyright from '../../src/Copyright';
import SignIn from '../../src/components/SignIn';

export default function Page() {
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
        
        <SignIn/>
      </Box>
    </Container>
  );
}
