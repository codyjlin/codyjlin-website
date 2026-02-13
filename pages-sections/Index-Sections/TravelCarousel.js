import React from "react";
import Link from "next/link";

// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@mui/styles";
// @material-ui/icons
import LocationOn from "@mui/icons-material/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

// 1.93 ratio images
// images
import importAll from "common/importAll.js";
const imgs = importAll(
	require.context("assets/img/index/travel", false, /.jpg/)
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
				<Link href="/travel">
					<h2>
						<b className={classes.linkTitle}>Travel</b>
					</h2>
				</Link>
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
												key={key}
												src={imgs[key]}
												alt="..."
												className="slick-image"
											/>
											<Link href="/travel">
												<div className="slick-caption">
													<h3
														className={
															classes.linkTitle
														}
													>
														<LocationOn className="slick-icons" />
														{locations[key]}
													</h3>
												</div>
											</Link>
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
