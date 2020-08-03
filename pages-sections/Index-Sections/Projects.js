import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import DescriptionIcon from "@material-ui/icons/Description";
import { Build } from "@material-ui/icons";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import Project from "pages-sections/Index-Sections/Project.js";

// images
import gendo from "assets/img/projects/gendo.png";
import slack from "assets/img/projects/slackbot_slack.png";
import sel from "assets/img/projects/slackbot_sel.png";
import ct from "assets/img/projects/coursetable_ct.png";
import y from "assets/img/projects/y_logo.png";
import messenger from "assets/img/projects/fb_hackathon_messenger.png";
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
				<hr />
				<h2>
					<b>Projects</b>
				</h2>
				<div className={classes.space50} />
				<div>
					<GridContainer>
						<Project
							title="Generation Do!"
							description="A nonprofit initiative to connect students with meaningful projects at organizations solving real-world problems."
							imgs={[[gendo, "https://gendoit.org"]]}
						/>
						<Project
							title="CourseTable"
							description={
								"Yale's most popular course search tool, now maintained and developed by Yale Computer Society."
							}
							imgs={[
								[
									ct,
									"https://github.com/coursetable/coursetable",
								],
								[y, ""],
							]}
						/>
						<Project
							title="SEL Slack Bot"
							description="A Slack bot to collect status reports from lab students, provide encouragement, and spur friendly competition."
							imgs={[
								[slack, ""],
								[sel, "https://nmardoin.people.stanford.edu/"],
							]}
						/>
						<Project
							title="EnvYou"
							description="A social media platform to incentivize people to be more aware of their carbon footprint and actively reduce it.
							"
							imgs={[
								[
									callforcode,
									"https://developer.ibm.com/callforcode/",
								],
								[bee, ""],
							]}
						/>
						<Project
							title="Spreading the Movement"
							description="A Messenger Bot that guides Facebook users to ways they can help support a movement, whether it be financially, socially, or physically."
							imgs={[
								[
									blm,
									"https://devpost.com/software/spreading-the-movement",
								],
								[messenger, "https://m.me/BLMtest"],
							]}
						/>
						<GridItem
							container
							xs={12}
							sm={12}
							md={12}
							justify="center"
						>
							<div className={classes.space30} />
						</GridItem>
						<GridItem
							container
							xs={12}
							sm={12}
							md={12}
							justify="center"
						>
							<h3>See more here:</h3>
						</GridItem>
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
								/>
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
								/>
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
