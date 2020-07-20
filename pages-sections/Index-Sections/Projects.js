import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import DescriptionIcon from "@material-ui/icons/Description";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import Project from "pages-sections/Index-Sections/Project.js";

// assets/imgs
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

import styles from "assets/jss/Index-Sections/Projects.js";

const useStyles = makeStyles(styles);

export default function Projects() {
	const classes = useStyles();
	return (
		<div className={classes.section}>
			<div className={classes.container}>
				<h2>
					<b>Projects</b>
				</h2>
				<h4> Maybe write something here?, ...</h4>
				<div className={classes.space50} />
				<div>
					<GridContainer>
						<Project
							title="Generation Do!"
							description="https://devpost.com/software/spreading-the-movement Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
							imgs={[[gendo, "https://gendoit.org"]]}
							iconColor="info"
							vertical
						/>
						<Project
							title="SEL Slackbot"
							description="https://devpost.com/software/spreading-the-movement Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
							imgs={[
								[slack, ""],
								[sel, "https://nmardoin.people.stanford.edu/"],
							]}
							iconColor="info"
							vertical
						/>
						<Project
							title="CourseTable"
							description="https://devpost.com/software/spreading-the-movement Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
							imgs={[
								[
									ct,
									"https://github.com/coursetable/coursetable",
								],
								[y, ""],
							]}
							iconColor="info"
							vertical
						/>
						<Project
							title="Spreading the Movement"
							description="https://devpost.com/software/spreading-the-movement Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
							imgs={[
								[
									blm,
									"https://devpost.com/software/spreading-the-movement",
								],
								[messenger, "https://m.me/BLMtest"],
							]}
							iconColor="info"
							vertical
						/>
						<Project
							title="Carbon Footprint Tracker"
							description=" Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing bout your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
							imgs={[
								[
									callforcode,
									"https://developer.ibm.com/callforcode/",
								],
								[bee, ""],
							]}
							iconColor="info"
							vertical
						/>
						<GridItem
							container
							xs={12}
							sm={12}
							md={12}
							justify="center"
						>
							<h3>See more here:</h3>
						</GridItem>
						<div className={classes.space50} />
						<GridItem
							container
							xs={12}
							sm={12}
							md={12}
							justify="center"
						>
							<Button
								color="github"
								size="lg"
								href="https://github.com/codyjlin"
								target="_blank"
							>
								<i
									className={
										classes.socials + " fab fa-github"
									}
								/>{" "}
								GitHub
							</Button>
							<Button
								color="linkedin"
								size="lg"
								href="https://linkedin.com/in/codyjlin"
								target="_blank"
							>
								<i
									className={
										classes.socials + " fab fa-linkedin"
									}
								/>{" "}
								LinkedIn
							</Button>
							<Button
								color="resume"
								size="lg"
								href="https://drive.google.com/file/d/1xKZ6UIQjhQdp161N04j7E_qAWUfkctQi/view?usp=sharing"
								target="_blank"
							>
								<DescriptionIcon /> Resume
							</Button>
						</GridItem>
					</GridContainer>
				</div>
			</div>
		</div>
	);
}
