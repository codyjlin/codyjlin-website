import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Responsive from "components/CustomCarousel/Responsive.js";

import styles from "assets/jss/responsiveStyle.js";
import { Grid } from "@material-ui/core";

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
				{/* <h1>Travel</h1>
				<h4> Maybe write something here?, ...</h4> */}
				<GridContainer>
					<GridItem
						xs={12}
						sm={12}
						md={12}
						lg={12}
						className={classes.marginAuto}
					>
						<Responsive />
					</GridItem>
				</GridContainer>
			</div>
		</div>
	);
}
