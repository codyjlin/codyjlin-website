import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Badge from "components/Badge/Badge.js";

import styles from "assets/jss/spotlightPage.js";

const useStyles = makeStyles(styles);

export default function Project(props) {
	const classes = useStyles();
	const { title, what, why, imgs, color } = props;
	const imageClasses = classNames(classes.imgRounded, classes.imgGallery);
	return (
		<GridContainer>
			<GridItem xs={12} sm={12} md={12}>
				<GridContainer justify="center">
					<GridItem
						container
						xs={12}
						sm={12}
						md={7}
						alignContent="space-around"
					>
						<GridItem xs={12} sm={12} md={12}>
							<h3 className={classes.title}>
								{/* {"\xa0\xa0\xa0"} */}
								{title}
							</h3>
						</GridItem>
						<GridItem xs={12} sm={12} md={12}>
							<GridContainer>
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
									<h5>
										<b>{what}</b>
									</h5>
								</GridItem>
							</GridContainer>
						</GridItem>
						<GridItem xs={12} sm={12} md={12}>
							<GridContainer>
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
						md={5}
						justify="space-around"
						alignItems="center"
					>
						{imgs.map((img) => (
							<GridItem
								container
								xs={Math.floor(12 / imgs.length) - 1}
								sm={Math.floor(12 / imgs.length) - 1}
								md={Math.floor(12 / imgs.length) - 1}
								justify="center"
								alignItems="center"
							>
								{(img[1] != "" && (
									<Tooltip
										title={img[2]}
										placement={"bottom"}
										classes={{ tooltip: classes.tooltip }}
									>
										<a href={img[1]} target="_blank">
											<img
												className={classes.projectLogo}
												alt="..."
												src={img[0]}
											/>
										</a>
									</Tooltip>
								)) || (
									<img
										alt="..."
										src={img[0]}
										style={{
											maxHeight: "130px",
											width: "auto",
											objectFit: "contain",
											padding: "20px 20px",
										}}
									/>
								)}
							</GridItem>
						))}
					</GridItem>
				</GridContainer>
			</GridItem>
			<div className={classes.space30} />
		</GridContainer>
	);
}
