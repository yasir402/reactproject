import React, {useState } from 'react';
import { Button, TextField, Typography, Container, Grid } from '@mui/material';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
const navigate = useNavigate();
  const Isvalid = () => {
    let procced = true;

    if (username == null || username === '') {
        procced = false;
      toast.error('Username is required');
      }
      if (password == null || password === '') {
        procced = false;
        toast.error('Password is required');
      }
      return procced ; 
}


  const handleSubmit = (e) => {
    e.preventDefault();
    if (Isvalid()) {
        fetch("http://localhost:8000/user/"+ username).then((res)=>{
         return res.json();
        }).then((resp)=>{

        if(Object.keys(resp).length===0){
            toast.error('Username is incorrect');
        }else{
            if(resp.password === password){
                toast.success('loged in successfully');
                sessionStorage.setItem('username',username);
                navigate('/')
            }else{
            toast.error('This credentials doesnot match to our records');
            }
        }
        }).catch((err)=>{
            toast.error('Login failed ');
        })
    }
  };


  return (
    <Container component="main" maxWidth="xs">
      <Typography variant="h5" align="center" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
          
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
        
            />
          </Grid>
        </Grid>
        <a href='/register'>I don't have an account</a>
        <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3 }}>
          Login
        </Button>
      </form>
    </Container>
  );
};

const Login = () => {
  return <LoginForm />;
};

export default Login;
