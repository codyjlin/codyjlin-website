import React, { Component } from "react";
import Slider from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// nodejs library that concatenates classes
import classNames from "classnames";

import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";

import styles from "assets/jss/responsiveStyle.js";

const useStyles = makeStyles(styles);

export default function Responsive() {
	const classes = useStyles();
	const imageClasses = classNames(classes.imgGallery, classes.imgRounded);

	var settings = {
		autoplay: true,
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 1100,
				settings: "unslick",
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 768,
				settings: "unslick",
			},
		],
	};
	return (
		<div>
			<Slider {...settings}>
				<div>
					<img src={image1} alt="First slide" className={imageClasses} />
				</div>
				<div>
					<img src={image2} alt="Second slide" className={imageClasses} />
				</div>
				<div>
					<img src={image3} alt="Third slide" className={imageClasses} />
				</div>
			</Slider>
		</div>
	);
}
