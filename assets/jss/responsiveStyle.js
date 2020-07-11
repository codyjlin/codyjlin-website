import { container } from "assets/jss/nextjs-material-kit.js";
import imagesStyle from "assets/jss/nextjs-material-kit/imagesStyles.js";

const responsiveStyle = {
	section: {
		padding: "50px 20px 0",
	},
	container,
	marginAuto: {
		marginLeft: "auto !important",
		marginRight: "auto !important",
	},
	...imagesStyle,
};

export default responsiveStyle;
