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

// images
import importAll from "common/importAll.js";
const imgs = importAll(
	require.context("assets/img/index/intro", false, /.jpg/)
);

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
							{Object.keys(imgs).map((key, index) => {
								return (
									<img
										alt="..."
										src={imgs[key]}
										className={imageClasses}
									/>
								);
							})}
						</Slider>
					</GridItem>
				</GridContainer>
			</div>
		</div>
	);
}
