import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './ImageSlider.css';

export default class ImageSlider extends Component {
  render() {
    const settings = {
      customPaging: function(i) {
        return (
          <a href="/#">
            <img
              src={require(`assets/items/${i + 1}.png`)}
              alt="Naujas medvilninis džemperis, M dydis"
            />
          </a>
        );
      },
      dots: true,
      dotsClass: 'slick-dots slick-thumb',
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img
              src={require(`assets/items/1.png`)}
              alt="Naujas medvilninis džemperis, M dydis 1"
            />
          </div>
          <div>
            <img
              src={require(`assets/items/2.png`)}
              alt="Naujas medvilninis džemperis, M dydis 2"
            />
          </div>
          <div>
            <img
              src={require(`assets/items/3.png`)}
              alt="Naujas medvilninis džemperis, M dydis 3"
            />
          </div>
          <div>
            <img
              src={require(`assets/items/4.png`)}
              alt="Naujas medvilninis džemperis, M dydis 4"
            />
          </div>
        </Slider>
      </div>
    );
  }
}

// import React from 'react';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import MobileStepper from '@material-ui/core/MobileStepper';
// import Button from '@material-ui/core/Button';
// import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
// import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
// import SwipeableViews from 'react-swipeable-views';

// const imageSteps = [
//   {
//     label: 'Naujas medvilninis džemperis, M dydis',
//     imgPath: '1'
//   },
//   {
//     label: 'Naujas medvilninis džemperis, M dydis 1',
//     imgPath: '2'
//   },
//   {
//     label: 'Naujas medvilninis džemperis, M dydis 2',
//     imgPath: '3'
//   },
//   {
//     label: 'Naujas medvilninis džemperis, M dydis 3',
//     imgPath: '4'
//   },
//   {
//     label: 'Naujas medvilninis džemperis, M dydis 4',
//     imgPath: '5'
//   }
// ];

// const useStyles = makeStyles(theme => ({
//   root: {
//     maxWidth: 400,
//     flexGrow: 1
//   },
//   header: {
//     display: 'flex',
//     alignItems: 'center',
//     height: 50,
//     paddingLeft: theme.spacing(4),
//     backgroundColor: theme.palette.background.default
//   },
//   img: {
//     height: 'auto',
//     display: 'block',
//     maxWidth: 400,
//     overflow: 'hidden',
//     width: '100%'
//   }
// }));

// function ImageSlider() {
//   const classes = useStyles();
//   const theme = useTheme();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const maxSteps = imageSteps.length;

//   const handleNext = () => {
//     setActiveStep(prevActiveStep => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep(prevActiveStep => prevActiveStep - 1);
//   };

//   const handleStepChange = step => {
//     setActiveStep(step);
//   };

//   return (
//     <div className={classes.root}>
//       <SwipeableViews
//         axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//         index={activeStep}
//         onChangeIndex={handleStepChange}
//         enableMouseEvents
//       >
//         {imageSteps.map((step, index) => (
//           <div key={step.label}>
//             {Math.abs(activeStep - index) <= 2 ? (
//               <img
//                 className={classes.img}
//                 src={require(`assets/items/${step.imgPath}.png`)}
//                 alt={step.label}
//               />
//             ) : null}
//           </div>
//         ))}
//         <MobileStepper
//           steps={maxSteps}
//           position="static"
//           variant="text"
//           activeStep={activeStep}
//           nextButton={
//             <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
//               Next
//               {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
//             </Button>
//           }
//           backButton={
//             <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
//               {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
//               Back
//             </Button>
//           }
//         />
//       </SwipeableViews>
//       {/* <MobileStepper
//         steps={maxSteps}
//         position="static"
//         variant="text"
//         activeStep={activeStep}
//         nextButton={
//           <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
//             Next
//             {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
//           </Button>
//         }
//         backButton={
//           <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
//             {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
//             Back
//           </Button>
//         }
//       /> */}
//     </div>
//   );
// }

// export default ImageSlider;
