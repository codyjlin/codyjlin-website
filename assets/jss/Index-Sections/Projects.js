import { container, title } from "assets/jss/nextjs-material-kit.js";

import imagesStyles from "assets/jss/nextjs-material-kit/imagesStyles.js";

const projectsStyle = {
	section: {
		padding: "20px 0",
	},
	container,
	space50: {
		height: "50px",
		display: "block",
	},
	title: {
		...title,
		marginTop: "30px",
		minHeight: "32px",
		textDecoration: "none",
		cursor: "pointer",
		transition: ".25s ease",
		"&:hover": {
			opacity: "0.8",
		},
	},
	typo: {
		paddingLeft: "25%",
		marginBottom: "40px",
		position: "relative",
		width: "100%",
	},
	note: {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		bottom: "10px",
		color: "#c0c1c2",
		display: "block",
		fontWeight: "400",
		fontSize: "13px",
		lineHeight: "13px",
		left: "0",
		marginLeft: "20px",
		position: "absolute",
		width: "260px",
	},
	marginLeft: {
		marginLeft: "auto !important",
	},
	...imagesStyles,
	textCenter: {
		textAlign: "center",
	},
	sharingArea: {
		marginTop: "80px",
	},
	linkTitle: {
		cursor: "pointer",
		transition: ".25s ease",
		"&:hover": {
			opacity: "0.8",
		},
	},
};

export default projectsStyle;
