/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@mui/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Tooltip from "@mui/material/Tooltip";

// @material-ui/icons
import Build from "@mui/icons-material/Build";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import CreateIcon from "@mui/icons-material/Create";
import PublicIcon from "@mui/icons-material/Public";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
	const classes = useStyles();
	return (
		<List className={classes.list}>
			<ListItem className={classes.listItem}>
				<Link
					href="/projects"
					style={{ color: "inherit", textDecoration: "none" }}
				>
					<Button // TODO: underline instead of change color
						color={
							(props.type == "projects" && "default") ||
							"transparent"
						}
						className={classes.navLink}
					>
						<Build className={classes.icons} /> Projects
					</Button>
				</Link>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Link
					href="/travel"
					style={{ color: "inherit", textDecoration: "none" }}
				>
					<Button
						color={
							(props.type == "travel" && "default") ||
							"transparent"
						}
						className={classes.navLink}
					>
						<PublicIcon className={classes.icons} /> Travel
					</Button>
				</Link>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Link
					href="/cooking"
					style={{ color: "inherit", textDecoration: "none" }}
				>
					<Button
						color={
							(props.type == "cooking" && "default") ||
							"transparent"
						}
						className={classes.navLink}
					>
						<FastfoodIcon className={classes.icons} /> Cooking
					</Button>
				</Link>
			</ListItem>
			{/* TODO: blog page? tennis page? */}
			<ListItem className={classes.listItem}>
				<Tooltip
					id="linkedin"
					title="Connect on LinkedIn"
					placement={"top"}
					classes={{ tooltip: classes.tooltip }}
				>
					<Button
						color="transparent"
						href="https://www.linkedin.com/in/codyjlin"
						target="_blank"
						className={classes.navLink}
					>
						<LinkedInIcon className={classes.icons} />
					</Button>
				</Tooltip>
			</ListItem>
		</List>
	);
}
