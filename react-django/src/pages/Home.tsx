import React from 'react';
import { Container } from '@mui/material';
import { Header, About, Projects, Footer, HomeBanner } from '../App';

interface HomeProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Home: React.FC<HomeProps> = ({ isDarkMode, toggleTheme }) => (
  <>
    <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    <Container maxWidth="lg" sx={{ padding: 2 }}>
      <main>
        <HomeBanner />
        <About />
        <Projects />
      </main>
      <Footer />
    </Container>
  </>
);

export default Home;
