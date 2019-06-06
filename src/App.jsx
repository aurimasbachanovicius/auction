import React, { Component } from 'react';

import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
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
            <Grid container spacing={4}>
              <Grid item md={9}>
                <ProductsBlock />
              </Grid>
              <Grid item md={3}>
                Latest Bids | User&apos;s bids
              </Grid>
            </Grid>
          </main>
        </Container>
      </div>
    );
  }
}

export default App;
