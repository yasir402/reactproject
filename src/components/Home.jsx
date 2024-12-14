import React from 'react';
import { Toolbar, Typography, Container, Link, Button } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Appbar from './Appbar';

const Home = () => {
const navigate = useNavigate();
function logout(){
  sessionStorage.clear();
  navigate('/login')
}
  useEffect(()=>{
let username = sessionStorage.getItem('username');
if(username == null || username === ''){
  navigate('/login')
}
  },[])
  return (
    <div>
      <Appbar/>

      <Container>
        <div>
          <Typography variant="h5" gutterBottom sx={{ marginTop: '20px' }}>
            Welcome {sessionStorage.getItem('username')}
          </Typography>
          {/* Your content goes here */}
        </div>
      </Container>
    </div>
  );
};

export default Home;
