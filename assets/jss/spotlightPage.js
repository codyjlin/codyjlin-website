import { container, title } from "assets/jss/nextjs-material-kit.js";

import imagesStyle from "assets/jss/nextjs-material-kit/imagesStyles.js";
import tooltipsStyle from "assets/jss/nextjs-material-kit/tooltipsStyle.js";

const spotlightStyle = {
	container,
	caption: {
		// @codyjlin: cooking captions
		position: "relative",
		width: "100%",
		bottom: "20px",
		textAlign: "center",
	},
	profile: {
		textAlign: "center",
		"& img": {
			maxWidth: "160px",
			width: "100%",
			margin: "0 auto",
			transform: "translate3d(0, -50%, 0)",
		},
	},
	space30: {
		height: "30px",
		display: "block",
	},
	space50: {
		height: "50px",
		display: "block",
	},
	space90: {
		height: "90px",
		display: "block",
	},
	description: {
		margin: "1.071rem auto 0",
		maxWidth: "600px",
		color: "#999",
		textAlign: "center !important",
	},
	name: {
		marginTop: "-80px",
	},
	...imagesStyle,
	main: {
		background: "#FFFFFF",
		position: "relative",
		zIndex: "3",
	},
	mainRaised: {
		margin: "-60px 30px 0px",
		borderRadius: "6px",
		boxShadow:
			"0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
	},
	title: {
		...title,
		display: "inline-block",
		position: "relative",
		marginTop: "30px",
		minHeight: "32px",
		textDecoration: "none",
	},
	socials: {
		marginTop: "0",
		width: "100%",
		transform: "none",
		left: "0",
		top: "0",
		height: "100%",
		lineHeight: "41px",
		fontSize: "20px",
		color: "#999",
	},
	navWrapper: {
		margin: "20px auto 50px auto",
		textAlign: "center",
	},
	...tooltipsStyle,
};

export default spotlightStyle;
