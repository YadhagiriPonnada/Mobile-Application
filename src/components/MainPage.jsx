import React, { useState, useEffect } from 'react';
import { Card, CardContent, Avatar, Typography, Box, IconButton, Divider, Button, useTheme, useMediaQuery } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import LogoutIcon from '@mui/icons-material/Logout';
import { useLocation, useNavigate } from 'react-router-dom';
import { getUserSession, clearUserSession } from '../utils/auth';

export const MainPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    
    const [userData, setUserData] = useState(null);
    const [profileImage, setProfileImage] = useState(null);

    useEffect(() => {
        const session = getUserSession();
        if (!session) {
            // If no valid session exists, redirect to login
            navigate('/login');
            return;
        }

        // Use location state if available (coming from registration/login)
        // otherwise use session data
        const data = location.state || session;
        setUserData(data);
        setProfileImage(data.profileImage);
    }, [location, navigate]);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const newProfileImage = reader.result;
                setProfileImage(newProfileImage);
                // Update session with new profile image
                const session = getUserSession();
                if (session) {
                    session.profileImage = newProfileImage;
                    setUserSession(session);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleLogout = () => {
        clearUserSession();
        navigate('/', { replace: true });
    };

    if (!userData) return null;

    return (
        <Box 
            sx={{
                minHeight: '100vh',
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
                    p: isMobile ? 3 : 4,
                }}
            >
                <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    mb: 3,
                    flexDirection: isMobile ? 'column' : 'row',
                    gap: isMobile ? 2 : 0
                }}>
                    <Typography 
                        variant={isMobile ? "h6" : "h5"}
                        sx={{ 
                            color: '#6B46C1',
                            fontWeight: 'bold'
                        }}
                    >
                        Account Settings
                    </Typography>
                    <Button
                        variant="outlined"
                        color="primary"
                        startIcon={<LogoutIcon />}
                        onClick={handleLogout}
                        fullWidth={isMobile}
                        size="large"
                        sx={{
                            borderColor: '#6B46C1',
                            color: '#6B46C1',
                            py: 1.5,
                            '&:hover': {
                                borderColor: '#553C9A',
                                backgroundColor: 'rgba(107, 70, 193, 0.04)'
                            }
                        }}
                    >
                        Logout
                    </Button>
                </Box>
                <Divider sx={{ bgcolor: '#6B46C1', opacity: 0.2, mb: 4 }} />
                
                <Box 
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 3,
                        flex: 1
                    }}
                >
                    <Box position="relative">
                        <Avatar
                            alt={userData.fullName}
                            src={profileImage}
                            sx={{ 
                                width: isMobile ? 120 : 100, 
                                height: isMobile ? 120 : 100,
                                border: '2px solid #6B46C1'
                            }}
                        />
                        <IconButton
                            size="small"
                            component="label"
                            sx={{
                                position: 'absolute',
                                bottom: 0,
                                right: 0,
                                bgcolor: '#6B46C1',
                                color: 'white',
                                width: 36,
                                height: 36,
                                '&:hover': {
                                    bgcolor: '#553C9A',
                                },
                            }}
                        >
                            <input
                                hidden
                                accept="image/*"
                                type="file"
                                onChange={handleImageChange}
                            />
                            <PhotoCameraIcon fontSize="small" />
                        </IconButton>
                    </Box>
                    
                    <Box sx={{ textAlign: 'center', width: '100%' }}>
                        <Typography 
                            variant="h6" 
                            sx={{
                                fontWeight: 'bold',
                                color: '#2D3748',
                                mb: 1
                            }}
                        >
                            {userData.fullName}
                        </Typography>
                        <Typography 
                            variant="body1"
                            sx={{
                                color: '#4A5568'
                            }}
                        >
                            {userData.email}
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ mt: 4, textAlign: 'center' }}>
                    <Typography 
                        variant="body1" 
                        sx={{
                            color: '#718096',
                            lineHeight: 1.6
                        }}
                    >
                        Welcome to your PopX dashboard! Here you can manage your account settings and preferences.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};