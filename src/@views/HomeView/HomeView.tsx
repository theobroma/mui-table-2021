import { Box, Container, Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomAppBar from '../../@components/AppBar';
import Footer from '../../@components/Footer';
import TableFC from '../../@components/Table';
import { filteredClientsSelector } from '../../@store/clients/selectors';
import { fetchUsersTC } from '../../@store/clients/slice';

const HomeView: React.FC = () => {
  const dispatch = useDispatch();
  const clientsData = useSelector(filteredClientsSelector);

  useEffect(() => {
    dispatch(fetchUsersTC());
  }, [dispatch]);

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
