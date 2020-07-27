import React from "react";

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
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/spotlightPage.js";

const useStyles = makeStyles(styles);
const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="down" ref={ref} {...props} />;
});

export default function Travel(props) {
	const classes = useStyles();
	const { name, setting, cover, imgs } = props;
	const navImageClassesRounded = classNames(
		classes.imgRounded,
		classes.imgFluid
	);
	const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
	const [classicModal, setClassicModal] = React.useState(false);

	var col1 = {},
		col2 = {},
		i = 0;
	for (const [key, value] of Object.entries(imgs)) {
		switch (i % 2) {
			case 0:
				col1[key] = value;
				break;
			default:
				col2[key] = value;
				break;
		}
		i++;
	}
	return (
		<GridItem container xs={12} sm={6} md={4}>
			<GridItem>
				{/* TODO: make modal more obvious? */}
				<a style={{ cursor: "pointer" }}>
					<img
						src={cover}
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
					maxWidth="lg"
				>
					<DialogTitle
						id="classic-modal-slide-title"
						disableTypography
						className={classes.modalHeader}
					>
						<GridContainer xs={12} sm={12} md={12}>
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
							<h3
								className={classes.modalTitle}
								style={{ textAlign: "center" }}
							>
								<b>{name}</b>
								<br />
								{setting}
							</h3>
						</GridItem>
					</DialogTitle>

					<DialogContent
						id="classic-modal-slide-description"
						className={classes.modalBody}
					>
						<GridContainer justify="center">
							<GridItem xs={12} sm={12} md={6}>
								{Object.keys(col1).map((key, index) => {
									return (
										<img
											alt="..."
											src={col1[key]}
											className={navImageClasses}
										/>
									);
								})}
							</GridItem>
							<GridItem xs={12} sm={12} md={6}>
								{Object.keys(col2).map((key, index) => {
									return (
										<img
											alt="..."
											src={col2[key]}
											className={navImageClasses}
										/>
									);
								})}
							</GridItem>
						</GridContainer>
					</DialogContent>
				</Dialog>
			</GridItem>

			<GridItem>
				<div className="slick-caption">
					<h4>
						<b>
							<LocationOn className={classes.icon} />
							{name}
						</b>
						<br />
						{setting}
					</h4>
				</div>
			</GridItem>
		</GridItem>
	);
}
