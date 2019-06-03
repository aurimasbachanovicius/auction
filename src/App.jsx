import React, { Component } from 'react';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import PopularSearches from './components/PopularSearches/PopularSearches';

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
        <Box mt={10}>
          <Container maxWidth="lg">
            <PopularSearches
              searches={['popular search 1', 'popular search 2', 'popular search 3']}
            />
            {/* <div className="row mt-4"> */}
            {/*  <div className="col-md-9"> */}
            {/*    <ProductsBlock /> */}
            {/*  </div> */}
            {/*  <div className="col-md-3">Latest Bids | User&apos;s bids</div> */}
            {/* </div> */}
          </Container>
        </Box>
      </div>
    );
  }
}

export default App;
