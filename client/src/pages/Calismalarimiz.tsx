import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Modal,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const works = [
  {
    images: [
      { src: 'images/work1.png', description: 'Çelik Rötuş Uygulamamız Öncesi-Sonrası'},
      { src: 'images/bgd2.jpg', description: 'Çamurluk göçük düzeltme öncesi-sonrası' },
      { src: 'images/bgd3.jpg', description: 'Tavan göçük düzeltme öncesi-sonrası' },
      { src: 'images/bgd4.jpg', description: 'Bagaj kapağı göçük düzeltme öncesi-sonrası' },
    ],
  },


];


function Calismalarimiz() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; description: string } | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <Box
      sx={{
        py: { xs: 2, sm: 4, md: 6 },
        minHeight: '100vh',
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="md" sx={{ px: { xs: 1, sm: 2, md: 3 } }}>
        <Box ref={ref}>
          {works.map((category, categoryIndex) => (
            <Box key={categoryIndex} sx={{ mb: { xs: 2, sm: 3, md: 4 } }}>
              <Grid container spacing={{ xs: 1, sm: 1.5, md: 2 }}>
                {category.images.map((image, imageIndex) => (
                  <Grid key={imageIndex} {...{ item: true, xs: 6, sm: 4, md: 4 }}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: imageIndex * 0.1 }}
                    >
                      <Card
                        sx={{
                          cursor: 'pointer',
                          transition: 'all 0.3s ease-in-out',
                          '&:hover': {
                            transform: 'scale(1.02)',
                            boxShadow: theme.shadows[8],
                          },
                          height: '100%',
                        }}
                        onClick={() => setSelectedImage(image)}
                      >
                        <CardMedia
                          component="img"
                          height={isMobile ? '120px' : isTablet ? '150px' : '180px'}
                          image={'images/work1.png'}
                          alt={image.description}
                          sx={{
                            objectFit: 'contain',
                            p: { xs: 0.5, sm: 1 },
                          }}
                        />
                        <CardContent sx={{ py: { xs: 0.5, sm: 1 }, px: { xs: 1, sm: 1.5 } }}>
                          <Typography
                            variant="body2"
                            align="center"
                            sx={{
                              fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' },
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                              fontWeight: 'bold',
                              color: 'black',
                              lineHeight: 1.2,
                            }}
                          >
                            {image.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </Box>

        <Modal
          open={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: { xs: 1, sm: 2 },
          }}
        >
          <Box
            sx={{
              position: 'relative',
              maxWidth: '95vw',
              maxHeight: '95vh',
              bgcolor: 'background.paper',
              borderRadius: 1,
              overflow: 'hidden',
              p: { xs: 0.5, sm: 1 },
            }}
          >
            <IconButton
              onClick={() => setSelectedImage(null)}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                bgcolor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                zIndex: 1,
                '&:hover': {
                  bgcolor: 'rgba(0, 0, 0, 0.7)',
                },
              }}
            >
              <CloseIcon />
            </IconButton>
          
            {selectedImage && (
              <>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.description}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '80vh',
                    display: 'block',
                    margin: '0 auto',
                  }}
                />
                <Typography
                  variant="body1"
                  align="center"
                  sx={{
                    mt: 2,
                    px: 2,
                    color: 'text.primary',
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    fontWeight: 'bold',
                  }}
                >
                  {selectedImage.description}
                </Typography>
              </>
            )}
          </Box>
        </Modal>
      </Container>
    </Box>
  );
}

export default Calismalarimiz;
