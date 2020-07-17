import React from "react";
import Head from "next/head";

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
import Project from "components/Project/Project.js";
import profile from "assets/img/profiles/projects2.jpg";
import gendo from "assets/img/projects/gendo.jpg";
import slackbot from "assets/img/projects/slackbot.jpg";
import coursetable from "assets/img/projects/coursetable.jpg";

import styles from "assets/jss/spotlightPage.js";

const useStyles = makeStyles(styles);

export default function ProjectsPage(props) {
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
				<title>Cody Lin | Projects</title>
			</Head>
			<div>
				<Header
					color="transparent"
					rightLinks={<HeaderLinks type="projects" />}
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
					image={require("assets/img/profile-bg.jpg")}
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
												Projects
											</h2>
										</div>
									</div>
								</GridItem>
							</GridContainer>

							<div className={classes.description}>
								<p>
									Something about my passion for meaningful
									projects and hands-on experience.
								</p>
							</div>

							<Project
								title={"Generation Do!"}
								what={
									"Collabovia plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
								}
								why={
									"Collaboraia plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
								}
								picture={gendo}
								color={"gendo"}
							/>

							<Project
								title={"Social Ecology Lab SlackBot"}
								what={
									"Collaboratively admmically procrastinate B2C users after installed base benefits."
								}
								why={
									"Collaboratively administratnetworks. Dynamically procrastinate B2C users after installed base benefits."
								}
								picture={slackbot}
								color={"stanford"}
							/>
							<Project
								title={"CourseTable"}
								what={
									"Collaboratively admmically procrastinate B2C users after installed base benefits."
								}
								why={
									"Collaboratively administratnetworks. Dynamically procrastinate B2C users after installed base benefits."
								}
								picture={coursetable}
								color={"coursetable"}
							/>
							<div className={classes.space90} />
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</React.Fragment>
	);
}
