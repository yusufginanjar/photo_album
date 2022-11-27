import * as React from "react";
import Layout from "../component/layout";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



const Home = () => {
    const theme = useTheme();
    return (
        <>
            <Layout>
                <Container maxWidth="xl" id="margin-one">
                <Box mt={3} display="flex" justifyContent="center">
                    <Button variant="contained" endIcon={<PhotoCamera />} size="large">
                        Buat Album
                    </Button>
                </Box>
                
    <Card sx={{ display: 'flex' }}>
    <CardMedia
        component="img"
        sx={{ width: 421 }}
        image="/home1.png"
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      </Box>

    </Card>
    </Container>
			</Layout>
        </>
    );
};

export default Home;