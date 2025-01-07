import React from 'react';
import AboutComponent from './components/AboutComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ProjectsComponent from './components/ProjectsComponent';
import HomeBannerComponent from './components/HomeBannerComponent';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <div>
      <HeaderComponent isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    </div>
  );
};

export const HomeBanner: React.FC = () => {
  return (
    <div>
      <HomeBannerComponent />
    </div>
  );
};

export const Projects: React.FC = () => {
  return (
    <div>
      <ProjectsComponent />
    </div>
  );
};

export const About: React.FC = () => {
  return (
    <div>
      <AboutComponent />
    </div>
  );
};

export const Footer: React.FC = () => {
  return (
    <div>
      <FooterComponent />
    </div>
  );
};
