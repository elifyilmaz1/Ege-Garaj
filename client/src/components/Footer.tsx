import React from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Stack,
  Link,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        minHeight: '10px',
        py: 1,
      }}
    >
      <Container>
        {/* Başlıklar yan yana ve aralarında boşluk */}
        <Stack direction="row" spacing={20} mb={1} justifyContent="center">
  <Typography variant="h6"
    sx={{ fontWeight: 'bold', color: 'black', cursor: 'default' }}
  >
    Sosyal Medya
  </Typography>
</Stack>

        {/* İçerik kısmı */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={12}
          justifyContent="center"
          alignItems="center"
        >
          {/* Sosyal medya ikonları */}
          <Stack direction="row">
            <IconButton
              component={Link}
              href="https://instagram.com/ege.garaj"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: 'black' }}
            >
              <InstagramIcon />
            </IconButton>

            <IconButton
              component={Link}
              href="https://tiktok.com/@ege.garaj"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ p: 0 }}
            >
              <img
                src="/images/tiktok.png"
                alt="Tiktok"
                style={{ width: 24, height: 24 }}
              />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
