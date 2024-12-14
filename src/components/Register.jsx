import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Grid, colors } from '@mui/material';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const RegistrationForm = () => {
  const [id, idchange] = useState("")
  const [fullname, fullnamechange] = useState("")
  const [email, emailchange] = useState("")
  const [password, passwordchange] = useState("")
  const navigate = useNavigate();
  const Isvalid = () => {
    let procced = true;

  
    if (id == null || id === '') {
      procced = false;
      toast.error('Username is required');
    
    }else if (id.length < 6) {
      procced = false;
      toast.error('please enter atleast 6 characters in username');
    }
  
    if (fullname == null || fullname === '') {
      procced = false;
      toast.error('Full name is required');
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email == null || email === '' ) {
      procced = false;
      toast.error('Email is required');
    } else if (!emailRegex.test(email)) {
      procced = false;
      toast.error('Invalid Email format');
    }
    
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (password == null || password === ''  ) {
      procced = false;
      toast.error('Password is required');
    }else if (!passwordRegex.test(password)) {
      procced = false;
      toast.error('Password (at least 8 characters, with a mix of uppercase, lowercase, and digits');
    }
  
   
  
    return procced;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = { id, fullname, email, password };
    if (Isvalid()) {
      fetch("http://localhost:8000/user", {
        method: "POST",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data),
      })
        .then((res) => {
          toast.success('Register successfully');
          navigate('/login');
        })
        .catch((err) => {
          toast.error('Register failed: ' + err.message);
        });
    }
  };

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Typography variant="h5" align="center" gutterBottom>
          Register
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="username"
                name="usename"
                value={id}
                onChange={(e) => idchange(e.target.value)}

              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Full Name"
                name="fullName"
                value={fullname}
                onChange={(e) => fullnamechange(e.target.value)}

              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => emailchange(e.target.value)}

              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                type="password"
                name="password"
                value={password}
                onChange={(e) => passwordchange(e.target.value)}

              />
            </Grid>
          </Grid>
          <a href='/login'>I have already registered</a>
          <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3 }}>
            Register
          </Button>

        </form>
      </Container>
    </div>
  );
};

const Register = () => {
  return <RegistrationForm />;
};

export default Register;
