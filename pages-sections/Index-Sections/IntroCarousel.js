import React from "react";
import Slider from "react-slick";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// nodejs library that concatenates classes
import classNames from "classnames";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/Index-Sections/IntroCarousel.js";

// 4x3 images
import im1 from "assets/img/food/1.jpg";
import im2 from "assets/img/food/2.jpg";
import im3 from "assets/img/food/3.jpg";
import im4 from "assets/img/food/4.jpg";
import im5 from "assets/img/food/5.jpg";

const useStyles = makeStyles(styles);

export default function IntroCarousel() {
	const classes = useStyles();
	const imageClasses = classNames(classes.imgRounded, classes.imgFluid);
	var settings = {
		autoplay: true,
		// dots: true,
		arrows: false,
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
		<div className={classes.section}>
			<div className={classes.container}>
				<GridContainer>
					<GridItem
						xs={12}
						sm={12}
						md={12}
						lg={12}
						className={classes.marginAuto}
					>
						<Slider {...settings}>
							<img
								src={im1}
								alt="First slide"
								className={imageClasses}
							/>
							<img
								src={im1}
								alt="First slide"
								className={imageClasses}
							/>
							<img
								src={im2}
								alt="First slide"
								className={imageClasses}
							/>
							<img
								src={im3}
								alt="Third slide"
								className={imageClasses}
							/>
						</Slider>
					</GridItem>
				</GridContainer>
			</div>
		</div>
	);
}
