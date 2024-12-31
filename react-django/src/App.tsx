import React from 'react';
import AboutComponent from './components/AboutComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ProjectsComponent from './components/ProjectsComponent';

export const Header: React.FC = () => {
  return (
    <div>
      <HeaderComponent />
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