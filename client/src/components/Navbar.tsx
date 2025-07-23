import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, useLocation } from 'react-router-dom';

const pages = [
  { title: 'Ana Sayfa', path: '/' },
  { title: 'Çalışmalarımız', path: '/Calismalarimiz' },
  { title: 'İletişim', path: '/Iletisim' },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavigate = (path: string) => {
    handleCloseNavMenu();
    navigate(path);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            src="/images/isim.png"
            alt="Logo"
            onClick={() => navigate('/')}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              cursor: 'pointer',
              height: { md: 40, lg: 45 },
              width: 'auto',
            }}
          />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ p: 1 }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiPaper-root': {
                  width: '100%',
                  maxWidth: '300px',
                  mt: 1,
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.path}
                  onClick={() => handleNavigate(page.path)}
                  selected={location.pathname === page.path}
                  sx={{
                    py: 1.5,
                    justifyContent: 'center',
                    '&.Mui-selected': {
                      backgroundColor: 'rgba(255, 213, 0, 0.1)',
                    },
                  }}
                >
                  <Typography textAlign="center" sx={{ fontWeight: 500 }}>
                    {page.title}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            component="img"
            src="/images/isim.png"
            alt="EGE GARAJ"
            onClick={() => navigate('/')}
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              cursor: 'pointer',
              height: { xs: 35, sm: 40 },
              width: 'auto',
              mx: 'auto',
            }}
          />

          <Box sx={{ 
            flexGrow: 1, 
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'flex-end',
            pr: 2,
          }}>
            {pages.map((page) => (
              <Button
                key={page.path}
                onClick={() => handleNavigate(page.path)}
                sx={{
                  mx: 1,
                  px: 2,
                  color: 'white',
                  display: 'block',
                  backgroundColor: location.pathname === page.path ? 'rgba(255, 213, 0, 0.15)' : 'transparent',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 213, 0, 0.25)',
                  },
                  fontSize: { md: '0.9rem', lg: '1rem' },
                  fontWeight: 500,
                }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar; 