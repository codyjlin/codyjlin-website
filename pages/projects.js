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
import Project from "pages-sections/Project-Sections/Project.js";

// assets/imgs
import profile from "assets/img/profiles/projects2.jpg";
import gendo from "assets/img/projects/gendo.png";
import slack from "assets/img/projects/slackbot_slack.png";
import stanford from "assets/img/projects/slackbot_stanford.png";
import sel from "assets/img/projects/slackbot_sel.png";
import ct from "assets/img/projects/coursetable_ct.png";
import yale from "assets/img/projects/coursetable_yale.png";
import messenger from "assets/img/projects/fb_hackathon_messenger.png";
import devpost from "assets/img/projects/fb_hackathon_devpost_icon.png";
import blm from "assets/img/projects/fb_hackathon_blm.png";
import ibm from "assets/img/projects/ibm_hackathon_logo.png";
import callforcode from "assets/img/projects/ibm_hackathon_call_for_code.png";

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
								imgs={[[gendo, "https://gendoit.org"]]}
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
								imgs={[
									[slack, ""],
									[stanford, ""],
									[
										sel,
										"https://nmardoin.people.stanford.edu/",
									],
								]}
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
								imgs={[
									[
										ct,
										"https://github.com/coursetable/coursetable",
									],
									[yale, ""],
								]}
								color={"coursetable"}
							/>
							<Project
								title={"FB Messenger Hackathon"}
								what={
									"Collaboratively admmically procrastinate B2C users after installed base benefits."
								}
								why={
									"Collaboratively administratnetworks. Dynamically procrastinate B2C users after installed base benefits."
								}
								imgs={[
									[messenger, "https://m.me/BLMtest"],
									[
										blm,
										"https://devpost.com/software/spreading-the-movement",
									],
									[
										devpost,
										"https://devpost.com/software/spreading-the-movement",
									],
								]}
								color={"fb"}
							/>
							<Project
								title={"IBM Call for Code Hackathon"}
								what={
									"Collaboratively admmically procrastinate B2C users after installed base benefits."
								}
								why={
									"Collaboratively administratnetworks. Dynamically procrastinate B2C users after installed base benefits."
								}
								imgs={[
									[
										callforcode,
										"https://developer.ibm.com/callforcode/",
									],
									[ibm, ""],
								]}
								color={"ibm"}
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
