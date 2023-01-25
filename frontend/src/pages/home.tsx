import * as React from 'react';
import Layout from '../component/layout';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Box from '@mui/material/Box';
// import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';


const Home: React.FC = () => {
  return (
    <>
      <Layout>
        <Container maxWidth='lg' id='margin-one'>
        <Box mt={5} display='flex' justifyContent='center'>
          <Button variant='contained' endIcon={<PhotoCamera />} size='large'>
            Buat Album
          </Button>
        </Box>
    {
      albums.map((album) => (
        <Card sx={{ display: 'flex', mt: 4, border: 1, borderColor: 'grey.200' }} key={`album${album.id}`}>
        <Grid container spacing={3}>
        <Grid item xs={6}>
        <CardMedia
            component='img'
            sx={{  p: 2 }}
            image='/home1.png'
            alt='Live from space album cover'
          />
        </Grid>
        <Grid item xs={3}>
        <Box>
            <Box sx={{ display: 'flex', alignItems: 'center',pl: 1, pb: 1 }}>
              <Box sx={{ pl: 1 }}>
                <Typography variant='h4' component='div' sx={{ color: 'primary'}}>
                  {album.title}
                </Typography>
                <Typography variant='body1' component='div' sx={{ color: 'grey'}}>
                86 Foto 
                </Typography>
                <Typography variant='body2' component='div'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </Box>
            </Box>
            <CardMedia
              component='img'
              sx={{ p: 2 }}
              image='/home1.png'
              alt='Live from space album cover'
          />
             </Box>
        </Grid>
        <Grid item xs={3}>
          <Grid container>
            <Grid item xs={12 }>
            <Grid container spacing={1}>
              {data.map((item) => (
                <Grid item xs={6} key={item.id}>
                  <CardMedia
                    component='img'
                    sx={{ p: 2 }}
                    image={item.src}
                    alt={item.alt}
                  />
                </Grid>   
              ))}
            </Grid>
            </Grid>
            <Grid item xs={12 } justifyContent="flex-end">
              <Box mt={3} pr={2} display='flex' justifyContent="flex-end">
                <Link href="#" underline="always">
                <span>Lihat Lebih Banyak</span>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </Card>
      ))
    }


        </Container>
      </Layout>
    </>
  );
};

export default Home;

const albums = [
  {
    'id': 1,
    'title': 'Pernikahanku'
  },
  {
    'id': 2,
    'title': 'Pernikahanku'
  },
  {
    'id': 3,
    'title': 'Pernikahanku'
  },
]


const data = [
  {
    'id': 1,
    'component': 'img',
    'src': '/home1.png',
    'alt': 'Live from space album cover',
  },
  {
    'id': 2,
    'component': 'img',
    'src': '/home1.png',
    'alt': 'Live from space album cover',
  },
  {
    'id': 3,
    'component': 'img',
    'src': '/home1.png',
    'alt': 'Live from space album cover',
  },
  {
    'id': 4,
    'component': 'img',
    'src': '/home1.png',
    'alt': 'Live from space album cover',
  },
  {
    'id': 5,
    'component': 'img',
    'src': '/home1.png',
    'alt': 'Live from space album cover',
  },
  {
    'id': 6,
    'component': 'img',
    'src': '/home1.png',
    'alt': 'Live from space album cover',
  },
];