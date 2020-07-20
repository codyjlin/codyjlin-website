/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import DescriptionIcon from "@material-ui/icons/Description";
import GitHubIcon from "@material-ui/icons/GitHub";

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
					Cody J. Lin
					{/* <Favorite className={classes.icon} /> */}
				</div>
			</div>
		</footer>
	);
}

Footer.propTypes = {
	whiteFont: PropTypes.bool,
};
