import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Badge from "components/Badge/Badge.js";

import styles from "assets/jss/spotlightPage.js";

const useStyles = makeStyles(styles);

export default function Project(props) {
	const classes = useStyles();
	const { title, what, why, picture, color } = props;
	const imageClasses = classNames(classes.imgRounded, classes.imgGallery);
	return (
		<GridContainer>
			{/* <GridItem xs={12} sm={12} md={4}>
				<h3>
					{"\xa0\xa0\xa0"}
					{title}
				</h3>
			</GridItem> */}
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
							<h3>
								<b>
									{"\xa0\xa0\xa0"}
									{title}
								</b>
							</h3>
						</GridItem>
						<GridItem xs={12} sm={12} md={12}>
							<GridContainer justify="center">
								<GridItem
									container
									xs={3}
									sm={3}
									md={3}
									alignItems="center"
									justify="center"
								>
									<Badge color={color}>What</Badge>
								</GridItem>

								<GridItem xs={9} sm={9} md={9}>
									<h5>{what}</h5>
								</GridItem>
							</GridContainer>
						</GridItem>
						<GridItem xs={12} sm={12} md={12}>
							<GridContainer justify="center">
								<GridItem
									container
									xs={3}
									sm={3}
									md={3}
									alignItems="center"
									justify="center"
								>
									<Badge color={color}>
										{"\xa0"}Why{"\xa0"}
									</Badge>
								</GridItem>
								<GridItem xs={9} sm={9} md={9}>
									<h5>{why}</h5>
								</GridItem>
							</GridContainer>
							<div className={classes.space30} />
						</GridItem>
					</GridItem>

					<GridItem
						container
						xs={12}
						sm={12}
						md={6}
						justify="center"
						alignItems="center"
					>
						<img
							alt="..."
							src={picture}
							style={{ maxHeight: "200px", width: "auto" }}
						/>
					</GridItem>
				</GridContainer>
			</GridItem>
			<div className={classes.space30} />
		</GridContainer>
	);
}
