import React from 'react';
import { Typography, List, ListItem } from '@mui/material';

const Projects: React.FC = () => (
  <>
    <Typography variant="h4" component="div" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold', mt: 4 }}>
      Projects
    </Typography>
    <List sx={{ display: 'inline-block', textAlign: 'left', marginLeft: 'auto', marginRight: 'auto' }}>
      <ListItem>
        <Typography variant="body1">🚀 Project One - A cool web app</Typography>
      </ListItem>
      <ListItem>
        <Typography variant="body1">🌟 Project Two - Another amazing project</Typography>
      </ListItem>
      <ListItem>
        <Typography variant="body1">💻 Project Three - Yet another awesome app</Typography>
      </ListItem>
    </List>
  </>
);

export default Projects;
