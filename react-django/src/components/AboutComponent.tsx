import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const About: React.FC = () => (
  <Card variant="outlined" sx={{ marginTop: 2 }}>
    <CardContent>
      <Typography variant="h5" component="div" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1" color="text.secondary">
        I am a passionate web developer with a focus on modern technologies and clean design.
      </Typography>
    </CardContent>
  </Card>
);

export default About;