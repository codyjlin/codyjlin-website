import {
	primaryColor,
	warningColor,
	dangerColor,
	successColor,
	infoColor,
	roseColor,
} from "assets/jss/nextjs-material-kit.js";

const badgeStyle = {
	badge: {
		marginRight: "3px",
		borderRadius: "12px",
		padding: "15px 22px", // @codyjlin: size of badges
		textTransform: "uppercase",
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontSize: "13px",
		fontWeight: "500",
		lineHeight: "1",
		color: "#fff",
		textAlign: "center",
		whiteSpace: "nowrap",
		verticalAlign: "baseline",
		display: "inline-block",
	},
	ibm: {
		backgroundColor: "#1F70C1",
	},
	fb: {
		backgroundColor: "#007ef8",
	},
	coursetable: {
		backgroundColor: "#444454",
	},
	stanford: {
		backgroundColor: "#890c12",
	},
	gendo: {
		backgroundColor: "#1f71d6",
	},
	primary: {
		backgroundColor: primaryColor,
	},
	warning: {
		backgroundColor: warningColor,
	},
	danger: {
		backgroundColor: dangerColor,
	},
	success: {
		backgroundColor: successColor,
	},
	info: {
		backgroundColor: infoColor,
	},
	rose: {
		backgroundColor: roseColor,
	},
	gray: {
		backgroundColor: "#6c757d",
	},
};

export default badgeStyle;
