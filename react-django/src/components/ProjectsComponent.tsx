import React from 'react';
import { Typography, Card, CardContent, Button, Grid, Box } from '@mui/material';

const projects = [
  { title: '🚀 Project One', description: 'A cool web app', link: '#' },
  { title: '🌟 Project Two', description: 'Another amazing project', link: '#' },
  { title: '💻 Project Three', description: 'Yet another awesome app', link: '#' },
];

const Projects: React.FC = () => (
  <>
    {/* Title */}
    <Typography
      variant="h4"
      component="div"
      gutterBottom
      sx={{
        textAlign: 'center',
        fontWeight: 'bold',
        mt: 4,
        mb: 6, // Increased spacing below the title
      }}
    >
      Projects
    </Typography>

    {/* Project Cards */}
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              variant="outlined"
              sx={{
                textAlign: 'center',
                height: 300, // Ensures consistent height
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center', // Centers content vertically
                alignItems: 'center', // Centers content horizontally
                p: 2,
                borderRadius: 2,
                transition: '0.3s',
                '&:hover': { boxShadow: 6 },
              }}
            >
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {project.description}
                </Typography>
              </CardContent>
              <Box sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  href={project.link}
                  target="_blank"
                >
                  Visit
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  </>
);

export default Projects;
