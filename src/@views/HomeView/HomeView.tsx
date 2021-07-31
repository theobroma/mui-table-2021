import React from 'react';
import { Box, Container, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Footer from '../../@components/Footer';
import CustomAppBar from '../../@components/AppBar';
import TableFC from '../../@components/Table';
import { clientsSelector } from '../../@store/clients/selectors';

const HomeView: React.FC = () => {
  const clientsData = useSelector(clientsSelector).data;
  return (
    <div className="HolyGrail">
      <Box mb={2}>
        <CustomAppBar />
      </Box>
      <div className="HolyGrail-content">
        <Container maxWidth="lg">
          <Grid container spacing={3} style={{ padding: 3 }}>
            <Grid item xs={12}>
              <TableFC data={clientsData} />
            </Grid>
          </Grid>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default HomeView;
