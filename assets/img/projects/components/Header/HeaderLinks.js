/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import { Build } from "@material-ui/icons";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import CreateIcon from "@material-ui/icons/Create";
import PublicIcon from "@material-ui/icons/Public";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import DescriptionIcon from "@material-ui/icons/Description";

// core componentsx
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
	const classes = useStyles();
	return (
		<List className={classes.list}>
			{/* <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Components"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link href="/components">
              <a className={classes.dropdownLink}>All components</a>
            </Link>,
            <a
              href="https://creativetimofficial.github.io/nextjs-material-kit/#/documentation?ref=njsmk-navbar"
              target="_blank"
              className={classes.dropdownLink}
            >
              Documentation
            </a>
          ]}
        />
      </ListItem> */}
			<ListItem className={classes.listItem}>
				<Button
					href="/projects"
					color={(props.type == "projects" && "default") || "transparent"}
					className={classes.navLink}
				>
					<Build className={classes.icons} /> Projects
				</Button>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Button
					href="/travel"
					color={(props.type == "travel" && "default") || "transparent"}
					className={classes.navLink}
				>
					<PublicIcon className={classes.icons} /> Travel
				</Button>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Button
					href="/cooking"
					color={(props.type == "cooking" && "default") || "transparent"}
					className={classes.navLink}
				>
					<FastfoodIcon className={classes.icons} /> Cooking
				</Button>
			</ListItem>

			{/* <ListItem className={classes.listItem}>
        <Button
          href="https://www.creative-tim.com/product/nextjs-material-kit?ref=njsmk-navbar"
          color={(props.type == "blog" && "default") || "blog"}
          className={classes.navLink}
        >
          <CreateIcon className={classes.icons} /> Blog
        </Button>
      </ListItem> */}

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

			<ListItem className={classes.listItem}>
				<Tooltip
					id="resume"
					title="Check out my resume"
					placement={"top"}
					classes={{ tooltip: classes.tooltip }}
				>
					<Button
						color="transparent"
						href="https://drive.google.com/file/d/1xKZ6UIQjhQdp161N04j7E_qAWUfkctQi/view?usp=sharing"
						target="_blank"
						className={classes.navLink}
					>
						<DescriptionIcon className={classes.icons} />
					</Button>
				</Tooltip>
			</ListItem>

			{/* <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem> */}
		</List>
	);
}
