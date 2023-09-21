import React, { useState } from 'react';
import { Container, Grid, InputLabel, Typography, Paper, TextField, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../actions/authActions';
import FacebookIcon from '../assets/icons/fb.svg';
import GoogleIcon from '../assets/icons/google.svg';
import LinkedInIcon from '../assets/icons/linkdIn.svg';
import GitHubIcon from '../assets/icons/gitHub.svg';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h2" style={{ color: '#3E51B4', fontSize: '64px', fontWeight: 'bold' }}>
            Manage your Links Collection
          </Typography>
          <Link to="/home">
            <Button variant="contained" color="primary">
              Home
            </Button>
          </Link>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper elevation={3} style={{ padding: '16px', marginTop: '24px' }}>
            <Typography variant="h5" align="left" style={{ marginBottom: '20px', fontWeight: 'bold' }}>Login</Typography>
            <form onSubmit={handleLogin}>
              <InputLabel>Email</InputLabel>
              <TextField
                label="Email address here"
                variant="outlined"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputLabel>Password</InputLabel>
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              <Typography variant="body2" align="center" style={{ marginTop: '16px' }}>
                Or Login with
              </Typography>
              <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
                <img src={FacebookIcon} alt="Facebook" style={{ width: '40px', margin: '0 8px' }} />
                <img src={GoogleIcon} alt="Google" style={{ width: '40px', margin: '0 8px' }} />
                <img src={LinkedInIcon} alt="LinkedIn" style={{ width: '40px', margin: '0 8px' }} />
                <img src={GitHubIcon} alt="GitHub" style={{ width: '40px', margin: '0 8px' }} />
              </Box>
              <Typography variant="body2" align="left" style={{ marginTop: '16px' }}>
                Don't have an account? <Link to="/signup" variant="body2">Sign Up</Link>
              </Typography>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
