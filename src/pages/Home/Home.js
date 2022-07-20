import React from 'react';
import { Box, Grid, Container, Typography } from '@mui/material';
import Page from '../../components/Page';
import NavHome from './NavHome';
import Banner from './Banner';
import Courses from './Courses';
import UpToDate from './UpToDate';
import Partners from './Partners';
import Footer from './Footer';

function Home() {
  return (
    <Page title="Home">
      <Container maxWidth="xl">
        <NavHome />
      </Container>
      <Banner />
      <Container>
        <Courses />
        <UpToDate />
        <Partners />
      </Container>
      <Footer />
    </Page>
  );
}

export default Home;
