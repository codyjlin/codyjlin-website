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

// 1.93 ratio images
import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";

import styles from "assets/jss/Index-Sections/TravelCarousel.js";

const useStyles = makeStyles(styles);

export default function TravelCarousel() {
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
				<h2>
					<b>Travel</b>
				</h2>
				<h4> Maybe write something here?, ...</h4>
				<GridContainer>
					<GridItem
						xs={12}
						sm={12}
						md={12}
						className={classes.marginAuto}
					>
						<Card carousel>
							<a target="_blank" href="/travel">
								{/* TODO: Separate rerouting by view */}
								<Carousel {...settings}>
									<div>
										<img
											src={image1}
											alt="First slide"
											className="slick-image"
										/>
										<div className="slick-caption">
											<h3>
												<LocationOn className="slick-icons" />
												Yellowstone National Park,
												United States
											</h3>
										</div>
									</div>
									<div>
										<img
											src={image2}
											alt="Second slide"
											className="slick-image"
										/>
										<div className="slick-caption">
											<h4>
												<LocationOn className="slick-icons" />
												Somewhere Beyond, United States
											</h4>
										</div>
									</div>
									<div>
										<img
											src={image3}
											alt="Third slide"
											className="slick-image"
										/>
										<div className="slick-caption">
											<h4>
												<LocationOn className="slick-icons" />
												Yellowstone National Park,
												United States
											</h4>
										</div>
									</div>
								</Carousel>
							</a>
						</Card>
					</GridItem>
				</GridContainer>
			</div>
		</div>
	);
}
