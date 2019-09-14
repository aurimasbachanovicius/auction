import React from 'react';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import './index.css';
import ProductBlock from '../Products/ProductBlock';
import PopularSearches from '../PopularSearches';

const App = () => {
  return (
    <React.Fragment>
      <Toolbar />
      <div style={{ height: '100%' }}>
        <Container maxWidth="lg">
          <main style={{ marginTop: 90 }}>
            <PopularSearches
              searches={['popular search 1', 'popular search 2', 'popular search 3']}
            />
            <Grid container spacing={4}>
              <Grid item md={9}>
                <ProductBlock />
              </Grid>
              <Grid item md={3}>
                Latest Bids | User&apos;s bids
              </Grid>
            </Grid>
          </main>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default App;
