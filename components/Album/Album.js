import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Badge from "components/Badge/Badge.js";
import getImageSrc from "common/getImageSrc.js";

import styles from "assets/jss/spotlightPage.js";

const useStyles = makeStyles(styles);

export default function Album(props) {
	const classes = useStyles();
	const { title, what, why, picture } = props;
	const imageClasses = classNames(
		classes.imgRaised,
		classes.imgRoundedCircle,
		classes.imgFluid
	);
	return (
		<GridContainer>
			<GridItem xs={12} sm={12} md={4}>
				<h3>
					{"\xa0\xa0\xa0"}
					{title}
				</h3>
			</GridItem>
			<GridItem xs={12} sm={12} md={12}>
				<GridContainer justify="center">
					<GridItem
						container
						xs={12}
						sm={12}
						md={6}
						alignContent="space-around"
					>
						<GridItem xs={12} sm={12} md={12}>
							<GridContainer justify="center">
								<GridItem xs={3} sm={3} md={3}>
									<Badge color="primary">What</Badge>
								</GridItem>
								<GridItem xs={9} sm={9} md={9}>
									<p>{what}</p>
								</GridItem>
							</GridContainer>
						</GridItem>
						<GridItem xs={12} sm={12} md={12}>
							<GridContainer justify="center">
								<GridItem xs={3} sm={3} md={3}>
									<Badge color="primary">
										{"\xa0"}Why{"\xa0"}
									</Badge>
								</GridItem>
								<GridItem xs={9} sm={9} md={9}>
									<p>{why}</p>
								</GridItem>
							</GridContainer>
						</GridItem>
					</GridItem>

					<GridItem xs={12} sm={12} md={6} justify="center">
						<img
							alt="..."
							src={getImageSrc(picture)}
							className={classes.imgFluid}
						/>
					</GridItem>
				</GridContainer>
			</GridItem>
		</GridContainer>
	);
}
