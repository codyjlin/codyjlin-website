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

// images
import profile from "assets/img/profiles/projects2.jpg";
import gendo from "assets/img/projects/gendo.png";
import slack from "assets/img/projects/slackbot_slack.png";
import stanford from "assets/img/projects/slackbot_stanford.png";
import sel from "assets/img/projects/slackbot_sel.png";
import ct from "assets/img/projects/coursetable_ct.png";
import y from "assets/img/projects/y_logo.png";
import messenger from "assets/img/projects/fb_hackathon_messenger.png";
import devpost from "assets/img/projects/fb_hackathon_devpost_icon.png";
import blm from "assets/img/projects/fb_hackathon_blm.png";
import bee from "assets/img/projects/bee.png";
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
					image={require("assets/img/projects_bg.jpg")}
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
								<h5>
									Working on meaningful projects has been
									extremely fulfilling - I've enjoyed
									exploring new applications of technology,
									gaining hands-on experience, and
									collaborating with friends, classmates, and
									colleagues.
								</h5>
								<br />
							</div>
							<Project
								title={"Generation Do!"}
								what={
									"A nonprofit initiative to connect students with interesting, meaningful projects at organizations solving real-world problems."
								}
								why={
									"With fewer opportunities to build professional non-academic skills as a result of the current pandemic, students are in need of internships more than ever. We match them with a collection of hand-picked partners."
								}
								imgs={[
									[
										gendo,
										"https://gendoit.org",
										"The GenDo website",
									],
								]}
								color={"gendo"}
							/>
							<Project
								title={"CourseTable"}
								what={
									"The most popular course search tool at Yale."
								}
								why={
									"Ever since its launch in 2011, CourseTable has been a staple for Yalies browsing and choosing classes. In Fall 2019, Yale Computer Society took over maintenance and development from CourseTable's creators, and our team continues to address feedback, bug reports, and feature requests."
								}
								imgs={[
									[
										ct,
										"https://github.com/coursetable/coursetable",
										"The CourseTable repo.",
									],
									[y, ""],
								]}
								color={"coursetable"}
							/>
							<Project
								title={"Social Ecology Lab Slack Bot"}
								what={
									"A Slack bot to collect status reports from lab students, provide encouragement, and spur friendly competition."
								}
								why={
									"Instead of manually checking in with students and keeping them engaged with their work, the instructor can rely on the Slack Bot to automate these tasks and instead focus on outstanding blockers and individuals."
								}
								imgs={[
									[
										slack,
										"https://slack.com/help/articles/115005265703-Create-a-bot-for-your-workspace#:~:text=for%20your%20workspace-,Create%20a%20bot%20for%20your%20workspace,a%20bot%20for%20your%20workspace",
										"What is a Slack Bot?",
									],
									[stanford, ""],
									[
										sel,
										"https://nmardoin.people.stanford.edu/",
										"The Social Ecology Lab",
									],
								]}
								color={"stanford"}
							/>
							<Project
								title={"EnvYou"}
								what={
									"A social media platform to incentivize people to reduce their carbon footprint."
								}
								why={
									"A randomly selected group of fellow interns and I built an MVP for a platform that would help people be more aware of their carbon footprint and actively reduce it. Our submission was voted 1st place in the 2020 IBM North America Summer Intern Hackathon under the Climate Change theme."
								}
								imgs={[
									[
										callforcode,
										"https://developer.ibm.com/callforcode/",
										"The public challenge",
									],
									[bee, ""],
								]}
								color={"ibm"}
							/>
							<Project
								title={"Spreading the Movement"}
								what={
									"A Messenger Bot that guides Facebook users to ways they can help support a movement, whether it be financially, socially, or physically."
								}
								why={
									"A couple classmates and I devoted a few weekends to build a meaningful Messenger experience as a submission to the 2020 Facebook Messenger Hackathon. Moved by the Black Lives Matter movement, we used Messenger features to build an engaging, informative bot to guide FB users to different ways to support the ongoing movement."
								}
								imgs={[
									[
										messenger,
										"https://m.me/BLMtest",
										"Chat with the bot!",
									],
									[blm, ""],
									[
										devpost,
										"https://devpost.com/software/spreading-the-movement",
										"Our Devpost submission",
									],
								]}
								color={"fb"}
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
