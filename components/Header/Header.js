import React from "react";
import Link from "next/link";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
// @material-ui/icons
import Menu from "@mui/icons-material/Menu";
// core components
import styles from "assets/jss/nextjs-material-kit/components/headerStyle.js";

const useStyles = makeStyles(styles);

export default function Header(props) {
	const classes = useStyles();
	const [mobileOpen, setMobileOpen] = React.useState(false);
	React.useEffect(() => {
		if (props.changeColorOnScroll) {
			window.addEventListener("scroll", headerColorChange);
		}
		return function cleanup() {
			if (props.changeColorOnScroll) {
				window.removeEventListener("scroll", headerColorChange);
			}
		};
	});
	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};
	const headerColorChange = () => {
		const { color, changeColorOnScroll } = props;
		const windowsScrollTop = window.pageYOffset;
		if (windowsScrollTop > changeColorOnScroll.height) {
			document.body
				.getElementsByTagName("header")[0]
				.classList.remove(classes[color]);
			document.body
				.getElementsByTagName("header")[0]
				.classList.add(classes[changeColorOnScroll.color]);
		} else {
			document.body
				.getElementsByTagName("header")[0]
				.classList.add(classes[color]);
			document.body
				.getElementsByTagName("header")[0]
				.classList.remove(classes[changeColorOnScroll.color]);
		}
	};
	const { color, page, rightLinks, leftLinks, fixed, absolute } = props;
	const brand = "Cody J. Lin";
	const appBarClasses = classNames({
		[classes.appBar]: true,
		[classes[color]]: color,
		[classes.absolute]: absolute,
		[classes.fixed]: fixed,
	});
	const brandComponent = (
		<Link
			href="/"
			as="/"
			style={{ color: "inherit", textDecoration: "none" }}
		>
			<Button className={classes.title}>{brand}</Button>
		</Link>

		//  {page ? (
		// 	<Button className={classes.title}>
		// 		{">  "} {page}
		// 	</Button>
		// ) : null}  //  TODO: Navigation
	);
	return (
		<AppBar className={appBarClasses}>
			<Toolbar className={classes.container}>
				{leftLinks !== undefined ? brandComponent : null}
				<div className={classes.flex}>
					{leftLinks !== undefined ? (
						<Box sx={{ display: { xs: "none", md: "block" } }}>
							{leftLinks}
						</Box>
					) : (
						brandComponent
					)}
				</div>
				<Box sx={{ display: { xs: "none", md: "block" } }}>
					{rightLinks}
				</Box>
				<Box sx={{ display: { md: "none" } }}>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerToggle}
					>
						<Menu />
					</IconButton>
				</Box>
			</Toolbar>
			<Box sx={{ display: { md: "none" } }}>
				<Drawer
					variant="temporary"
					anchor={"right"}
					open={mobileOpen}
					classes={{
						paper: classes.drawerPaper,
					}}
					onClose={handleDrawerToggle}
				>
					<div className={classes.appResponsive}>
						{leftLinks}
						{rightLinks}
					</div>
				</Drawer>
			</Box>
		</AppBar>
	);
}

Header.defaultProps = {
	color: "white",
};

Header.propTypes = {
	color: PropTypes.oneOf([
		"primary",
		"info",
		"success",
		"warning",
		"danger",
		"transparent",
		"white",
		"rose",
		"dark",
	]),
	rightLinks: PropTypes.node,
	leftLinks: PropTypes.node,
	brand: PropTypes.string,
	fixed: PropTypes.bool,
	absolute: PropTypes.bool,
	// this will cause the sidebar to change the color from
	// props.color (see above) to changeColorOnScroll.color
	// when the window.pageYOffset is heigher or equal to
	// changeColorOnScroll.height and then when it is smaller than
	// changeColorOnScroll.height change it back to
	// props.color (see above)
	changeColorOnScroll: PropTypes.shape({
		height: PropTypes.number.isRequired,
		color: PropTypes.oneOf([
			"primary",
			"info",
			"success",
			"warning",
			"danger",
			"transparent",
			"white",
			"rose",
			"dark",
		]).isRequired,
	}),
};
