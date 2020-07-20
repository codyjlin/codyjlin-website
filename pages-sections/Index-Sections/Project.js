import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/Index-Sections/Projects.js";

const useStyles = makeStyles(styles);

export default function Project(props) {
	const classes = useStyles();
	const { title, description, iconColor, vertical, imgs } = props;
	const iconWrapper = classNames({
		[classes.iconWrapper]: true,
		[classes[iconColor]]: true,
		[classes.iconWrapperVertical]: vertical,
	});
	const iconClasses = classNames({
		[classes.icon]: true,
		[classes.iconVertical]: vertical,
	});
	return (
		<GridItem container xs={12} sm={6} md={4} justify="space-around">
			{imgs.map((img) => (
				<GridItem
					container
					xs={Math.floor(12 / imgs.length)}
					sm={Math.floor(12 / imgs.length)}
					md={Math.floor(8 / imgs.length)}
					justify="space-around"
					alignItems="center"
				>
					{(img[1] != "" && (
						<a href={img[1]} target="_blank">
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
						</a>
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

			<GridItem>
				<h3 className={classes.title}>{title}</h3>
				<p className={classes.description}>{description}</p>
			</GridItem>
		</GridItem>
	);
}
