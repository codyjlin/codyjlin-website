import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import image from "assets/img/faces/avatar.jpg";

import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function Projects() {
	const classes = useStyles();
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
	};
	return (
		<div className={classes.section}>
			<div className={classes.container}>
				<h2>Projects</h2>
				<h4> Maybe write something here?, ...</h4>
				<div>
					<GridContainer>
						<GridItem xs={12} sm={6} md={3}>
							<InfoArea
								title="Free Chat"
								description="https://devpost.com/software/spreading-the-movement Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
								icon={Chat}
								iconColor="info"
								vertical
							/>
						</GridItem>
						<GridItem xs={12} sm={6} md={3}>
							<InfoArea
								title="Verified Users"
								description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
								icon={VerifiedUser}
								iconColor="success"
								vertical
							/>
						</GridItem>
						<GridItem xs={12} sm={6} md={3}>
							<InfoArea
								title="Fingerprint"
								description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
								icon={Fingerprint}
								iconColor="danger"
								vertical
							/>
						</GridItem>
						<GridItem xs={12} sm={6} md={3}>
							<InfoArea
								title="Fingerprint"
								description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
								icon={Fingerprint}
								iconColor="danger"
								vertical
							/>
						</GridItem>
					</GridContainer>
				</div>
			</div>
		</div>
	);
}
