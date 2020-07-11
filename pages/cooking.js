import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import Camera from "@material-ui/icons/Camera";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/cooking.jpeg";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";

import styles from "assets/jss/nextjs-material-kit/pages/cookingPage.js";

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="down" ref={ref} {...props} />;
});

export default function CookingPage(props) {
	const classes = useStyles();
	const { ...rest } = props;
	const imageClasses = classNames(
		classes.imgRaised,
		classes.imgRoundedCircle,
		classes.imgFluid
	);
	const navImageClassesRounded = classNames(
		classes.imgRounded,
		classes.imgFluid
	);
	const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
	const [classicModal, setClassicModal] = React.useState(false);
	return (
		<div>
			<Header
				color="transparent"
				page="Cooking"
				rightLinks={<HeaderLinks type="cooking" />}
				fixed
				changeColorOnScroll={{
					height: 200,
					color: "default",
				}}
				{...rest}
			/>
			<Parallax small filter image={require("assets/img/profile-bg.jpg")} />
			<div className={classNames(classes.main, classes.mainRaised)}>
				<div>
					<div className={classes.container}>
						<GridContainer justify="center">
							<GridItem xs={12} sm={12} md={6}>
								<div className={classes.profile}>
									<div>
										<img src={profile} alt="..." className={imageClasses} />
									</div>
									<div className={classes.name}>
										<h2 className={classes.title}>Cooking</h2>
									</div>
								</div>
							</GridItem>
						</GridContainer>
						<div className={classes.description}>
							<p>
								An artist of considerable range, Chet Faker — the name taken by
								Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
								and records all of his own music, giving it a warm, intimate
								feel with a solid groove structure.{" "}
							</p>
							<br />
						</div>

						<GridContainer justify="center">
							<GridItem xs={12} sm={12} md={4}>
								{/* TODO: toggle captions?? */}
								{/* <img alt="..." src={studio1} className={navImageClasses} />   // CAPTION
								<div className={classNames(classes.caption)}>
									<h4>Yellowstone National Park, United States</h4>
								</div> */}

								{/* <Tooltip    // TOOLTIP
										id="tooltip-left"
										title="Tooltip on bottom"
										placement="bottom"
										classes={{ tooltip: classes.tooltip }}
									>
										<img alt="..." src={studio1} className={navImageClasses} />
									</Tooltip> */}

								<img alt="..." src={studio1} className={navImageClasses} />
								<img alt="..." src={studio2} className={navImageClasses} />
							</GridItem>
							<GridItem xs={12} sm={12} md={4}>
								<img alt="..." src={studio5} className={navImageClasses} />
								<img alt="..." src={studio4} className={navImageClasses} />
							</GridItem>
							<GridItem xs={12} sm={12} md={4}>
								<img alt="..." src={work1} className={navImageClasses} />
								<img alt="..." src={work2} className={navImageClasses} />
								<img alt="..." src={work3} className={navImageClasses} />
							</GridItem>
						</GridContainer>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
