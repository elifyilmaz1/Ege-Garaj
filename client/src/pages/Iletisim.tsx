import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Link,
  Stack,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Iletisim() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box sx={{ py: 8, minHeight: '100vh' }}>
      <Container>
        <Box ref={ref}>
          <Grid container spacing={4}>
            <Grid {...{ item: true, xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
             >
                <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
                  <Stack spacing={3}>
                    {/* Adres */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <LocationOnIcon sx={{ color: 'primary.main', mr: 2, fontSize: 30 }} />
                      <Typography variant="body1">
                        Arabacıalanı, Şehit B.SOYBİLGİÇ Sk 13A, 54100
                        <br />
                        Serdivan/Sakarya (Agora AVM Yanı)
                      </Typography>
                    </Box>

                    {/* Telefon */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <PhoneIcon sx={{ color: 'primary.main', mr: 2, fontSize: 30 }} />
                      <Link href="tel:+905454906258" underline="hover" color="inherit">
                        <Typography variant="body1">+90 (545) 490 62 58</Typography>
                      </Link>
                    </Box>

                    {/* Çalışma Saatleri */}
                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                      <AccessTimeFilledIcon sx={{ color: 'primary.main', mr: 2, fontSize: 30, mt: '4px' }} />
                      <Typography variant="body1">
                        <strong>Çalışma Saatleri</strong>
                        <br />
                        Pazartesi – Cuma: 08:30 – 19:00
                        <br />
                        Cumartesi: 09:30 – 19:00
                        <br />
                        Pazar: Kapalı
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>
              </motion.div>
            </Grid>

            {/* Sağ Alan: Harita */}
            <Grid {...{ item: true, xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
              >
                <Paper elevation={3} sx={{ height: '500px', width: '500px', overflow: 'hidden' }}>
               <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.3976149979135!2d30.382356599999994!3d40.775272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ccb33a043b49c3%3A0xb44adde31cca072d!2zRWdlIEdhcmFqIEJveWFzxLF6IEfDtsOnw7xrIE9uYXLEsW0!5e0!3m2!1str!2str!4v1752869702498!5m2!1str!2str"
                    width="100%"
                    height="100%"
                    style={{ border: 0 ,display: 'block'}}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ege Garaj Konum"
                  />
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Iletisim;
