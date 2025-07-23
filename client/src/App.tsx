import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Calismalarimiz from './pages/Calismalarimiz';
import Iletisim from './pages/Iletisim';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFD700', // Altın sarısı
      dark: '#DAA520', // Koyu sarı
      light: '#FFE44D', // Açık sarı
    },
    secondary: {
      main: '#383838', // Antrasit
      dark: '#282828',
      light: '#484848',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
    text: {
      primary: '#383838', // Antrasit
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      marginBottom: '2rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: '#FFD700',
          color: '#383838',
          '&:hover': {
            backgroundColor: '#DAA520',
          },
        },
        outlined: {
          borderColor: '#FFD700',
          color: '#FFD700',
          '&:hover': {
            borderColor: '#DAA520',
            color: '#DAA520',
            backgroundColor: 'rgba(255, 215, 0, 0.04)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#383838',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          '&:hover': {
            boxShadow: '0 8px 24px rgba(255, 215, 0, 0.15)',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'rgba(255, 215, 0, 0.04)',
          },
        },
      },
    },
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <main style={{ paddingTop: '64px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Calismalarimiz" element={<Calismalarimiz />} />
            <Route path="/Iletisim" element={<Iletisim />} />
          </Routes>
        </main>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App; 