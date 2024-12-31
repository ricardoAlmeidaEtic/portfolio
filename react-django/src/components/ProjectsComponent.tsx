import React from 'react';
import { Card, CardContent, Typography, List, ListItem } from '@mui/material';

const Projects: React.FC = () => (
  <Card variant="outlined" sx={{ marginTop: 2 }}>
    <CardContent>
      <Typography variant="h5" component="div" gutterBottom>
        Projects
      </Typography>
      <List>
        <ListItem>Project One - A cool web app</ListItem>
        <ListItem>Project Two - Another amazing project</ListItem>
        <ListItem>Project Three - Yet another awesome app</ListItem>
      </List>
    </CardContent>
  </Card>
);

export default Projects;