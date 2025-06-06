import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { setUserSession } from '../utils/auth';

export const SignUp = () => {
    const {register, handleSubmit, formState:{errors}, reset} = useForm({mode:"onBlur"});
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const submitHandler = (data) => {
        const userData = {
            ...data,
            profileImage: "https://res.cloudinary.com/dveyxa6i5/image/upload/v1739357981/my_pic_vma2nv.jpg"
        };
        setUserSession(userData);
        reset();
        navigate('/main', { 
            state: { 
                fullName: data.fullName, 
                email: data.email,
                profileImage: userData.profileImage
            } 
        });
    }

    const validationSchema = {
        fullName:{
            required:{
                value:true,
                message:"Full Name is Required *"
            }
        },
        email:{
            required:{
                value:true,
                message:"E-mail is Required *"
            }
        },
        password:{
            required:{
                value:true,
                message:"Password is Required *"
            }
        },
        mobile:{
            required:{
                value:true,
                message:"Phone Number is Required *"
            }
        },
        companyName:{
            required:{
                value:true,
                message:"Company Name is Required *"
            }
        }
    }
    
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
                    minHeight: isMobile ? 'calc(100vh - 32px)' : 'auto',
                    width: isMobile ? '100%' : "50%",
                    maxWidth: '800px',
                    borderRadius: isMobile ? 0 : 2,
                    boxShadow: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    p: isMobile ? 3 : 4,
                }}
            >
                <Box sx={{ flex: 1 }}>
                    <Typography 
                        variant={isMobile ? "h6" : "h5"} 
                        fontWeight="bold" 
                        color="primary" 
                        sx={{ 
                            mb: 3,
                            textAlign: isMobile ? 'center' : 'left'
                        }}
                    >
                        Create your PopX account
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit(submitHandler)}
                        sx={{ 
                            mt: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2
                        }}
                    >
                        <TextField
                            label="Full Name"
                            fullWidth
                            placeholder='Enter full name'
                            error={errors.fullName}
                            {...register("fullName",validationSchema.fullName)}
                            helperText={errors.fullName && errors.fullName.message}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#6B46C1',
                                    },
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: '#6B46C1',
                                },
                            }}
                        />
                        <TextField
                            label="Phone Number"
                            fullWidth
                            placeholder='Enter phone number'
                            error={errors.mobile}
                            {...register("mobile",validationSchema.mobile)}
                            helperText={errors.mobile && errors.mobile.message}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#6B46C1',
                                    },
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: '#6B46C1',
                                },
                            }}
                        />
                        <TextField
                            label="E-mail Address"
                            fullWidth
                            placeholder='Enter email address'
                            error={errors.email}
                            {...register("email",validationSchema.email)}
                            helperText={errors.email && errors.email.message}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#6B46C1',
                                    },
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: '#6B46C1',
                                },
                            }}
                        />
                        <TextField
                            label="Password"
                            type="password"
                            fullWidth
                            placeholder='Enter password'
                            error={errors.password}
                            {...register("password",validationSchema.password)}
                            helperText={errors.password && errors.password.message}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#6B46C1',
                                    },
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: '#6B46C1',
                                },
                            }}
                        />
                        <TextField
                            label="Company Name"
                            fullWidth
                            placeholder='Enter company name'
                            error={errors.companyName}
                            {...register("companyName",validationSchema.companyName)}
                            helperText={errors.companyName && errors.companyName.message}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#6B46C1',
                                    },
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: '#6B46C1',
                                },
                            }}
                        />
                        <FormControl component="fieldset" sx={{ mt: 1 }}>
                            <FormLabel component="legend" sx={{ color: '#6B46C1' }}>Are You an Agency?</FormLabel>
                            <RadioGroup
                                row
                                name="agency"
                            >
                                <FormControlLabel 
                                    value="yes" 
                                    control={
                                        <Radio 
                                            sx={{
                                                '&.Mui-checked': {
                                                    color: '#6B46C1',
                                                },
                                            }}
                                        />
                                    } 
                                    label="Yes" 
                                />
                                <FormControlLabel 
                                    value="No" 
                                    control={
                                        <Radio 
                                            sx={{
                                                '&.Mui-checked': {
                                                    color: '#6B46C1',
                                                },
                                            }}
                                        />
                                    } 
                                    label="No" 
                                />
                            </RadioGroup>
                        </FormControl>
                        <Box sx={{ mt: 'auto', pt: 4 }}>
                            <Button
                                type="submit"
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
                            >
                                Create Account
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}