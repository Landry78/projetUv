import React from 'react';
import { Container, Grid } from '@mui/material';
import Navbar from './components/Navbar'; // Importez le composant Navbar existant
import AdminMenu from './components/AdminMenu';
import SUserMenu from './components/SUserMenu';
import { FoodBankTwoTone } from '@mui/icons-material';
import Footer from './components/Footer';


const AdminPage = () => {
  return (
    <div>
      <Navbar /> {/* Utilisation du même Navbar que pour le propriétaire */}
      <Container sx={{ mt: 8 }}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <AdminMenu />
          </Grid>
          <Grid item xs={9}>
            {/* Contenu principal ici */}
          </Grid>
        </Grid>
      </Container>
      <SUserMenu />
      <Footer/>
    </div>
  );
};

export default AdminPage;
