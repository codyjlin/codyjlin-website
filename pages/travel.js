import React from "react";
import Head from "next/head";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";

// @material-ui/icons
import Close from "@material-ui/icons/Close";
import LocationOn from "@material-ui/icons/LocationOn";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/travel.jpg";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";

import styles from "assets/jss/spotlightPage.js";

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="down" ref={ref} {...props} />;
});

// TODO: map of all of the places
// TODO: link map location of all places

export default function TravelPage(props) {
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
		<React.Fragment>
			<Head>
				<title>Cody Lin | Travel</title>
			</Head>
			<div>
				<Header
					color="transparent"
					brand="NextJS Material Kit"
					rightLinks={<HeaderLinks type="travel" />}
					fixed
					changeColorOnScroll={{
						height: 200,
						color: "white",
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
											<h2 className={classes.title}>Travel</h2>
										</div>
									</div>
								</GridItem>
							</GridContainer>
							<div className={classes.description}>
								<p>
									An artist of considerable range, Chet Faker — the name taken
									by Melbourne-raised, Brooklyn-based Nick Murphy — writes,
									performs and records all of his own music, giving it a warm,
									intimate feel with a solid groove structure.{" "}
								</p>
								<br />
							</div>

							<GridContainer>
								<GridItem container xs={12} sm={6} md={4}>
									<GridItem>
										{/* <Button
									// color="transparent"
									onClick={() => setClassicModal(true)}
								>
									<img alt="..." src={studio1} />
								</Button> */}
										<a style={{ cursor: "pointer" }}>
											<img
												src={studio1}
												className={navImageClassesRounded}
												onClick={() => setClassicModal(true)}
											/>
										</a>

										<Dialog
											classes={{
												root: classes.center,
												paper: classes.modal,
											}}
											open={classicModal}
											TransitionComponent={Transition}
											keepMounted
											onClose={() => setClassicModal(false)}
											aria-labelledby="classic-modal-slide-title"
											aria-describedby="classic-modal-slide-description"
											maxWidth="md"
										>
											<DialogTitle
												id="classic-modal-slide-title"
												disableTypography
												className={classes.modalHeader}
											>
												<GridContainer
													xs={12}
													sm={12}
													md={12}
													justify="flex-end"
												>
													<GridItem xs={1} sm={1} md={1}>
														<IconButton
															className={classes.modalCloseButton}
															key="close"
															aria-label="Close"
															color="inherit"
															onClick={() => setClassicModal(false)}
														>
															<Close className={classes.modalClose} />
														</IconButton>
													</GridItem>
												</GridContainer>

												<GridItem
													container
													xs={12}
													sm={12}
													md={12}
													justify="center"
												>
													{/* TODO: Align items here */}
													<h3 className={classes.modalTitle}>
														<LocationOn />
														Banff National Park, United States
													</h3>
												</GridItem>
											</DialogTitle>

											<DialogContent
												id="classic-modal-slide-description"
												className={classes.modalBody}
											>
												<GridContainer justify="center">
													<GridItem xs={12} sm={12} md={4}>
														<img
															alt="..."
															src={studio1}
															className={navImageClasses}
														/>
														<img
															alt="..."
															src={studio2}
															className={navImageClasses}
														/>
													</GridItem>
													<GridItem xs={12} sm={12} md={4}>
														<img
															alt="..."
															src={studio5}
															className={navImageClasses}
														/>
														<img
															alt="..."
															src={studio4}
															className={navImageClasses}
														/>
													</GridItem>
													<GridItem xs={12} sm={12} md={4}>
														<img
															alt="..."
															src={work1}
															className={navImageClasses}
														/>
														<img
															alt="..."
															src={work2}
															className={navImageClasses}
														/>
														<img
															alt="..."
															src={work3}
															className={navImageClasses}
														/>
													</GridItem>
												</GridContainer>
											</DialogContent>
										</Dialog>
									</GridItem>

									<GridItem>
										{/* <h4>
										<LocationOn />
										Modal
									</h4> */}
										<div className="slick-caption">
											<h4>
												<b>Banff National Park</b>
												<br />
												Alberta, Canada | 2008
											</h4>
										</div>
									</GridItem>
								</GridItem>
							</GridContainer>
							<div className={classes.space50} />
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</React.Fragment>
	);
}
