import React from "react";
import Head from "next/head";

import { readJsonSync } from "fs-extra";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import Travel from "pages-sections/Travel-Sections/Travel.js";

// images
import profile from "assets/img/profiles/travel.jpg";

import styles from "assets/jss/spotlightPage.js";

const useStyles = makeStyles(styles);

// TODO: map of all of the places
// TODO: link map location of all places

export const getStaticProps = async ({ params }) => {
	const data = readJsonSync("assets/data/travel.json");
	return {
		props: {
			data: data,
		},
	};
};

export default function TravelPage(props) {
	const classes = useStyles();
	const { data, ...rest } = props;
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
								{data.map((item) => {
									return (
										<Travel
											name={item.name}
											setting={item.setting}
											cover={require(`assets/img/travel/covers/${item.id}.jpg`)}
											loc={item.id}
										/>
									);
								})}
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
