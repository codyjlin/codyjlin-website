import React from "react";
import Head from "next/head";
import Fade from "react-reveal/Fade";

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
import sel from "assets/img/projects/slackbot_sel.png";
import ct from "assets/img/projects/coursetable_ct.png";
import y from "assets/img/projects/y_logo.png";
import messenger from "assets/img/projects/fb_hackathon_messenger.png";
import blm from "assets/img/projects/fb_hackathon_blm.png";
import bee from "assets/img/projects/bee.png";
import callforcode from "assets/img/projects/ibm_hackathon_call_for_code.png";
import getImageSrc from "common/getImageSrc.js";

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
												src={getImageSrc(profile)}
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
							<Fade delay="200" duration="1500">
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
											getImageSrc(gendo),
											"https://gendoit.org",
											"The GenDo website",
										],
									]}
									color={"gendo"}
								/>
							</Fade>
							<Fade delay="200" duration="1500">
								<Project
									title={"CourseTable"}
									what={
										"The most popular course search application at Yale."
									}
									why={
										"Ever since its launch in 2011, CourseTable has been a staple for Yalies browsing and choosing classes. In Fall 2019, Yale Computer Society took over maintenance and development from CourseTable's creators, and our team continues to address feedback, bug reports, and feature requests."
									}
									imgs={[
										[
											getImageSrc(ct),
											"https://github.com/coursetable/coursetable",
											"The CourseTable repo.",
										],
										[getImageSrc(y), ""],
									]}
									color={"coursetable"}
								/>
							</Fade>
							<Fade delay="200" duration="1500">
								<Project
									title={"Social Ecology Lab Slack Bot"}
									what={
										"A Slack bot to collect status reports from lab students, provide encouragement, and spur friendly competition."
									}
									why={
										"Instead of manually checking in with students and keeping them engaged with their work, the instructor can rely on the Slack bot to automate these tasks and instead focus on outstanding blockers and individuals. It saves time and effort for both the instructor and students."
									}
									imgs={[
										[getImageSrc(slack), ""],
										[
											getImageSrc(sel),
											"https://nmardoin.people.stanford.edu/",
											"The Social Ecology Lab",
										],
									]}
									color={"stanford"}
								/>
							</Fade>
							<Fade delay="200" duration="1500">
								<Project
									title={"EnvYou"}
									what={
										"A social media platform to incentivize people to reduce their carbon footprint."
									}
									why={
										"Awareness and motivation are among the biggest challenges of the current climate crisis. The platform not only helps individuals track their carbon footprint better but also helps friends hold each other accountable and even compete with one another, leading to more environmentally friendly decisions and a greener world."
									}
									imgs={[
										[
											getImageSrc(callforcode),
											"https://developer.ibm.com/callforcode/",
											"The public challenge",
										],
										[getImageSrc(bee), ""],
									]}
									color={"ibm"}
								/>
							</Fade>
							<Fade delay="200" duration="1500">
								<Project
									title={"Spreading the Movement"}
									what={
										"A Messenger bot that guides Facebook users to ways they can help support a movement, whether it be financially, socially, or physically."
									}
									why={
										"Especially for those living in the suburbs of major cities, it takes significant research to find the right ways to support a cause like the Black Lives Matter movement. The bot leverages Messenger features to build an engaging, informative, and simple experience guiding FB users to different ways to support the ongoing movement."
									}
									imgs={[
										[
											getImageSrc(messenger),
											"https://m.me/BLMtest",
											"Chat with the bot!",
										],
										[
											getImageSrc(blm),
											"https://devpost.com/software/spreading-the-movement",
											"Our Devpost submission",
										],
									]}
									color={"fb"}
								/>
							</Fade>
							<div className={classes.space90} />
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</React.Fragment>
	);
}
