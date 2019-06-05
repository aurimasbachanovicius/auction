import React, { Component } from 'react';

import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import PopularSearches from './components/PopularSearches/PopularSearches';
import ProductsBlock from './components/Products/ProductsBlock';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => ({ sideDrawerOpen: !prevState.sideDrawerOpen }));
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    const { sideDrawerOpen } = this.state;

    if (sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div style={{ height: '100%' }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={sideDrawerOpen} />
        {backdrop}
        <Container maxWidth="lg">
          <main style={{ marginTop: 90 }}>
            <PopularSearches
              searches={['popular search 1', 'popular search 2', 'popular search 3']}
            />
            <Box mt={3}>
              <Grid container>
                <Grid item md={9}>
                  <ProductsBlock />
                </Grid>
                <Grid item md={3}>
                  Latest Bids | User&apos;s bids
                </Grid>
              </Grid>
            </Box>
          </main>
          {/* <div className="row mt-4"> */}
          {/*  <div className="col-md-9"> */}
          {/*    <ProductsBlock /> */}
          {/*  </div> */}
          {/*  <div className="col-md-3">Latest Bids | User&apos;s bids</div> */}
          {/* </div> */}
        </Container>
      </div>
    );
  }
}

export default App;
