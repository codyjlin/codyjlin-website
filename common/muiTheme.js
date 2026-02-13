import { createTheme } from "@mui/material/styles";

const muiTheme = createTheme({
	palette: {
		primary: {
			main: "#00acc1",
		},
		secondary: {
			main: "#2a3a4a",
		},
		background: {
			default: "#f5f8fb",
		},
	},
	shape: {
		borderRadius: 10,
	},
	typography: {
		fontFamily: '"Miriam Libre", "Roboto", "Helvetica", "Arial", sans-serif',
		h1: {
			letterSpacing: "-0.02em",
		},
		h2: {
			letterSpacing: "-0.015em",
		},
	},
});

export default muiTheme;
