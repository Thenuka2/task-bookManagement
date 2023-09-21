import React from 'react';
import { Container, Grid, InputLabel, Typography, Paper, TextField, Button, Box } from '@mui/material';
import FacebookIcon from '../assets/icons/fb.svg';
import GoogleIcon from '../assets/icons/google.svg';
import LinkedInIcon from '../assets/icons/linkdIn.svg';
import GitHubIcon from '../assets/icons/gitHub.svg';
import { Link } from 'react-router-dom'; 
//import Signup from './SignUp';

const SignUp = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        
        <Grid item xs={12} sm={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h2" style={{ color: '#3E51B4', fontSize: '64px', fontWeight: 'bold' }}>
            Manage your Links Collections
          </Typography>
        </Grid>
       
        <Grid item xs={12} sm={6} >
          <Paper elevation={3} style={{ padding: '16px', marginTop: '24px' }}>
            <Typography variant="h5" align="left"  style={{ marginBottom: '20px', fontWeight: 'bold' }}>Sign Up</Typography>
            <form>
              <InputLabel>Name</InputLabel>
              <TextField
                label="Your name here"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <InputLabel>Email</InputLabel>
              <TextField
                label="Email address here"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <InputLabel>Password</InputLabel>
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <Link to="/" variant="body2" align="right">
                Forgot password?
              </Link>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                style={{ marginTop: '16px' }}
              >
                Login
              </Button>
              <Typography variant="body2" align="left" style={{ marginTop: '16px' }}>
                Or Sign Up with
              </Typography>
              <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
              <img src={FacebookIcon} alt="Facebook" style={{ width: '40px', margin: '0 8px' }} />
              <img src={GoogleIcon} alt="Google" style={{ width: '40px', margin: '0 8px' }} />
              <img src={LinkedInIcon} alt="LinkedIn" style={{ width: '40px', margin: '0 8px' }} />
              <img src={GitHubIcon} alt="GitHub" style={{ width: '40px', margin: '0 8px' }} />
              </Box>
              <Typography variant="body2" align="left" style={{ marginTop: '16px' }}>
                Don't have an account? <Link to="/login" variant="body2"> Login</Link>
              </Typography>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignUp;
