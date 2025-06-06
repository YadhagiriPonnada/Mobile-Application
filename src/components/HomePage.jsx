import React, { useEffect } from 'react';
import { Box, Button, Typography, useTheme, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getUserSession } from '../utils/auth';

export const HomePage = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        const session = getUserSession();
        if (session) {
            // If user has a valid session, redirect to main page
            navigate('/main');
        }
    }, [navigate]);

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: '#f5f5f5',
                p: 2
            }}
        >
            <Box
                sx={{
                    backgroundColor: '#ffffff',
                    minHeight: isMobile ? 'calc(100vh - 32px)' : '80vh',
                    width: isMobile ? '100%' : "50%",
                    maxWidth: '800px',
                    borderRadius: isMobile ? 0 : 2,
                    boxShadow: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    p: isMobile ? 3 : 4,
                }}
            >
                <Box>
                    <Typography 
                        variant={isMobile ? "h6" : "h5"} 
                        fontWeight="bold" 
                        color="primary"
                        sx={{
                            textAlign: isMobile ? 'center' : 'left'
                        }}
                    >
                        Welcome to PopX
                    </Typography>
                    <Typography 
                        variant="body1" 
                        sx={{
                            color: "#4A5568",
                            pt: 2,
                            textAlign: isMobile ? 'center' : 'left'
                        }}
                    >
                        Your one-stop solution for managing your business presence.
                    </Typography>
                </Box>
                <Box sx={{ width: '100%' }}>
                    <Button 
                        variant="contained" 
                        fullWidth 
                        size="large"
                        sx={{
                            bgcolor: '#6B46C1',
                            py: 1.5,
                            '&:hover': {
                                bgcolor: '#553C9A',
                            },
                        }} 
                        onClick={() => navigate("/register")}
                    >
                        Create Account
                    </Button>
                    <Button 
                        variant="outlined" 
                        fullWidth 
                        size="large"
                        sx={{
                            mt: 2,
                            borderColor: '#6B46C1',
                            color: '#6B46C1',
                            py: 1.5,
                            '&:hover': {
                                borderColor: '#553C9A',
                                bgcolor: 'rgba(107, 70, 193, 0.04)',
                            },
                        }} 
                        onClick={() => navigate("/login")}
                    >
                        Already Registered? Login
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};