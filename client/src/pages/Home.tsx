import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/images/dukkan.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        pt: 8,
      }}
    >
      <Container>
        <Typography
          variant="h1"
          component="h1"
          sx={{
            mb: 4,
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            fontSize: { xs: '2.5rem', sm: '2.5rem', md: '2.5rem' },
            color: 'rgba(255, 213, 0, 0.85)',
            borderBottom: '2px solid rgba(255, 213, 0, 0.85)',
            pb: 1,                         
            width: 'fit-content',
          }}
        >
           Hoşgeldiniz!
        </Typography>
        <Typography
          variant="h5"
          sx={{
            mb: 6,
            maxWidth: 800,
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
          }}
        >
          Sakarya'nın profesyonel boyasız göçük düzeltme, pasta cila ve detaylı araç bakım merkezi. 
          Aracınızın değerini ve görünümünü en üst seviyede tutmak için profesyonel çözümler sunuyoruz.
        </Typography>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
        >
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/Iletisim')}
          >
            Hemen İletişime Geçin
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={() => navigate('/Calismalarimiz')}
            sx={{ color: 'white', borderColor: 'white' }}
          >
            Çalışmalarımızı İnceleyin
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default Home; 