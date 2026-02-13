import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@mui/styles";

import styles from "assets/jss/nextjs-material-kit/components/badgeStyle.js";

const useStyles = makeStyles(styles);

export default function Badge(props) {
	const classes = useStyles();
	const { color, children } = props;
	return (
		<span className={classes.badge + " " + classes[color]}>{children}</span>
	);
}

Badge.defaultProps = {
	color: "gray",
};
