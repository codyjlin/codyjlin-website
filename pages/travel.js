import React from "react";
import Head from "next/head";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import Travel from "pages-sections/Travel-Sections/Travel.js";

// assets/imgs
import importAll from "public/importAll.js";
import profile from "assets/img/profiles/travel.jpg";

import banff from "assets/img/travel/covers/banff.jpg";
const banffs = importAll(
	require.context("assets/img/travel/banff", false, /.jpg/)
);
import hawaii from "assets/img/travel/covers/hawaii.jpg";
const hawaiis = importAll(
	require.context("assets/img/travel/hawaii", false, /.jpg/)
);
import sf from "assets/img/travel/covers/sf.jpg";
const sfs = importAll(require.context("assets/img/travel/sf", false, /.jpg/));
import indianpond from "assets/img/travel/covers/indianpond.jpg";
const indianponds = importAll(
	require.context("assets/img/travel/indianpond", false, /.jpg/)
);
import acadia from "assets/img/travel/covers/acadia.jpg";
const acadias = importAll(
	require.context("assets/img/travel/acadia", false, /.jpg/)
);
import newport from "assets/img/travel/covers/newport.jpg";
const newports = importAll(
	require.context("assets/img/travel/newport", false, /.jpg/)
);
import pismo from "assets/img/travel/covers/pismo.jpg";
const pismos = importAll(
	require.context("assets/img/travel/pismo", false, /.jpg/)
);
import joshua from "assets/img/travel/covers/joshua.jpg";
const joshuas = importAll(
	require.context("assets/img/travel/joshua", false, /.jpg/)
);

import styles from "assets/jss/spotlightPage.js";

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="down" ref={ref} {...props} />;
});

// TODO: map of all of the places
// TODO: link map location of all places

export default function TravelPage(props) {
	const classes = useStyles();
	const { ...rest } = props;
	const imageClasses = classNames(
		classes.imgRaised,
		classes.imgRoundedCircle,
		classes.imgFluid
	);
	const navImageClassesRounded = classNames(
		classes.imgRounded,
		classes.imgFluid
	);
	return (
		<React.Fragment>
			<Head>
				<title>Cody Lin | Travel</title>
			</Head>
			<div>
				<Header
					color="transparent"
					brand="NextJS Material Kit"
					rightLinks={<HeaderLinks type="travel" />}
					fixed
					changeColorOnScroll={{
						height: 200,
						color: "white",
					}}
					{...rest}
				/>
				<Parallax
					small
					filter
					image={require("assets/img/travel/bg.jpg")}
				/>
				<div className={classNames(classes.main, classes.mainRaised)}>
					<div>
						<div className={classes.container}>
							<GridContainer justify="center">
								<GridItem xs={12} sm={12} md={6}>
									<div className={classes.profile}>
										<div>
											<img
												src={profile}
												alt="..."
												className={imageClasses}
											/>
										</div>
										<div className={classes.name}>
											<h2 className={classes.title}>
												Travel
											</h2>
										</div>
									</div>
								</GridItem>
							</GridContainer>
							<div className={classes.description}>
								<h5>
									Family vacations, tennis tournaments,
									sibling adventures, and simply a love for
									seeing the world have brought me to
									extraordinary places on this big, blue
									marble.
									{/* If we each do our part in protecting
									and repairing the environment, we can share
									these gifts with the generations to come. */}
								</h5>
								<br />
							</div>
							<GridContainer>
								<Travel
									name="The Bay"
									setting="San Francisco, CA | 2017-2019"
									cover={sf}
									imgs={sfs}
								/>
								<Travel
									name="Joshua Tree Nat. Park"
									setting="Twentynine Palms, CA | 2018"
									cover={joshua}
									imgs={joshuas}
								/>
								<Travel
									name="Pismo Beach"
									setting="Pismo Beach, CA | 2018"
									cover={pismo}
									imgs={pismos}
								/>
								<Travel
									name="Newport"
									setting="Newport, RI | 2018"
									cover={newport}
									imgs={newports}
								/>
								<Travel
									name="Indian Pond"
									setting="St. Albans, ME | 2018"
									cover={indianpond}
									imgs={indianponds}
								/>
								<Travel
									name="Acadia National Park"
									setting="Bar Harbor, ME | 2018"
									cover={acadia}
									imgs={acadias}
								/>
								<Travel
									name="Hawaii"
									setting="Kauai, HI | 2016"
									cover={hawaii}
									imgs={hawaiis}
								/>
								<Travel
									name="Banff National Park"
									setting="Alberta, Canada | 2008"
									cover={banff}
									imgs={banffs}
								/>
							</GridContainer>

							<div className={classes.space50} />
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</React.Fragment>
	);
}
