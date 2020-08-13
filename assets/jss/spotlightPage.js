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
	space20: {
		height: "20px",
		display: "block",
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
		background: "#FFFFFF", // @codyjlin change background color ("#e6f1ff")
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
	icon: {
		width: "18px",
		height: "20px",
		position: "relative",
		top: "3px",
	},
	largeIcon: {
		width: "25px",
		height: "40px",
		position: "relative",
		top: "3px",
	},
	travelCloseButton: {
		width: "45px",
		height: "45px",
		color: "#999999",
		WebkitAppearance: "none",
		padding: "0",
		cursor: "pointer",
		background: "0 0",
		border: "0",
		fontSize: "inherit",
		opacity: ".9",
		textShadow: "none",
		fontWeight: "700",
		lineHeight: "1",
		float: "right",
	},
	travelClose: {
		width: "30px",
		height: "30px",
	},
	imgHover: {
		boxShadow:
			"0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
		transition: ".25s ease",
		"&:hover": {
			cursor: "pointer",
			boxShadow:
				"0 15px 35px -12px rgba(0, 0, 0, 0.72), 0 10px 30px 0px rgba(0, 0, 0, 0.42), 0 13px 15px -5px rgba(0, 0, 0, 0.5)",
			opacity: "0.7",
		},
	},
	projectLogo: {
		borderRadius: "20px !important",
		maxHeight: "130px",
		width: "auto",
		objectFit: "contain",
		padding: "20px 20px",
		boxShadow:
			"0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
		transition: ".25s ease",
		"&:hover": {
			cursor: "pointer",
			boxShadow:
				"0 15px 35px -12px rgba(0, 0, 0, 0.72), 0 10px 30px 0px rgba(0, 0, 0, 0.42), 0 13px 15px -5px rgba(0, 0, 0, 0.5)",
			opacity: "0.7",
		},
	},
	linkTitle: {
		cursor: "pointer",
		transition: ".25s ease",
		"&:hover": {
			opacity: "0.8",
		},
	},
};

export default spotlightStyle;
