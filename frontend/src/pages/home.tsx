import * as React from "react";
import Layout from "../component/layout";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Box from '@mui/material/Box';



const Home = () => {
    return (
        <>
            <Layout>
                <Container maxWidth="xl" id="margin-one">
                <Box mt={3} display="flex" justifyContent="center">
                    <Button variant="contained" endIcon={<PhotoCamera />} size="large">
                        Buat Album
                    </Button>
                </Box>
                </Container>
			</Layout>
        </>
    );
};

export default Home;