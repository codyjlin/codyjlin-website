/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@mui/material";
import { makeStyles } from "@mui/styles";

// @material-ui/icons
import Favorite from "@mui/icons-material/Favorite";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from "@mui/icons-material/Description";
import GitHubIcon from "@mui/icons-material/GitHub";

import styles from "assets/jss/nextjs-material-kit/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
	const classes = useStyles();
	const { whiteFont } = props;
	const footerClasses = classNames({
		[classes.footer]: true,
		[classes.footerWhiteFont]: whiteFont,
	});
	const aClasses = classNames({
		[classes.a]: true,
		[classes.footerWhiteFont]: whiteFont,
	});
	return (
		<footer className={footerClasses}>
			<div className={classes.container}>
				<div className={classes.left}>
					<List className={classes.list}>
						<ListItem className={classes.inlineBlock}>
							<a
								href="https://github.com/codyjlin"
								className={classes.block}
								target="_blank"
							>
								<GitHubIcon className={classes.icon} /> Github
							</a>
						</ListItem>

						<ListItem className={classes.inlineBlock}>
							<a
								href="https://www.linkedin.com/in/codyjlin"
								className={classes.block}
								target="_blank"
							>
								<LinkedInIcon className={classes.icon} />{" "}
								LinkedIn
							</a>
						</ListItem>
						<ListItem className={classes.inlineBlock}>
							<a
								href="https://drive.google.com/file/d/1xKZ6UIQjhQdp161N04j7E_qAWUfkctQi/view?usp=sharing"
								className={classes.block}
								target="_blank"
							>
								<DescriptionIcon className={classes.icon} />{" "}
								Resume
							</a>
						</ListItem>
					</List>
				</div>
				<div className={classes.right}>
					<BorderColorIcon className={classes.icon} />
					{"  "}
					CJL
					{/* <Favorite className={classes.icon} /> */}
				</div>
			</div>
		</footer>
	);
}

Footer.propTypes = {
	whiteFont: PropTypes.bool,
};
