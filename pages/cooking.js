import React from "react";
import Head from "next/head";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Tooltip from "@material-ui/core/Tooltip";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

// assets/img
import profile from "assets/img/profiles/cooking.jpg";
import importAll from "public/importAll.js";
const images = importAll(require.context("assets/img/food", false, /.jpg/));

import styles from "assets/jss/spotlightPage.js";

const useStyles = makeStyles(styles);

export default function CookingPage(props) {
	const classes = useStyles();
	const { ...rest } = props;
	const imageClasses = classNames(
		classes.imgRaised,
		classes.imgRoundedCircle,
		classes.imgFluid
	);
	const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
	var col1 = {},
		col2 = {},
		col3 = {},
		i = 0;
	for (const [key, value] of Object.entries(images)) {
		switch (i % 3) {
			case 0:
				col1[key] = value;
				break;
			case 1:
				col2[key] = value;
				break;
			default:
				col3[key] = value;
		}
		i++;
	}
	console.log(col1, col2, col3);
	return (
		<React.Fragment>
			<Head>
				<title>Cody Lin | Cooking</title>
			</Head>
			<div>
				<Header
					color="transparent"
					page="Cooking"
					rightLinks={<HeaderLinks type="cooking" />}
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
					image={require("assets/img/cooking_bg.jpg")}
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
												Cooking
											</h2>
										</div>
									</div>
								</GridItem>
							</GridContainer>
							<div className={classes.description}>
								<h5>
									My love for food is fittingly paired with my
									love for cooking. This is a collection of
									delicious homemade foods that I've had the
									pleasure of cooking and/or eating.
								</h5>
								<br />
							</div>

							<GridContainer justify="center">
								<GridItem xs={12} sm={12} md={4}>
									{Object.keys(col1).map((key, index) => {
										return (
											// <Tooltip // TOOLTIP for each pic?
											// 	id="tooltip-left"
											// 	title="Tooltip on bottom"
											// 	placement="bottom"
											// 	classes={{
											// 		tooltip: classes.tooltip,
											// 	}}
											// >
											// 	<img
											// 		alt="..."
											// 		src={col1[key]}
											// 		className={navImageClasses}
											// 	/>
											// </Tooltip>

											<img
												alt="..."
												src={col1[key]}
												className={navImageClasses}
											/>
										);
									})}
								</GridItem>
								<GridItem xs={12} sm={12} md={4}>
									{Object.keys(col2).map((key, index) => {
										return (
											<img
												alt="..."
												src={col2[key]}
												className={navImageClasses}
											/>
										);
									})}
								</GridItem>
								<GridItem xs={12} sm={12} md={4}>
									{Object.keys(col3).map((key, index) => {
										return (
											<img
												alt="..."
												src={col3[key]}
												className={navImageClasses}
											/>
										);
									})}
								</GridItem>
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
