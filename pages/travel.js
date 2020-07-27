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
import importAll from "common/importAll.js";
import profile from "assets/img/profiles/travel.jpg";

import banff from "assets/img/travel/covers/banff.jpg";
const banffs = importAll(
	require.context("assets/img/travel/banff", false, /.jpg/)
);
import hawaii from "assets/img/travel/covers/hawaii.jpg";
const hawaiis = importAll(
	require.context("assets/img/travel/hawaii", false, /.jpg/)
);
import bay1718 from "assets/img/travel/covers/bay1718.jpg";
const bay1718s = importAll(
	require.context("assets/img/travel/bay1718", false, /.jpg/)
);
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
import davis from "assets/img/travel/covers/davis.jpg";
const daviss = importAll(
	require.context("assets/img/travel/davis", false, /.jpg/)
);
import france from "assets/img/travel/covers/france.jpg";
const frances = importAll(
	require.context("assets/img/travel/france", false, /.jpg/)
);
import halfdome from "assets/img/travel/covers/halfdome.jpg";
const halfdomes = importAll(
	require.context("assets/img/travel/halfdome", false, /.jpg/)
);
import tahoe19 from "assets/img/travel/covers/tahoe19.jpg";
const tahoe19s = importAll(
	require.context("assets/img/travel/tahoe19", false, /.jpg/)
);
import bay19 from "assets/img/travel/covers/bay19.jpg";
const bay19s = importAll(
	require.context("assets/img/travel/bay19", false, /.jpg/)
);
import miami from "assets/img/travel/covers/miami.jpg";
const miamis = importAll(
	require.context("assets/img/travel/miami", false, /.jpg/)
);
import caribbean from "assets/img/travel/covers/caribbean.jpg";
const caribbeans = importAll(
	require.context("assets/img/travel/caribbean", false, /.jpg/)
);
import sb from "assets/img/travel/covers/sb.jpg";
const sbs = importAll(require.context("assets/img/travel/sb", false, /.jpg/));
import tahoe20 from "assets/img/travel/covers/tahoe20.jpg";
const tahoe20s = importAll(
	require.context("assets/img/travel/tahoe20", false, /.jpg/)
);
import sd from "assets/img/travel/covers/sd.jpg";
const sds = importAll(require.context("assets/img/travel/sd", false, /.jpg/));
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
						color: "info",
					}}
					{...rest}
				/>
				<Parallax
					small
					filter
					image={require("assets/img/travel_bg.jpg")}
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
									extraordinary places on this planet.
									{/* If we each do our part in protecting
									and repairing the environment, we can share
									these gifts with the generations to come. */}
								</h5>
								<br />
							</div>
							<GridContainer>
								<Travel
									name="San Diego"
									setting="San Diego, CA | 2020"
									cover={sd}
									imgs={sds}
								/>
								<Travel
									name="Lake Tahoe"
									setting="Lake Tahoe, NV | 2020"
									cover={tahoe20}
									imgs={tahoe20s}
								/>
								<Travel
									name="Santa Barbara"
									setting="Santa Barbara, CA | 2020"
									cover={sb}
									imgs={sbs}
								/>
								<Travel
									name="The Caribbean"
									setting="Honduras, Belize, Mexico | 2019"
									cover={caribbean}
									imgs={caribbeans}
								/>
								<Travel
									name="Miami"
									setting="Miami, FL | 2019"
									cover={miami}
									imgs={miamis}
								/>
								<Travel
									name="The Bay"
									setting="SF Bay, CA | 2019"
									cover={bay19}
									imgs={bay19s}
								/>
								<Travel
									name="Lake Tahoe"
									setting="Lake Tahoe, CA/NV | 2019"
									cover={tahoe19}
									imgs={tahoe19s}
								/>
								<Travel
									name="Half Dome"
									setting="Yosemite Valley, CA | 2019"
									cover={halfdome}
									imgs={halfdomes}
								/>
								<Travel
									name="France"
									setting="France | 2019"
									cover={france}
									imgs={frances}
								/>
								<Travel
									name="UC Davis"
									setting="Davis, CA | 2019"
									cover={davis}
									imgs={daviss}
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
									name="The Bay"
									setting="SF Bay, CA | 2017, 2018"
									cover={bay1718}
									imgs={bay1718s}
								/>
								<Travel
									name="Hawaii"
									setting="Kauai + O'ahu, HI | 2016"
									cover={hawaii}
									imgs={hawaiis}
								/>
								<Travel
									name="Banff National Park"
									setting="Alberta, Canada | 2014"
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
