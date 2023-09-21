import React, { useState } from 'react';
import { Container, Grid, InputLabel, Typography, Paper, TextField, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import FacebookIcon from '../assets/icons/fb.svg';
import GoogleIcon from '../assets/icons/google.svg';
import LinkedInIcon from '../assets/icons/linkdIn.svg';
import GitHubIcon from '../assets/icons/gitHub.svg';

const Register = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
       
        <Grid item xs={12} sm={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h2" style={{ color: '#3E51B4', fontSize: '64px', fontWeight: 'bold' }}>
            Your Registration Content Here
          </Typography>
        </Grid>
       
        <Grid item xs={12} sm={6} >
          <Paper elevation={3} style={{ padding: '16px', marginTop: '24px' }}>
            <Typography variant="h5" align="left" style={{ marginBottom: '20px', fontWeight: 'bold' }}>Register</Typography>
            <form onSubmit={handleSubmit}>
              <InputLabel>Username</InputLabel>
              <TextField
                label="Your username here"
                variant="outlined"
                fullWidth
                margin="normal"
                name="username"
                value={userData.username}
                onChange={handleChange}
              />
              <InputLabel>Email</InputLabel>
              <TextField
                label="Email address here"
                variant="outlined"
                fullWidth
                margin="normal"
                name="email"
                value={userData.email}
                onChange={handleChange}
              />
              <InputLabel>Password</InputLabel>
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                name="password"
                value={userData.password}
                onChange={handleChange}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                style={{ marginTop: '16px' }}
              >
                Register
              </Button>
              <Typography variant="body2" align="left" style={{ marginTop: '16px' }}>
                Or Register with
              </Typography>
             
              <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
              <img src={FacebookIcon} alt="Facebook" style={{ width: '40px', margin: '0 8px' }} />
              <img src={GoogleIcon} alt="Google" style={{ width: '40px', margin: '0 8px' }} />
              <img src={LinkedInIcon} alt="LinkedIn" style={{ width: '40px', margin: '0 8px' }} />
              <img src={GitHubIcon} alt="GitHub" style={{ width: '40px', margin: '0 8px' }} />
              </Box>
              <Typography variant="body2" align="left" style={{ marginTop: '16px' }}>
                Already have an account? <Link to="/" variant="body2">Login</Link>
              </Typography>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
