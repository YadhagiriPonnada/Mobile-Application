import { Route, Routes } from 'react-router-dom'
import { HomePage } from './components/HomePage'
import { LoginPage } from './components/LoginPage'
import { SignUp } from './components/SignUp'
import { MainPage } from './components/MainPage'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
// import './App.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#6B46C1',
      dark: '#553C9A',
      light: '#9F7AEA',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#2D3748',
      secondary: '#4A5568',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h5: {
      fontWeight: 600,
    },
    subtitle1: {
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/register" element={<SignUp />}/>
        <Route path="/main" element={<MainPage />}/>
      </Routes>
    </ThemeProvider>
  )
}

export default App