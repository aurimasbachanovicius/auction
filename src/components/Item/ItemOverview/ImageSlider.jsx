import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class ImageSlider extends Component {
  render() {
    const settings = {
      customPaging: function(i) {
        return (
          <a href="/#">
            <img src={require(`../../../assets/items/${i + 1}.png`)} alt="Clothes placeholder" />
          </a>
        );
      },
      dots: true,
      dotsClass: 'slick-dots slick-thumb',
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={require(`../../../assets/items/1.png`)} alt="Clothes placeholder" />
          </div>
          <div>
            <img src={require(`../../../assets/items/2.png`)} alt="Clothes placeholder" />
          </div>
          <div>
            <img src={require(`../../../assets/items/3.png`)} alt="Clothes placeholder" />
          </div>
          <div>
            <img src={require(`../../../assets/items/4.png`)} alt="Clothes placeholder" />
          </div>
        </Slider>
      </div>
    );
  }
}

// const useStyles = makeStyles(theme => ({
//   root: {
//     maxWidth: 400,
//     flexGrow: 1
//   },
//   img: {
//     height: '100%',
//     width: '100%',
//     overflow: 'hidden',
//     display: 'block'
//   }
// }));

// const randomNumber = Math.floor(Math.random() * 14);

// <img
//   className={classes.img}
//   src={require(`../../../assets/items/${randomNumber}.png`)}
//   alt="Clothes placeholder"
// />
