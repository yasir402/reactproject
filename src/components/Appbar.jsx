import React from 'react';
import { AppBar, Toolbar, Typography, Container, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Appbar = () => {
    const navigate = useNavigate();

    function logout() {
        sessionStorage.clear();
        navigate('/login');
    }

    return (
        <div>
            <AppBar position="static" sx={{ backgroundColor: '#282c34' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link
                            to="/"
                            style={{ color: 'inherit', textDecoration: 'none', marginRight: '20px', fontWeight: 'bold' }}
                        >
                            Cyber
                        </Link>
                    </Typography>
                    <Typography variant="h6" component="div">
                        <Link
                            to="/"
                            style={{ color: 'inherit', textDecoration: 'none', marginRight: '10px' }}
                        >
                            Home
                        </Link>
                    </Typography>
                    <Typography variant="h6" component="div">
                        <Link
                            to="/products"
                            style={{ color: 'inherit', textDecoration: 'none', marginRight: '10px' }}
                        >
                            Products
                        </Link>
                    </Typography>
                    <Button
                        onClick={logout}
                        color="inherit"
                        variant="outlined"
                        sx={{ marginLeft: '20px' }}
                    >
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Appbar;
