import React from 'react';
import { Container } from '@mui/material';
import { Header, About, Projects, Footer } from '../App';

const Home: React.FC = () => (
    <Container maxWidth="md" sx={{ padding: 2 }}>
      <Header />
      <main>
        <About />
        <Projects />
      </main>
      <Footer />
    </Container>
  );
  
  export default Home;