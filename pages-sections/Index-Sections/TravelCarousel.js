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
// assets/imgs
import importAll from "common/importAll.js";
const imgs = importAll(
	require.context("../../pages/images/index/travel", false, /.jpg/)
);

var locations = {
	"acadia.jpg": "Acadia National Park, ME",
	"tahoe20.jpg": "Lake Tahoe, NV",
	"banff2.jpg": "Banff National Park, CAN",
	"bay19.jpg": "The Bay, CA",
	"pismo.jpg": "Pismo Beach, CA",
	"caribbean.jpg": "The Caribbean Sea",
	"sd.jpg": "San Diego, CA",
	"banff.jpg": "Banff National Park, CAN",
	"hawaii.jpg": "Kauai, HI",
	"indianpond.jpg": "Indian Pond, ME",
	"joshua.jpg": "Joshua Tree National Park, CA",
	"tahoe19.jpg": "Lake Tahoe, CA",
};

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
		responsive: [
			{
				breakpoint: 768,
				settings: {
					dots: false,
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
				<hr />
				<h2>
					<b>Travel</b>
				</h2>
				<GridContainer>
					<GridItem
						xs={12}
						sm={12}
						md={12}
						className={classes.marginAuto}
					>
						<Card carousel>
							{/* TODO: Separate rerouting by view */}
							<Carousel {...settings}>
								{Object.keys(locations).map((key, index) => {
									return (
										<div>
											<img
												src={imgs[key]}
												alt="..."
												className="slick-image"
											/>
											<div className="slick-caption">
												<h3>
													<LocationOn className="slick-icons" />
													{locations[key]}
												</h3>
											</div>
										</div>
									);
								})}
							</Carousel>
						</Card>
					</GridItem>
				</GridContainer>
			</div>
		</div>
	);
}
