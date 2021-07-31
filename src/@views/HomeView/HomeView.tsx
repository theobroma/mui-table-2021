import React from 'react';
import { Box, Container, Grid } from '@material-ui/core';
// import PersistentDrawerLeft from '../../@components/AppBar';
import Footer from '../../@components/Footer';
import CustomAppBar from '../../@components/AppBar';

const HomeView: React.FC = () => {
  return (
    <div className="HolyGrail">
      <Box mb={2}>
        <CustomAppBar />
        {/* <PersistentDrawerLeft /> */}
      </Box>
      <div className="HolyGrail-content">
        <Container maxWidth="lg">
          {/* <Grid container spacing={3} style={{ padding: 3 }}>
            {trendingAllmovies?.map((movie) => (
              <Grid item xs={12} sm={4} md={3} lg={2} key={nanoid()}>
                {isLoading ? (
                  <SingleContentSkeleton />
                ) : (
                  <SingleContent movie={movie} />
                )}
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={3} style={{ padding: 3 }}>
            <Grid item xs={12}>
              <CustomPagination
                onChange={handlePageChange}
                count={total_pages}
                page={page}
              />
            </Grid>
          </Grid> */}
          container
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default HomeView;
