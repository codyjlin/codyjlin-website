import React, { Component } from "react";
import Head from "next/head";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { withStyles } from "@material-ui/styles";

// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";

// sections for this page
import IntroCarousel from "pages-sections/Index-Sections/IntroCarousel.js";
import TravelCarousel from "pages-sections/Index-Sections/TravelCarousel.js";
import Projects from "pages-sections/Index-Sections/Projects.js";

import styles from "assets/jss/index.js";

class Index extends Component {
	render() {
		const { classes } = this.props;
		return (
			<React.Fragment>
				<Head>
					<title>Cody Lin</title>
				</Head>
				<div>
					<Header
						rightLinks={<HeaderLinks />}
						fixed
						color="transparent"
						changeColorOnScroll={{
							height: 200,
							color: "info",
						}}
					/>
					<Parallax image={require("assets/img/bg2.jpg")}>
						<div className={classes.container}>
							<GridContainer>
								<GridItem>
									<div className={classes.brand}>
										<h1 className={classes.title}>Hi, I'm Cody.</h1>
										<h3 className={classes.subtitle}>
											Short intro description here.
										</h3>
									</div>
								</GridItem>
							</GridContainer>
						</div>
					</Parallax>

					<div className={classNames(classes.main, classes.mainRaised)}>
						<IntroCarousel />
						<Projects />
						<TravelCarousel />
						{/* Projects: gendo, FB hackathon, coursetable, tennis4ms */}
						{/* Travel: china, yellowstone, DC, alaska, banff, mexico, CO, hawaii, france, SF, 
                      yosemite, tahoe*/}
						{/* Cooking(?): dumplings, bao zi, tang yuan, stromboli, pizza, gnocchi, perrogies(?) */}
						<div className={classes.space80} />
					</div>
					<Footer />
				</div>
			</React.Fragment>
		);
	}
}

export default withStyles(styles)(Index);
