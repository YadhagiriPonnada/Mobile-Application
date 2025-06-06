import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

export const LoginPage = () => {
  return (
    <Box
      sx={{
        height:"100vh",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#fafbfc',
          border:"1px solid #fff",
          height:"70vh",
          width:"60vh",
          borderRadius: 2,
          boxShadow: 3,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems:"flex-start",
          p: 2,
          pt:3,
          m:2
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Signin to your PopX Account
        </Typography>
        <Typography variant='p' sx={{color:"gray",pt:2}}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic totam quisquam molestias.
        </Typography>
        <Box
            component="form"
            sx={{ mt: 2 }}
        >
            <TextField
              label="Email Address"
              fullWidth
              margin="normal"
              placeholder='Enter email Address'
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              placeholder='Enter Password'
            />
            <Button disabled
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 2 }}
            >
              Login
            </Button>
        </Box>
      </Box>
    </Box>
  )
}