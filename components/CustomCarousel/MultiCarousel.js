import React, { Component } from "react";
import Slider from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// nodejs library that concatenates classes
import classNames from "classnames";

import img1 from "assets/img/intro/joshuatree.jpg";
import img2 from "assets/img/intro/joshuatree.jpg";
import img3 from "assets/img/intro/joshuatree.jpg";
import img4 from "assets/img/intro/joshuatree.jpg";
import img5 from "assets/img/intro/joshuatree.jpg";
import img6 from "assets/img/intro/joshuatree.jpg";

import styles from "assets/jss/multiCarouselStyle.js";

const useStyles = makeStyles(styles);

// TODO: Add spaces using https://www.npmjs.com/package/react-multi-carousel

export default function MultiCarousel() {
  const classes = useStyles();
  const imageClasses = classNames(classes.imgGallery, classes.imgRounded);
  const imgs = [img1, img2, img3, img4, img5, img6];
  var settings = {
    autoplay: true,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <div>
      <Slider {...settings}>
        {imgs.map((value) => {
          return (
            <div>
              <img src={value} className={imageClasses} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
