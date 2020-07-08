import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import MultiCarousel from "components/CustomCarousel/MultiCarousel.js";

import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function IntroCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem
            xs={12}
            sm={12}
            md={10}
            lg={10}
            className={classes.marginAuto}
          >
            <MultiCarousel />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
