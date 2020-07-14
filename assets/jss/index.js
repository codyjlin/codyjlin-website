import { container, title } from "assets/jss/nextjs-material-kit.js";

const componentsStyle = {
	container,
	brand: {
		color: "#FFFFFF",
		textAlign: "left",
	},
	space80: {
		height: "80px",
		display: "block",
	},
	title: {
		fontFamily: `"Miriam Libre", sans-serif`,
		fontSize: "6.2rem",
		fontWeight: "600",
		display: "inline-block",
		position: "relative",
	},
	subtitle: {
		fontSize: "1.313rem",
		maxWidth: "510px",
		margin: "10px 0 0",
	},
	main: {
		background: "#FFFFFF",
		position: "relative",
		zIndex: "3",
		padding: "-100px 0px",
	},
	mainRaised: {
		margin: "-100px 50px 0px", // @codyjlin edit here for margin width
		borderRadius: "6px",
		boxShadow:
			"0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
		"@media (max-width: 830px)": {
			marginLeft: "10px",
			marginRight: "10px",
		},
	},
	link: {
		textDecoration: "none",
	},
	textCenter: {
		textAlign: "center",
	},
};

export default componentsStyle;
