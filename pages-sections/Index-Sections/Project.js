import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridItem from "components/Grid/GridItem.js";
import getImageSrc from "common/getImageSrc.js";

import styles from "assets/jss/Index-Sections/Projects.js";

const useStyles = makeStyles(styles);

export default function Project(props) {
	const classes = useStyles();
	const { title, description, imgs } = props;
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
					spacing={5}
				>
					<img
						alt="..."
						src={getImageSrc(img)}
						style={{
							maxHeight: "130px",
							width: "auto",
							objectFit: "contain",
							padding: "20px 20px",
						}}
					/>
				</GridItem>
			))}
			<GridItem>
				<Link href="/projects">
					<h3 className={classes.title}>{title}</h3>
				</Link>
				<p className={classes.description}>{description}</p>
				<div className={classes.space50} />
			</GridItem>
		</GridItem>
	);
}
