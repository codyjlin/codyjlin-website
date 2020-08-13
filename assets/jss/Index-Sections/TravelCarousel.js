import { container } from "assets/jss/nextjs-material-kit.js";

const carouselStyle = {
	section: {
		padding: "20px 0",
	},
	container,
	marginAuto: {
		marginLeft: "auto !important",
		marginRight: "auto !important",
	},
	linkTitle: {
		cursor: "pointer",
		transition: ".25s ease",
		"&:hover": {
			opacity: "0.8",
		},
	},
};

export default carouselStyle;
