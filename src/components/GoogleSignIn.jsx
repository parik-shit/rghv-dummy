import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button } from '@mui/material';

const GoogleSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    // Your sign-in logic here
    console.log('Email:', email);
    console.log('Password:', password);

    // Navigate to gmail.com
    window.location.href = 'https://www.gmail.com';
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <Card sx={{ maxWidth: 400, width: '100%', minHeight: 500, position: 'relative' }}>
        {/* Google Icon */}
        <div style={{ position: 'absolute', top: 16, left: 16 }}>
          <img src="/googleicon.svg" alt="Google Icon" width="90" height="90" />
        </div>
        {/* Card Content */}
        <CardContent style={{ paddingTop: 60 }}>
          <Typography variant="h5" component="h1" align="center" gutterBottom className='text-gray-500'>
            <br/>
            Sign in 
          </Typography>
          <Typography variant="h8" component="h1" align="center" gutterBottom>
            Continue to <a href="https://www.keka.com/" style={{ color: 'blue' }}>keka</a>
          </Typography>
          <form onSubmit={handleSignIn}>
            <TextField
              label="Email address"
              type="email"
              variant="outlined"
              autoComplete="email"
              required
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              autoComplete="current-password"
              required
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ marginBottom: 2 }}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Sign in
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default GoogleSignIn;
