import React from 'react';
import { Box, Grid, Container, Typography } from '@mui/material';
import Page from '../../components/Page';
import NavHome from './NavHome';

function Home() {
  return (
    <Page title="Home">
      <Container maxWidth="xl">
        <NavHome />
      </Container>
    </Page>
  );
}

export default Home;
